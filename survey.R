dataDir <- "<path/to/data>"

surveyDataset <- read.csv(paste0(dataDir, "survey.csv"))

surveyDataset$Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.implementing.the.class. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.implementing.the.class., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.testing.the.class. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.testing.the.class., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...It.was.easy.to.implement.the.target.class.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...It.was.easy.to.implement.the.target.class.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...I.have.produced.a.good.implementation.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.have.produced.a.good.implementation.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...I.have.produced.a.good.test.suite.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.have.produced.a.good.test.suite.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...I.am.certain.my.implementation.is.correct.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.am.certain.my.implementation.is.correct.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...The.target.class.was.easy.to.understand.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...The.target.class.was.easy.to.understand.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...I.actively.tested.my.code.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.actively.tested.my.code.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...I.wrote.tests.during.development.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.wrote.tests.during.development.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...I.applied.TDD.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.applied.TDD.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Group <- factor(surveyDataset$Group, c("Control", "Treatment"))

pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.implementing.the.class.), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.testing.the.class.), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...It.was.easy.to.implement.the.target.class..), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...I.have.produced.a.good.implementation..), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...I.have.produced.a.good.test.suite..), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...I.am.certain.my.implementation.is.correct..), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...The.target.class.was.easy.to.understand..), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...I.actively.tested.my.code..), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...I.wrote.tests.during.development..), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")
pairwise.wilcox.test(as.numeric(surveyDataset$Please.specify.your.level.of.agreement...I.applied.TDD..), surveyDataset$Group, p.adjust.method = "none", distribution = "exact")

surveyDataset$Please.specify.your.level.of.agreement...The.achievement.system.improved.my.programming.behaviour.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...The.achievement.system.improved.my.programming.behaviour.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...The.notifications.have.spurred.me.on.to.make.progress.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...The.notifications.have.spurred.me.on.to.make.progress.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...I.would.also.like.to.use.the.plugin.in.everyday.programming.myself.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...I.would.also.like.to.use.the.plugin.in.everyday.programming.myself.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...The.individual.achievements.were.well.described.and.I.knew.how.to.achieve.them.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...The.individual.achievements.were.well.described.and.I.knew.how.to.achieve.them.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...The.progress.of.the.individual.achievements.was.visible.and.easy.to.understand.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...The.progress.of.the.individual.achievements.was.visible.and.easy.to.understand.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...The.frequency.of.notifications.was.good.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...The.frequency.of.notifications.was.good.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))
surveyDataset$Please.specify.your.level.of.agreement...The.plugin.motivated.me.to.test.my.code.better.. <- factor(surveyDataset$Please.specify.your.level.of.agreement...The.plugin.motivated.me.to.test.my.code.better.., c("Fully disagree", "Partially disagree", "Neither agree nor disagree", "Partially agree", "Fully agree"))

generalDataset <- data.frame(surveyDataset$Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.implementing.the.class.,
                             surveyDataset$Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.testing.the.class.,
                             surveyDataset$Please.specify.your.level.of.agreement...It.was.easy.to.implement.the.target.class..,
                             surveyDataset$Please.specify.your.level.of.agreement...I.have.produced.a.good.implementation..,
                             surveyDataset$Please.specify.your.level.of.agreement...I.have.produced.a.good.test.suite..,
                             surveyDataset$Please.specify.your.level.of.agreement...I.am.certain.my.implementation.is.correct..,
                             surveyDataset$Please.specify.your.level.of.agreement...The.target.class.was.easy.to.understand..,
                             surveyDataset$Please.specify.your.level.of.agreement...I.actively.tested.my.code..,
                             surveyDataset$Please.specify.your.level.of.agreement...I.wrote.tests.during.development..,
                             surveyDataset$Please.specify.your.level.of.agreement...I.applied.TDD..,
                             surveyDataset$Group)

generalDataset  <- generalDataset  %>%
  rename("I had enough time to finish implementing the class" = surveyDataset.Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.implementing.the.class.,
         "I had enough time to finish testing the class" = surveyDataset.Please.specify.your.level.of.agreement...I.had.enough.time.to.finish.testing.the.class.,
         "It was easy to implement the target class." = surveyDataset.Please.specify.your.level.of.agreement...It.was.easy.to.implement.the.target.class..,
         "I have produced a good implementation." = surveyDataset.Please.specify.your.level.of.agreement...I.have.produced.a.good.implementation..,
         "I have produced a good test suite." = surveyDataset.Please.specify.your.level.of.agreement...I.have.produced.a.good.test.suite..,
         "I am certain my implementation is correct." = surveyDataset.Please.specify.your.level.of.agreement...I.am.certain.my.implementation.is.correct..,
         "The target class was easy to understand." = surveyDataset.Please.specify.your.level.of.agreement...The.target.class.was.easy.to.understand..,
         "I actively tested my code." = surveyDataset.Please.specify.your.level.of.agreement...I.actively.tested.my.code..,
         "I wrote tests during development." = surveyDataset.Please.specify.your.level.of.agreement...I.wrote.tests.during.development..,
         "I applied TDD." = surveyDataset.Please.specify.your.level.of.agreement...I.applied.TDD..)

pdf(paste0(dataDir, "img/exit_survey_all.pdf"), width = 10, height = 19)
plot(likert(generalDataset[, 1:10], grouping = generalDataset[, 11]), legend.position="bottom", text.size = 4.5) +
  theme(legend.title = element_blank())  + theme(strip.text = element_text(size=15)) + theme(text = element_text(size = 15))
dev.off()

intelliGameDataset <- data.frame(surveyDataset$Please.specify.your.level.of.agreement...The.achievement.system.improved.my.programming.behaviour..,
                                 surveyDataset$Please.specify.your.level.of.agreement...The.notifications.have.spurred.me.on.to.make.progress..,
                                 surveyDataset$Please.specify.your.level.of.agreement...I.would.also.like.to.use.the.plugin.in.everyday.programming.myself..,
                                 surveyDataset$Please.specify.your.level.of.agreement...The.individual.achievements.were.well.described.and.I.knew.how.to.achieve.them..,
                                 surveyDataset$Please.specify.your.level.of.agreement...The.progress.of.the.individual.achievements.was.visible.and.easy.to.understand..,
                                 surveyDataset$Please.specify.your.level.of.agreement...The.frequency.of.notifications.was.good..,
                                 surveyDataset$Please.specify.your.level.of.agreement...The.plugin.motivated.me.to.test.my.code.better..,
                                 surveyDataset$Group)

intelliGameDataset <- subset(intelliGameDataset, surveyDataset.Group != "Control")

intelliGameDataset  <- intelliGameDataset  %>%
  rename("The achievement system improved my programming behaviour." = surveyDataset.Please.specify.your.level.of.agreement...The.achievement.system.improved.my.programming.behaviour..,
         "The notifications have spurred me on to make progress." = surveyDataset.Please.specify.your.level.of.agreement...The.notifications.have.spurred.me.on.to.make.progress..,
         "I would also like to use the plugin in everyday programming myself." = surveyDataset.Please.specify.your.level.of.agreement...I.would.also.like.to.use.the.plugin.in.everyday.programming.myself..,
         "The individual achievements were well described and I knew how to achieve them." = surveyDataset.Please.specify.your.level.of.agreement...The.individual.achievements.were.well.described.and.I.knew.how.to.achieve.them..,
         "The progress of the individual achievements was visible and easy to understand." = surveyDataset.Please.specify.your.level.of.agreement...The.progress.of.the.individual.achievements.was.visible.and.easy.to.understand..,
         "The frequency of notifications was good." = surveyDataset.Please.specify.your.level.of.agreement...The.frequency.of.notifications.was.good..,
         "The plugin motivated me to test my code better." = surveyDataset.Please.specify.your.level.of.agreement...The.plugin.motivated.me.to.test.my.code.better..)

pdf(paste0(dataDir, "img/exit_survey_plugin.pdf"), width = 10, height = 11)
plot(likert(intelliGameDataset[, 1:7], grouping = intelliGameDataset[, 8]), legend.position="bottom", text.size = 4.5) +
  theme(legend.title = element_blank()) + theme(strip.text = element_text(size=15)) + theme(text = element_text(size = 15))
dev.off()
