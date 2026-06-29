dataDir <- "<path/to/data>"

generalDataset <- read.csv(paste0(dataDir, "results.csv"))
progressDataset <- read.csv(paste0(dataDir, "process.csv"))

numericDataset <- generalDataset[sapply(generalDataset, is.numeric)]
numericDataset <- as.matrix(numericDataset)
rcorr(numericDataset, type = "pearson")

pdf(paste0(dataDir, "img/absolute_test_executions.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(TestExecutions~Group, data=generalDataset, ylab="Test executions in absolute numbers", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$TestExecutions, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$TestExecutions, generalDataset$Group)

pdf(paste0(dataDir, "img/test_execution_coverage.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(TestExecutionsCoverage~Group, data=generalDataset, ylab="Test executions with coverage", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$TestExecutionsCoverage, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$TestExecutionsCoverage, generalDataset$Group)

pdf(paste0(dataDir, "img/debug_mode_used.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(DebuggerUses~Group, data=generalDataset, ylab="Number of times debug mode was used", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$DebuggerUses, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$DebuggerUses, generalDataset$Group)

pdf(paste0(dataDir, "img/total_test_number.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(Tests~Group, data=generalDataset, ylab="Number of tests", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$Tests, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Tests, generalDataset$Group)

pdf(paste0(dataDir, "img/levels.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(Levels~Group, data=generalDataset, ylab="Number of achievement levels", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$Levels, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Levels, generalDataset$Group)

pdf(paste0(dataDir, "img/failed_tests.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(FailedGoldenTests~Group, data=generalDataset, ylab="Failed tests of the golden test suite", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$FailedGoldenTests, generalDataset$Group)
describeBy(generalDataset$FailedGoldenTests, generalDataset$Group)

pdf(paste0(dataDir, "img/passed_tests.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(PassedGoldenTests~Group, data=generalDataset, ylab="Passed tests of the golden test suite", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$PassedGoldenTests, generalDataset$Group)
describeBy(generalDataset$PassedGoldenTests, generalDataset$Group)

pdf(paste0(dataDir, "img/line_coverage.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(LineCoverage~Group, data=generalDataset, ylab="Line Coverage", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$LineCoverage, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$LineCoverage, generalDataset$Group)

pdf(paste0(dataDir, "img/branch_coverage.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(BranchCoverage~Group, data=generalDataset, ylab="Branch Coverage", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$BranchCoverage, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$BranchCoverage, generalDataset$Group)

pdf(paste0(dataDir, "img/mutation_coverage.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(MutationScore~Group, data=generalDataset, ylab="MutationScore", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$MutationScore, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$MutationScore, generalDataset$Group)

pdf(paste0(dataDir, "img/failed_own_tests.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(FailedOwnTests~Group, data=generalDataset, ylab="Number of failed participant tests", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$FailedOwnTests, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$FailedOwnTests, generalDataset$Group)
describeBy(generalDataset$FailedOwnTests)

pdf(paste0(dataDir, "img/ratio_failed_own_tests.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(RatioTestFailed~Group, data=generalDataset, ylab="Ratio of failed participant tests", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$RatioTestFailed, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$RatioTestFailed, generalDataset$Group)

pdf(paste0(dataDir, "img/test_smells.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(TestSmells~Group, data=generalDataset, ylab="Test smells", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$TestSmells, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$TestSmells, generalDataset$Group)

pdf(paste0(dataDir, "img/ratio_test_smells.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(RatioTestSmells~Group, data=generalDataset, ylab="Ratio of test smells", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$RatioTestSmells, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$RatioTestSmells, generalDataset$Group)

pdf(paste0(dataDir, "img/notifications.pdf"), width = 16, height = 14, pointsize = 36)
boxplot(Notifications~Group, data=generalDataset, ylab="Number of notifications", xlab = "")
dev.off()
pairwise.wilcox.test(generalDataset$Notifications, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Notifications, generalDataset$Group)

fisher.test(generalDataset$Group, generalDataset$Testing)
describeBy(generalDataset$Testing, generalDataset$Group)
fisher.test(generalDataset$Group, generalDataset$Main)
describeBy(generalDataset$Main, generalDataset$Group)

pairwise.wilcox.test(generalDataset$Test.ExecutorProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Test.ExecutorProgress, generalDataset$Group)
describeBy(generalDataset$Test.ExecutorProgress)

pairwise.wilcox.test(generalDataset$The.TesterProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$The.TesterProgress, generalDataset$Group)
describeBy(generalDataset$The.TesterProgress)

pairwise.wilcox.test(generalDataset$The.Tester...AdvancedProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$The.Tester...AdvancedProgress, generalDataset$Group)
describeBy(generalDataset$The.Tester...AdvancedProgress)

pairwise.wilcox.test(generalDataset$Assert.and.TestedProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Assert.and.TestedProgress, generalDataset$Group)
describeBy(generalDataset$Assert.and.TestedProgress)

pairwise.wilcox.test(generalDataset$Bug.FinderProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Bug.FinderProgress, generalDataset$Group)
describeBy(generalDataset$Bug.FinderProgress)

pairwise.wilcox.test(generalDataset$Safety.FirstProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Safety.FirstProgress, generalDataset$Group)
describeBy(generalDataset$Safety.FirstProgress)

pairwise.wilcox.test(generalDataset$Gotta.Catch..Em.AllProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Gotta.Catch..Em.AllProgress, generalDataset$Group)
describeBy(generalDataset$Gotta.Catch..Em.AllProgress)

pairwise.wilcox.test(generalDataset$Line.by.lineProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Line.by.lineProgress, generalDataset$Group)
describeBy(generalDataset$Line.by.lineProgress)

pairwise.wilcox.test(generalDataset$Check.your.methodsProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Check.your.methodsProgress, generalDataset$Group)
describeBy(generalDataset$Check.your.methodsProgress)

pairwise.wilcox.test(generalDataset$Check.your.classesProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Check.your.classesProgress, generalDataset$Group)
describeBy(generalDataset$Check.your.classesProgress)

pairwise.wilcox.test(generalDataset$Check.your.branchesProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Check.your.branchesProgress, generalDataset$Group)
describeBy(generalDataset$Check.your.branchesProgress)

pairwise.wilcox.test(generalDataset$Class.Reviewer...LinesProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Class.Reviewer...LinesProgress, generalDataset$Group)
describeBy(generalDataset$Class.Reviewer...LinesProgress)

pairwise.wilcox.test(generalDataset$Class.Reviewer...MethodsProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Class.Reviewer...MethodsProgress, generalDataset$Group)
describeBy(generalDataset$Class.Reviewer...MethodsProgress)

pairwise.wilcox.test(generalDataset$Class.Reviewer...BranchesProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Class.Reviewer...BranchesProgress, generalDataset$Group)
describeBy(generalDataset$Class.Reviewer...BranchesProgress)

pairwise.wilcox.test(generalDataset$The.DebuggerProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$The.DebuggerProgress, generalDataset$Group)
describeBy(generalDataset$The.DebuggerProgress)

pairwise.wilcox.test(generalDataset$Take.some.breaksProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Take.some.breaksProgress, generalDataset$Group)
describeBy(generalDataset$Take.some.breaksProgress)

pairwise.wilcox.test(generalDataset$Make.Your.ChoiceProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Make.Your.ChoiceProgress, generalDataset$Group)
describeBy(generalDataset$Make.Your.ChoiceProgress)

pairwise.wilcox.test(generalDataset$Break.the.LineProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Break.the.LineProgress, generalDataset$Group)
describeBy(generalDataset$Break.the.LineProgress)

pairwise.wilcox.test(generalDataset$Double.checkProgress, generalDataset$Group, p.adjust.method = "none", distribution = "exact")
describeBy(generalDataset$Double.checkProgress, generalDataset$Group)
describeBy(generalDataset$Double.checkProgress)

pdf(paste0(dataDir, "img/test_executions_time.pdf"), width = 10, height = 8)
ggplot(progressDataset, aes(x=Index, y=TestExecutions)) +
  stat_summary(geom="ribbon", aes(group=Group, color=Group, fill=Group), fun.data=mean_cl_normal, fun.args=(conf.int <- 0.846), alpha = 0.5) +
  stat_summary(aes(group=Group, color=Group), geom="line", fun.y=mean, linetype="dashed") +
  stat_summary(geom="point", aes(group=Group, color=Group), fun.y=mean) +
  labs(x = "Time in minutes", y="Average test executions") +
  theme(legend.position="bottom", legend.title = element_blank()) + theme(text = element_text(size = 24))
dev.off()


# Ribbon over time Run Tests with Coverage
pdf(paste0(dataDir, "img/test_executions_coverage_time.pdf"), width = 10, height = 8)
ggplot(progressDataset, aes(x=Index, y=TestExecutionsCoverage)) +
  stat_summary(geom="ribbon", aes(group=Group, color=Group, fill=Group), fun.data=mean_cl_normal, fun.args=(conf.int <- 0.846), alpha = 0.5) +
  stat_summary(aes(group=Group, color=Group), geom="line", fun.y=mean, linetype="dashed") +
  stat_summary(geom="point", aes(group=Group, color=Group), fun.y=mean) +
  labs(x = "Time in minutes", y="Average test executions with coverage report") +
  theme(legend.position="bottom", legend.title = element_blank()) + theme(text = element_text(size = 24))
dev.off()

# Ribbon over time Test Created
pdf(paste0(dataDir, "img/tests_time.pdf"), width = 10, height = 8)
ggplot(progressDataset, aes(x=Index, y=Tests)) +
  stat_summary(geom="ribbon", aes(group=Group, color=Group, fill=Group), fun.data=mean_cl_normal, fun.args=(conf.int <- 0.846), alpha = 0.5) +
  stat_summary(aes(group=Group, color=Group), geom="line", fun.y=mean, linetype="dashed") +
  stat_summary(geom="point", aes(group=Group, color=Group), fun.y=mean) +
  labs(x = "Time in minutes", y="Average number of tests") +
  theme(legend.position="bottom", legend.title = element_blank()) + theme(text = element_text(size = 24))
dev.off()

# Ribbon over time Debugging
pdf(paste0(dataDir, "img/debug_time.pdf"), width = 10, height = 8)
ggplot(progressDataset, aes(x=Index, y=DebuggerUses)) +
  stat_summary(geom="ribbon", aes(group=Group, color=Group, fill=Group), fun.data=mean_cl_normal, fun.args=(conf.int <- 0.846), alpha = 0.5) +
  stat_summary(aes(group=Group, color=Group), geom="line", fun.y=mean, linetype="dashed") +
  stat_summary(geom="point", aes(group=Group, color=Group), fun.y=mean) +
  labs(x = "Time in minutes", y="Average number of debug uses") +
  theme(legend.position="bottom", legend.title = element_blank()) + theme(text = element_text(size = 24))
dev.off()

# Ribbon over time Levels
pdf(paste0(dataDir, "img/levels_time.pdf"), width = 10, height = 8)
ggplot(progressDataset, aes(x=Index, y=Levels)) +
  stat_summary(geom="ribbon", aes(group=Group, color=Group, fill=Group), fun.data=mean_cl_normal, fun.args=(conf.int <- 0.846), alpha = 0.5) +
  stat_summary(aes(group=Group, color=Group), geom="line", fun.y=mean, linetype="dashed") +
  stat_summary(geom="point", aes(group=Group, color=Group), fun.y=mean) +
  labs(x = "Time in minutes", y="Average number of levels achieved") +
  theme(legend.position="bottom", legend.title = element_blank()) + theme(text = element_text(size = 24))
dev.off()

# Ribbon over time Passed Tests
pdf(paste0(dataDir, "img/passed_tests_time.pdf"), width = 10, height = 8)
ggplot(progressDataset, aes(x=Index, y=PassedGoldenTests)) +
  stat_summary(geom="ribbon", aes(group=Group, color=Group, fill=Group), fun.data=mean_cl_normal, fun.args=(conf.int <- 0.846), alpha = 0.5) +
  stat_summary(aes(group=Group, color=Group), geom="line", fun.y=mean, linetype="dashed") +
  stat_summary(geom="point", aes(group=Group, color=Group), fun.y=mean) +
  labs(x = "Time in minutes", y="Average number of passed tests") +
  theme(legend.position="bottom", legend.title = element_blank()) + theme(text = element_text(size = 24))
dev.off()
