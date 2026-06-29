import org.eclipse.jgit.api.Git
import org.eclipse.jgit.api.errors.RefNotFoundException
import java.io.File
import java.time.LocalDateTime
import java.time.Month


fun main() {
    val resultsContent = File("${path}results.csv").readText()
    val processFile = File("${path}process.csv")
    if (!processFile.exists()) {
        processFile.createNewFile()
        processFile.appendText("Branch,Group,Index,Timestamp,Tests,TestExecutions,TestExecutionsCoverage,DebuggerUses,Levels,FailedGoldenTests,PassedGoldenTests\n")
    }

    val dateRepo = File("${path}date-experiment-2024")
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
                    val month = when(timestampList?.get(1)) {
                        "Feb" -> Month.FEBRUARY
                        "May" -> Month.MAY
                        "Jun" -> Month.JUNE
                        "Jul" -> Month.JULY
                        else -> Month.JANUARY
                    }
                    val timeList = timestampList?.get(3)?.split(":")
                    val date = LocalDateTime.of(timestampList?.get(4)?.toInt()!!, month, timestampList[2].toInt(),
                        timeList?.get(0)?.toInt()!!, timeList[1].toInt(), timeList[2].toInt()
                    )
                    if (date < endTime && index <= 150) {
                        hashes.add(Pair(timestampString, hash!!))
                        index++
                    }
                }

                hashes.reverse()
                hashes.removeAll(hashes.take(13).toSet())

                hashes.forEachIndexed { index, (date, hash) ->
                    "git checkout $hash".runCommand(dateRepo)
                    var hashResult = "$date,${countAllTests(dateRepo)},${testExecutions(dateRepo)},${testExecutionsWithCoverage(dateRepo)},${debuggerExecutions(dateRepo)},${numberOfLevels(dateRepo)}"

                    val resultPair = executeGoldenTestSuite(dateRepo, File("$path/date-fns-original"))
                    hashResult = "$branchName,$group,$index,$hashResult,${resultPair.first},${resultPair.second}\n"
                    processFile.appendText(hashResult)
                    cleanGit(git)
                }
            } else {
                println("No Report")
            }

            println()
        } catch (e: RefNotFoundException) {
            println("Not found")
        } catch (e: IllegalStateException) {
            println("Endless loop")
        } finally {
            cleanGit(git)
            git.close()
        }
    }
}

fun cleanGit(git: Git) {
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
}

fun getTimeOfReportLine(line: String): LocalDateTime {
    val lastItemTimeList = line.split(",")[0].split(" ")
    val date = lastItemTimeList[0].split("-")
    val time = lastItemTimeList[1].split(":")
    return LocalDateTime.of(date[0].toInt(), date[1].toInt(), date[2].toInt(), time[0].toInt(), time[1].toInt()).plusMinutes(1)
}

fun mainExecutions(folder: File): Int {
    val log = File(folder.absolutePath + "/.evaluation/evaluationLogs.txt")

    if (log.exists()) {
        return "Main executed".toRegex().findAll(log.readText()).count()
    } else {
        return 0
    }
}

fun testExecutions(folder: File): Int {
    val testReport = File(folder.absolutePath + "/.evaluation/TestReport.csv")

    if (testReport.exists()) {
        val content = testReport.readText().trim().split("\n")
        return content.last().split(",")[45].toInt()
    } else {
        return 0
    }
}

fun testExecutionsWithCoverage(folder: File): Int {
    val testReport = File(folder.absolutePath + "/.evaluation/TestReport.csv")

    if (testReport.exists()) {
        val content = testReport.readText().trim().split("\n")
        return content.last().split(",")[42].toInt()
    } else {
        return 0
    }
}

fun debuggerExecutions(folder: File): Int {
    val testReport = File(folder.absolutePath + "/.evaluation/TestReport.csv")

    if (testReport.exists()) {
        val content = testReport.readText().trim().split("\n")
        return content.last().split(",")[43].toInt()
    } else {
        return 0
    }
}

fun numberOfLevels(folder: File): Int {
    val testReport = File(folder.absolutePath + "/.evaluation/TestReport.csv")

    if (testReport.exists()) {
        val content = testReport.readText().trim().split("\n")
        val lastLine = content.last().split(",")
        var levels = 0
        for (i in 1..26) {
            levels += lastLine[i].toInt()
        }

        return levels
    } else {
        return 0
    }
}

fun countAllTests(folder: File): Int {
    val testFiles = getFilesInAllSubDirectories(folder, "test.ts")
    var numberOfTests = 0

    testFiles.forEach { file ->
        val content = file.readText()

        numberOfTests += "\\stest\\(".toRegex().findAll(content).count()
        numberOfTests += "\\sit\\(".toRegex().findAll(content).count()
    }

    return numberOfTests
}

fun executeGoldenTestSuite(folder: File, goldenTestSuite: File): Pair<Int, Int> {
    val testFiles = getFilesInAllSubDirectories(goldenTestSuite, "test.ts")

    testFiles.forEach { file ->
        val newPath = folder.absolutePath + "/src/" + file.absolutePath.substringAfter("src/").replace("test", "test2")
        val newFile = File(newPath)
        file.copyTo(newFile, overwrite = true)
    }

    File("${goldenTestSuite.absolutePath}/src/toDate/index.js").copyTo(File("${folder.absolutePath}/src/toDate/index.js"), overwrite = true)

    File(folder.absolutePath + "/jest.config.cjs").writeText(jestConfigContent)

    val output = "jest --coverageReporters=\"text-summary\" --no-colors".runCommand2(folder)

    val testsRegex = Regex("Tests:\\s+(\\d+) failed,\\s+(\\d+) passed")
    val failedTests = testsRegex.find(output)?.groupValues?.get(1)?.toInt() ?: 60
    val passedTests = testsRegex.find(output)?.groupValues?.get(2)?.toInt() ?: 0

    return Pair(failedTests, passedTests)
}
