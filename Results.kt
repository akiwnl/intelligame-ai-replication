import org.eclipse.jgit.api.Git
import org.eclipse.jgit.api.errors.RefNotFoundException
import java.io.File
import java.time.LocalDateTime
import java.time.Month

fun main() {
    val resultsContent = File("${path}results.csv").readText()
    val dateRepo = File("${path}date-experiment-2024")
    val results = File("${path}results.csv")
    val git = Git.open(dateRepo)
    val contentsSplit = ArrayList(resultsContent.split("\n"))
    contentsSplit.removeFirst()
    contentsSplit.removeLast()

    contentsSplit.forEach { line ->
        val branchName = line.split(",")[1]
        val group = line.split(",")[2]

        try {
            git.checkout().setName(branchName).call()

            val report = File("${dateRepo.absolutePath}/.evaluation/TestReport.csv")
            if (report.exists()) {
                val reportList = ArrayList(report.readText().lines())
                reportList.remove(reportList.last())
                val log = "git log".runCommand2(dateRepo)

                val regex = "commit (([a-z0-9])+)\\s.*\\sDate: {3}(.*)".toRegex()
                val matches = log?.let { regex.findAll(it) }?.toList()
                var index = 0
                val endTime = getTimeOfReportLine(reportList.last())
                val hashes = arrayListOf<Pair<String, String>>()
                matches?.forEach {
                    val hash = it.groups[1]?.value
                    val timestampString = it.groups[3]?.value
                    val timestampList = timestampString?.split(" ")
                    val month = when (timestampList?.get(1)) {
                        "Feb" -> Month.FEBRUARY
                        "May" -> Month.MAY
                        "Jun" -> Month.JUNE
                        "Jul" -> Month.JULY
                        else -> Month.JANUARY
                    }
                    val timeList = timestampList?.get(3)?.split(":")
                    val date = LocalDateTime.of(
                        timestampList?.get(4)?.toInt()!!, month, timestampList[2].toInt(),
                        timeList?.get(0)?.toInt()!!, timeList[1].toInt(), timeList[2].toInt()
                    )
                    if (date < endTime && index <= 150) {
                        hashes.add(Pair(timestampString, hash!!))
                        index++
                    }
                }

                hashes.reverse()
                hashes.removeAll(hashes.take(13).toSet())

                if (hashes.isNotEmpty()) {
                    val lastHash = hashes.last()
                    "git checkout ${lastHash.second}".runCommand(dateRepo)

                    val resultPair = executeGoldenTestSuite(dateRepo, File("$path/date-fns-original"))
                    cleanGit(git)
                    val hashResult = "$branchName," +
                            "$group," +
                            "${lastHash.second}," +
                            "${lastHash.first}," +
                            "${countAllTests(dateRepo)}," +
                            "${testExecutions(dateRepo)}," +
                            "${testExecutionsWithCoverage(dateRepo)}," +
                            "${debuggerExecutions(dateRepo)}," +
                            "${numberOfLevels(dateRepo)}," +
                            "${countMainUses(dateRepo)}," +
                            "${mainExecutions(dateRepo)}," +
                            "${executeJestAll(dateRepo)}," +
                            "${runStrykerWithoutFailingTests(dateRepo)}," +
                            "${resultPair.first}," +
                            "${resultPair.second}\n"

                    resultsLastCommit.appendText(hashResult)
                }
            }
        } catch (e: RefNotFoundException) {
            println("Not found")
        } catch (e: IllegalStateException) {
            println("Endless loop")
        } finally {
            cleanGit(git)
            git.checkout().addPath("jest.config.ts").call()
            git.checkout().addPath("jest.config.js").call()
            git.checkout().addPath("jest.config.cjs").call()
            git.checkout().addPath("package.json").call()
            git.checkout().addPath("yarn.lock").call()
            git.checkout().addPath("node_modules/.yarn-integrity").call()
            git.checkout().addPath("src/toDate/index.js").call()
            git.checkout().addPath("stryker.config.mjs").call()
            git.checkout().addPath("resultsJest.json").call()
            git.checkout().addPath("src").call()
            git.checkout().addPath("main.js").call()
            git.clean().setForce(true).setCleanDirectories(true).call()
            git.close()
        }
    }
}

fun executeJestAll(folder: File): String {
    val command = "jest --coverage  --coverageReporters=\"text-summary\" --no-colors --json --outputFile=resultsJest.json"

    val output = command.runCommand(folder)

    val branchesRegex = Regex("Branches\\s*:\\s[\\d.]+%\\s\\(\\s(\\d+)/(\\d+)\\s\\)")
    val linesRegex = Regex("Lines\\s*:\\s[\\d.]+%\\s\\(\\s(\\d+)/(\\d+)\\s\\)")
    val testsRegex = Regex("Tests:\\s+(\\d+ failed, )*(\\d+) passed, (\\d+) total")
    val testSuitesRegex = Regex("Test Suites:\\s+(\\d+ failed, )*(\\d+) passed, (\\d+) total")
    val coveredLinesCount = linesRegex.find(output)?.groupValues?.get(1)?.toDouble() ?: 0.0
    val totalLinesCount = linesRegex.find(output)?.groupValues?.get(2)?.toDouble() ?: 0.0
    val coveredBranchesCount = branchesRegex.find(output)?.groupValues?.get(1)?.toDouble() ?: 0.0
    val totalBranchesCount = branchesRegex.find(output)?.groupValues?.get(2)?.toDouble() ?: 0.0
    val passedTests = testsRegex.find(output)?.groupValues?.get(2)?.toInt() ?: 0
    val totalTests = testsRegex.find(output)?.groupValues?.get(3)?.toInt() ?: 0

    val lineCoverage = coveredLinesCount / totalLinesCount
    val branchCoverage = coveredBranchesCount / totalBranchesCount

    return "${if (lineCoverage.isNaN()) 0 else lineCoverage},${if (branchCoverage.isNaN()) 0 else branchCoverage},${if (passedTests.isNaN()) 0 else passedTests},${if (totalTests.isNaN()) 0 else totalTests}"
}

fun runStrykerWithoutFailingTests(folder: File): String {
    File("${folder.absolutePath}/stryker.config.mjs").writeText(strykerConfig)
    File("${folder.absolutePath}/package.json").writeText(File("${folder.absolutePath}/package.json").readText().replace("    \"@types/bun\": \"^1.0.3\",", strykerPackage))

    "jest --no-colors --json --outputFile=resultsJest.json".runCommand(folder)

    val fileContent = File("${folder.absolutePath}/resultsJest.json").readText()
    val failedRegex = "\\{\"ancestorTitles\":\\[\"([^\"]+)\"],\"duration\":\\d+,\"failureDetails\":\\[[^]]*],\"failureMessages\":\\[[^]]*],\"fullName\":\"[^\"]*\",\"invocations\":\\d+,\"location\":null,\"numPassingAsserts\":\\d+,\"retryReasons\":\\[],\"status\":\"failed\",\"title\":\"([^\"]+)\"}".toRegex()
    val secondFailedRegex = "\\{\"ancestorTitles\":\\[],\"duration\":\\d+,\"failureDetails\":\\[[^]]*],\"failureMessages\":\\[[^]]*],\"fullName\":\"[^\"]*\",\"invocations\":\\d+,\"location\":null,\"numPassingAsserts\":\\d+,\"retryReasons\":\\[],\"status\":\"failed\",\"title\":\"([^\"]+)\"}".toRegex()

    val testFiles = getFilesInAllSubDirectories(File("${folder.absolutePath}/src/"), "test.ts")

    failedRegex.findAll(fileContent).forEach {
        val fileName = it.groupValues[1]
        val testName = it.groupValues[2]

        testFiles.forEach { testFile ->
            val content = testFile.readText()
            if (content.contains(fileName) && content.contains(testName)) {
                testFile.writeText(content.replace("test(\"$testName\"", "test.skip(\"$testName\""))
            }
        }
    }

    secondFailedRegex.findAll(fileContent).forEach {
        val testName = it.groupValues[1]

        testFiles.forEach { testFile ->
            val content = testFile.readText()
            if (content.contains(testName)) {
                testFile.writeText(content.replace("test(\"$testName\"", "test.skip(\"$testName\""))
            }
        }
    }

    testFiles.forEach { testFile ->
        if (!testFile.readText().contains("test(") && !testFile.readText().contains("test.skip(")) {
            testFile.delete()
        }
    }

    "npx tsc".runCommand(folder)
    val output = "npx stryker run".runCommand(folder)
    val mutRegex = "All files\\s*\\|\\s+(\\d+.\\d+)".toRegex()
    val mutationScore = mutRegex.find(output)?.groupValues?.get(1)?.toDouble() ?: 0.0

    return mutationScore.toString()
}
