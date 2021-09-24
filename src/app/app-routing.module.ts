import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/tab1/tab1.module').then(m => m.Tab1PageModule)
      }
    ]
  },
  {
    path: 'tab2',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/tab2/tab2.module').then(m => m.Tab2PageModule)
      }
    ]
  },
  {
    path: 'tab3',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('../app/tab3/tab3.module').then(m => m.Tab3PageModule)
      }
    ]
  },
  {
    path: 'tab4',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('../app/tab4/tab4.module').then(m => m.Tab4PageModule)
      }
    ]
  },
  {
    path: 'tab5',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./contact/contact.module').then(m => m.ContactPageModule)
      }
    ]
  },
  {
    path: 'tab6',
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./profile/profile.module').then(m => m.ProfilePageModule)
      }
    ]
  },
  {
    path: 'code',
    loadChildren: () => import('./code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'medical',
    loadChildren: () => import('./medical/medical.module').then( m => m.MedicalPageModule)
  },
  {
    path: 'cvs',
    loadChildren: () => import('./cvs/cvs.module').then( m => m.CvsPageModule)
  },
  {
    path: 'diabetes',
    loadChildren: () => import('./diabetes/diabetes.module').then( m => m.DiabetesPageModule)
  },
  {
    path: 'respiratory',
    loadChildren: () => import('./respiratory/respiratory.module').then( m => m.RespiratoryPageModule)
  },
  {
    path: 'oncology',
    loadChildren: () => import('./oncology/oncology.module').then( m => m.OncologyPageModule)
  },
  {
    path: 'miscellaneous',
    loadChildren: () => import('./miscellaneous/miscellaneous.module').then( m => m.MiscellaneousPageModule)
  },
  {
    path: 'basic-resources',
    loadChildren: () => import('./basic-resources/basic-resources.module').then( m => m.BasicResourcesPageModule)
  },
  {
    path: 'diabetes-basic-resources',
    loadChildren: () => import('./diabetes-basic-resources/diabetes-basic-resources.module').then( m => m.DiabetesBasicResourcesPageModule)
  },
  {
    path: 'respiratory-basic-resources',
    loadChildren: () => import('./respiratory-basic-resources/respiratory-basic-resources.module').then( m => m.RespiratoryBasicResourcesPageModule)
  },
  {
    path: 'oncology-basic-resources',
    loadChildren: () => import('./oncology-basic-resources/oncology-basic-resources.module').then( m => m.OncologyBasicResourcesPageModule)
  },
  {
    path: 'miscellaneous-basic-resources',
    loadChildren: () => import('./miscellaneous-basic-resources/miscellaneous-basic-resources.module').then( m => m.MiscellaneousBasicResourcesPageModule)
  },
  {
    path: 'cvs-books',
    loadChildren: () => import('./cvs-books/cvs-books.module').then( m => m.CvsBooksPageModule)
  },
  {
    path: 'cvs-curriculum',
    loadChildren: () => import('./cvs-curriculum/cvs-curriculum.module').then( m => m.CvsCurriculumPageModule)
  },
  {
    path: 'courses-registration',
    loadChildren: () => import('./courses-registration/courses-registration.module').then( m => m.CoursesRegistrationPageModule)
  },
  {
    path: 'diabetes-books',
    loadChildren: () => import('./diabetes-books/diabetes-books.module').then( m => m.DiabetesBooksPageModule)
  },
  {
    path: 'assessment',
    loadChildren: () => import('./assessment/assessment.module').then( m => m.AssessmentPageModule)
  },
  {
    path: 'surveys',
    loadChildren: () => import('./surveys/surveys.module').then( m => m.SurveysPageModule)
  },
  {
    path: 'diabetes-curriculum',
    loadChildren: () => import('./diabetes-curriculum/diabetes-curriculum.module').then( m => m.DiabetesCurriculumPageModule)
  },
  {
    path: 'respiratory-books',
    loadChildren: () => import('./respiratory-books/respiratory-books.module').then( m => m.RespiratoryBooksPageModule)
  },
  {
    path: 'respiratory-curriculum',
    loadChildren: () => import('./respiratory-curriculum/respiratory-curriculum.module').then( m => m.RespiratoryCurriculumPageModule)
  },
  {
    path: 'oncology-books',
    loadChildren: () => import('./oncology-books/oncology-books.module').then( m => m.OncologyBooksPageModule)
  },
  {
    path: 'oncology-curriculum',
    loadChildren: () => import('./oncology-curriculum/oncology-curriculum.module').then( m => m.OncologyCurriculumPageModule)
  },
  {
    path: 'miscellaneous-books',
    loadChildren: () => import('./miscellaneous-books/miscellaneous-books.module').then( m => m.MiscellaneousBooksPageModule)
  },
  {
    path: 'miscellaneous-curriculum',
    loadChildren: () => import('./miscellaneous-curriculum/miscellaneous-curriculum.module').then( m => m.MiscellaneousCurriculumPageModule)
  },
  {
    path: 'login-p',
    loadChildren: () => import('./login-p/login-p.module').then( m => m.LoginPPageModule)
  },
  {
    path: 'register-p',
    loadChildren: () => import('./register-p/register-p.module').then( m => m.RegisterPPageModule)
  },
  {
    path: 'sendresetemail',
    loadChildren: () => import('./sendresetemail/sendresetemail.module').then( m => m.SendresetemailPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'code-p',
    loadChildren: () => import('./code-p/code-p.module').then( m => m.CodePPageModule)
  },
  {
    path: 'diabetes-exam',
    loadChildren: () => import('./diabetes-exam/diabetes-exam.module').then( m => m.DiabetesExamPageModule)
  },
  {
    path: 'respiratory-exam',
    loadChildren: () => import('./respiratory-exam/respiratory-exam.module').then( m => m.RespiratoryExamPageModule)
  },
  {
    path: 'oncology-exam',
    loadChildren: () => import('./oncology-exam/oncology-exam.module').then( m => m.OncologyExamPageModule)
  },
  {
    path: 'miscellaneous-exam',
    loadChildren: () => import('./miscellaneous-exam/miscellaneous-exam.module').then( m => m.MiscellaneousExamPageModule)
  },
  {
    path: 'exam',
    loadChildren: () => import('./exam/exam.module').then( m => m.ExamPageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then( m => m.PatientPageModule)
  },
  {
    path: 'certificate',
    loadChildren: () => import('./certificate/certificate.module').then( m => m.CertificatePageModule)
  },
  {
    path: 'clinical-scenarios',
    loadChildren: () => import('./clinical-scenarios/clinical-scenarios.module').then( m => m.ClinicalScenariosPageModule)
  },
  {
    path: 'guidelines',
    loadChildren: () => import('./guidelines/guidelines.module').then( m => m.GuidelinesPageModule)
  },
  {
    path: 'updates-news',
    loadChildren: () => import('./updates-news/updates-news.module').then( m => m.UpdatesNewsPageModule)
  },
  {
    path: 'cvs-hypertension',
    loadChildren: () => import('./cvs-hypertension/cvs-hypertension.module').then( m => m.CvsHypertensionPageModule)
  },
  {
    path: 'cvs-introduction-to-ncd-s-and-burden-of-cv-diseases',
    loadChildren: () => import('./cvs-introduction-to-ncd-s-and-burden-of-cv-diseases/cvs-introduction-to-ncd-s-and-burden-of-cv-diseases.module').then( m => m.CvsIntroductionToNcdSAndBurdenOfCvDiseasesPageModule)
  },
  {
    path: 'cvs-risk-assessment-in-hypertension',
    loadChildren: () => import('./cvs-risk-assessment-in-hypertension/cvs-risk-assessment-in-hypertension.module').then( m => m.CvsRiskAssessmentInHypertensionPageModule)
  },
  {
    path: 'cvs-interactive-case',
    loadChildren: () => import('./cvs-interactive-case/cvs-interactive-case.module').then( m => m.CvsInteractiveCasePageModule)
  },
  {
    path: 'cvs-latest-guidelines-of-hypertension',
    loadChildren: () => import('./cvs-latest-guidelines-of-hypertension/cvs-latest-guidelines-of-hypertension.module').then( m => m.CvsLatestGuidelinesOfHypertensionPageModule)
  },
  {
    path: 'cvs-atherosclerosis',
    loadChildren: () => import('./cvs-atherosclerosis/cvs-atherosclerosis.module').then( m => m.CvsAtherosclerosisPageModule)
  },
  {
    path: 'cvs-cholesterol',
    loadChildren: () => import('./cvs-cholesterol/cvs-cholesterol.module').then( m => m.CvsCholesterolPageModule)
  },
  {
    path: 'cvs-dietary-and-life-style-recommendations',
    loadChildren: () => import('./cvs-dietary-and-life-style-recommendations/cvs-dietary-and-life-style-recommendations.module').then( m => m.CvsDietaryAndLifeStyleRecommendationsPageModule)
  },
  {
    path: 'cvs-drug-therapy-overview',
    loadChildren: () => import('./cvs-drug-therapy-overview/cvs-drug-therapy-overview.module').then( m => m.CvsDrugTherapyOverviewPageModule)
  },
  {
    path: 'cvs-managing-cholesterol-interactive-case',
    loadChildren: () => import('./cvs-managing-cholesterol-interactive-case/cvs-managing-cholesterol-interactive-case.module').then( m => m.CvsManagingCholesterolInteractiveCasePageModule)
  },
  {
    path: 'cvs-diabetes-for-the-cardiologist',
    loadChildren: () => import('./cvs-diabetes-for-the-cardiologist/cvs-diabetes-for-the-cardiologist.module').then( m => m.CvsDiabetesForTheCardiologistPageModule)
  },
  {
    path: 'cvs-smoking-and-heart-diseases',
    loadChildren: () => import('./cvs-smoking-and-heart-diseases/cvs-smoking-and-heart-diseases.module').then( m => m.CvsSmokingAndHeartDiseasesPageModule)
  },
  {
    path: 'cvs-smoking-cessation-therapies-for-the-cardiologist',
    loadChildren: () => import('./cvs-smoking-cessation-therapies-for-the-cardiologist/cvs-smoking-cessation-therapies-for-the-cardiologist.module').then( m => m.CvsSmokingCessationTherapiesForTheCardiologistPageModule)
  },
  {
    path: 'diabetes-clinical-scenarios',
    loadChildren: () => import('./diabetes-clinical-scenarios/diabetes-clinical-scenarios.module').then( m => m.DiabetesClinicalScenariosPageModule)
  },
  {
    path: 'diabetes-guidelines',
    loadChildren: () => import('./diabetes-guidelines/diabetes-guidelines.module').then( m => m.DiabetesGuidelinesPageModule)
  },
  {
    path: 'diabetes-updates-news',
    loadChildren: () => import('./diabetes-updates-news/diabetes-updates-news.module').then( m => m.DiabetesUpdatesNewsPageModule)
  },
  {
    path: 'diabetes-introduction-to-ncd-s-and-burden-of-diabetes',
    loadChildren: () => import('./diabetes-introduction-to-ncd-s-and-burden-of-diabetes/diabetes-introduction-to-ncd-s-and-burden-of-diabetes.module').then( m => m.DiabetesIntroductionToNcdSAndBurdenOfDiabetesPageModule)
  },
  {
    path: 'diabetes-pathogenesis-and-diagnosis-of-diabetes-and-prediabetes',
    loadChildren: () => import('./diabetes-pathogenesis-and-diagnosis-of-diabetes-and-prediabetes/diabetes-pathogenesis-and-diagnosis-of-diabetes-and-prediabetes.module').then( m => m.DiabetesPathogenesisAndDiagnosisOfDiabetesAndPrediabetesPageModule)
  },
  {
    path: 'diabetes-nutrition-therapy-and-physical-activity',
    loadChildren: () => import('./diabetes-nutrition-therapy-and-physical-activity/diabetes-nutrition-therapy-and-physical-activity.module').then( m => m.DiabetesNutritionTherapyAndPhysicalActivityPageModule)
  },
  {
    path: 'diabetes-smoking-and-related-to-incidence-of-diabetes',
    loadChildren: () => import('./diabetes-smoking-and-related-to-incidence-of-diabetes/diabetes-smoking-and-related-to-incidence-of-diabetes.module').then( m => m.DiabetesSmokingAndRelatedToIncidenceOfDiabetesPageModule)
  },
  {
    path: 'diabetes-management-in-children-and-adolescents-with-diabetes',
    loadChildren: () => import('./diabetes-management-in-children-and-adolescents-with-diabetes/diabetes-management-in-children-and-adolescents-with-diabetes.module').then( m => m.DiabetesManagementInChildrenAndAdolescentsWithDiabetesPageModule)
  },
  {
    path: 'diabetes-psychosocial-aspects-of-diabetes',
    loadChildren: () => import('./diabetes-psychosocial-aspects-of-diabetes/diabetes-psychosocial-aspects-of-diabetes.module').then( m => m.DiabetesPsychosocialAspectsOfDiabetesPageModule)
  },
  {
    path: 'diabetes-oral-health-and-diabetes',
    loadChildren: () => import('./diabetes-oral-health-and-diabetes/diabetes-oral-health-and-diabetes.module').then( m => m.DiabetesOralHealthAndDiabetesPageModule)
  },
  {
    path: 'diabetes-sexual-health-in-diabetes',
    loadChildren: () => import('./diabetes-sexual-health-in-diabetes/diabetes-sexual-health-in-diabetes.module').then( m => m.DiabetesSexualHealthInDiabetesPageModule)
  },
  {
    path: 'diabetes-insulin-therapy',
    loadChildren: () => import('./diabetes-insulin-therapy/diabetes-insulin-therapy.module').then( m => m.DiabetesInsulinTherapyPageModule)
  },
  {
    path: 'diabetes-interactive-case',
    loadChildren: () => import('./diabetes-interactive-case/diabetes-interactive-case.module').then( m => m.DiabetesInteractiveCasePageModule)
  },
  {
    path: 'respiratory-clinical-scenarios',
    loadChildren: () => import('./respiratory-clinical-scenarios/respiratory-clinical-scenarios.module').then( m => m.RespiratoryClinicalScenariosPageModule)
  },
  {
    path: 'respiratory-guidelines',
    loadChildren: () => import('./respiratory-guidelines/respiratory-guidelines.module').then( m => m.RespiratoryGuidelinesPageModule)
  },
  {
    path: 'respiratory-updates-news',
    loadChildren: () => import('./respiratory-updates-news/respiratory-updates-news.module').then( m => m.RespiratoryUpdatesNewsPageModule)
  },
  {
    path: 'respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-copd',
    loadChildren: () => import('./respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-copd/respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-copd.module').then( m => m.RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfCopdPageModule)
  },
  {
    path: 'respiratory-grading-and-grouping-of-copd',
    loadChildren: () => import('./respiratory-grading-and-grouping-of-copd/respiratory-grading-and-grouping-of-copd.module').then( m => m.RespiratoryGradingAndGroupingOfCopdPageModule)
  },
  {
    path: 'respiratory-management-of-copd-stable-exacerbation',
    loadChildren: () => import('./respiratory-management-of-copd-stable-exacerbation/respiratory-management-of-copd-stable-exacerbation.module').then( m => m.RespiratoryManagementOfCopdStableExacerbationPageModule)
  },
  {
    path: 'respiratory-risk-factors-classifications-and-clinical-manifestations-of-lung-cancer',
    loadChildren: () => import('./respiratory-risk-factors-classifications-and-clinical-manifestations-of-lung-cancer/respiratory-risk-factors-classifications-and-clinical-manifestations-of-lung-cancer.module').then( m => m.RespiratoryRiskFactorsClassificationsAndClinicalManifestationsOfLungCancerPageModule)
  },
  {
    path: 'respiratory-investigation-for-diagnosis-staging-of-lung-cancer',
    loadChildren: () => import('./respiratory-investigation-for-diagnosis-staging-of-lung-cancer/respiratory-investigation-for-diagnosis-staging-of-lung-cancer.module').then( m => m.RespiratoryInvestigationForDiagnosisStagingOfLungCancerPageModule)
  },
  {
    path: 'respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-bronchial-asthma',
    loadChildren: () => import('./respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-bronchial-asthma/respiratory-definition-pathogenesis-pathophysiology-risk-factors-of-bronchial-asthma.module').then( m => m.RespiratoryDefinitionPathogenesisPathophysiologyRiskFactorsOfBronchialAsthmaPageModule)
  },
  {
    path: 'respiratory-diagnosis-of-bronchial-asthma-history-clinical-examination-spirometry',
    loadChildren: () => import('./respiratory-diagnosis-of-bronchial-asthma-history-clinical-examination-spirometry/respiratory-diagnosis-of-bronchial-asthma-history-clinical-examination-spirometry.module').then( m => m.RespiratoryDiagnosisOfBronchialAsthmaHistoryClinicalExaminationSpirometryPageModule)
  },
  {
    path: 'respiratory-assessment-of-bronchial-asthma-severity-control',
    loadChildren: () => import('./respiratory-assessment-of-bronchial-asthma-severity-control/respiratory-assessment-of-bronchial-asthma-severity-control.module').then( m => m.RespiratoryAssessmentOfBronchialAsthmaSeverityControlPageModule)
  },
  {
    path: 'ionic',
    loadChildren: () => import('./ionic/ionic.module').then( m => m.IonicPageModule)
  },
  {
    path: 'respiratory-medications-of-bronchial-asthma-pharmacological-controller-reliever-add-on-and-non-pharmacological',
    loadChildren: () => import('./respiratory-medications-of-bronchial-asthma-pharmacological-controller-reliever-add-on-and-non-pharmacological/respiratory-medications-of-bronchial-asthma-pharmacological-controller-reliever-add-on-and-non-pharmacological.module').then( m => m.RespiratoryMedicationsOfBronchialAsthmaPharmacologicalControllerRelieverAddOnAndNonPharmacologicalPageModule)
  },
  {
    path: 'respiratory-guidelines-of-management-of-stable-asthma-and-exacerbations',
    loadChildren: () => import('./respiratory-guidelines-of-management-of-stable-asthma-and-exacerbations/respiratory-guidelines-of-management-of-stable-asthma-and-exacerbations.module').then( m => m.RespiratoryGuidelinesOfManagementOfStableAsthmaAndExacerbationsPageModule)
  },
  {
    path: 'respiratory-normal-sleep-physiology-definition-risk-factors-and-pathogenesis-of-osa',
    loadChildren: () => import('./respiratory-normal-sleep-physiology-definition-risk-factors-and-pathogenesis-of-osa/respiratory-normal-sleep-physiology-definition-risk-factors-and-pathogenesis-of-osa.module').then( m => m.RespiratoryNormalSleepPhysiologyDefinitionRiskFactorsAndPathogenesisOfOsaPageModule)
  },
  {
    path: 'respiratory-clinical-manifestation-and-scoring-of-sleep-disordered-breathing',
    loadChildren: () => import('./respiratory-clinical-manifestation-and-scoring-of-sleep-disordered-breathing/respiratory-clinical-manifestation-and-scoring-of-sleep-disordered-breathing.module').then( m => m.RespiratoryClinicalManifestationAndScoringOfSleepDisorderedBreathingPageModule)
  },
  {
    path: 'respiratory-burden-of-osa-on-different-body-system-brain-heart-diabetes-respiratory',
    loadChildren: () => import('./respiratory-burden-of-osa-on-different-body-system-brain-heart-diabetes-respiratory/respiratory-burden-of-osa-on-different-body-system-brain-heart-diabetes-respiratory.module').then( m => m.RespiratoryBurdenOfOsaOnDifferentBodySystemBrainHeartDiabetesRespiratoryPageModule)
  },
  {
    path: 'respiratory-diagnosis-of-osa-interpretation-of-sleep-report',
    loadChildren: () => import('./respiratory-diagnosis-of-osa-interpretation-of-sleep-report/respiratory-diagnosis-of-osa-interpretation-of-sleep-report.module').then( m => m.RespiratoryDiagnosisOfOsaInterpretationOfSleepReportPageModule)
  },
  {
    path: 'respiratory-ttt-of-osa-medical-and-surgical',
    loadChildren: () => import('./respiratory-ttt-of-osa-medical-and-surgical/respiratory-ttt-of-osa-medical-and-surgical.module').then( m => m.RespiratoryTttOfOsaMedicalAndSurgicalPageModule)
  },
  {
    path: 'oncology-clinical-scenarios',
    loadChildren: () => import('./oncology-clinical-scenarios/oncology-clinical-scenarios.module').then( m => m.OncologyClinicalScenariosPageModule)
  },
  {
    path: 'oncology-guidelines',
    loadChildren: () => import('./oncology-guidelines/oncology-guidelines.module').then( m => m.OncologyGuidelinesPageModule)
  },
  {
    path: 'oncology-updates-news',
    loadChildren: () => import('./oncology-updates-news/oncology-updates-news.module').then( m => m.OncologyUpdatesNewsPageModule)
  },
  {
    path: 'miscellaneous-clinical-scenarios',
    loadChildren: () => import('./miscellaneous-clinical-scenarios/miscellaneous-clinical-scenarios.module').then( m => m.MiscellaneousClinicalScenariosPageModule)
  },
  {
    path: 'miscellaneous-guidelines',
    loadChildren: () => import('./miscellaneous-guidelines/miscellaneous-guidelines.module').then( m => m.MiscellaneousGuidelinesPageModule)
  },
  {
    path: 'miscellaneous-updates-news',
    loadChildren: () => import('./miscellaneous-updates-news/miscellaneous-updates-news.module').then( m => m.MiscellaneousUpdatesNewsPageModule)
  },
  {
    path: 'miscellaneous-mental-health',
    loadChildren: () => import('./miscellaneous-mental-health/miscellaneous-mental-health.module').then( m => m.MiscellaneousMentalHealthPageModule)
  },
  {
    path: 'drug-index',
    loadChildren: () => import('./drug-index/drug-index.module').then( m => m.DrugIndexPageModule)
  },
  {
    path: 'certificate-miscellaneous',
    loadChildren: () => import('./certificate-miscellaneous/certificate-miscellaneous.module').then( m => m.CertificateMiscellaneousPageModule)
  },
  {
    path: 'certificate-basic-resources',
    loadChildren: () => import('./certificate-basic-resources/certificate-basic-resources.module').then( m => m.CertificateBasicResourcesPageModule)
  },
  {
    path: 'certificate-books',
    loadChildren: () => import('./certificate-books/certificate-books.module').then( m => m.CertificateBooksPageModule)
  },
  {
    path: 'certificate-curriculum',
    loadChildren: () => import('./certificate-curriculum/certificate-curriculum.module').then( m => m.CertificateCurriculumPageModule)
  },
  {
    path: 'certificate-smoking-cessation',
    loadChildren: () => import('./certificate-smoking-cessation/certificate-smoking-cessation.module').then( m => m.CertificateSmokingCessationPageModule)
  },
  {
    path: 'certificate-obesity-and-nutrition',
    loadChildren: () => import('./certificate-obesity-and-nutrition/certificate-obesity-and-nutrition.module').then( m => m.CertificateObesityAndNutritionPageModule)
  },
  {
    path: 'certificate-mental-health',
    loadChildren: () => import('./certificate-mental-health/certificate-mental-health.module').then( m => m.CertificateMentalHealthPageModule)
  },
  {
    path: 'certificate-country-specific-health-issues',
    loadChildren: () => import('./certificate-country-specific-health-issues/certificate-country-specific-health-issues.module').then( m => m.CertificateCountrySpecificHealthIssuesPageModule)
  },
  {
    path: 'certificate-basics-of-gcp-and-research',
    loadChildren: () => import('./certificate-basics-of-gcp-and-research/certificate-basics-of-gcp-and-research.module').then( m => m.CertificateBasicsOfGcpAndResearchPageModule)
  },
  {
    path: 'certificate-basics-of-medical-statistics',
    loadChildren: () => import('./certificate-basics-of-medical-statistics/certificate-basics-of-medical-statistics.module').then( m => m.CertificateBasicsOfMedicalStatisticsPageModule)
  },
  {
    path: 'certificate-conflict-resolution-and-basic-communication-skills',
    loadChildren: () => import('./certificate-conflict-resolution-and-basic-communication-skills/certificate-conflict-resolution-and-basic-communication-skills.module').then( m => m.CertificateConflictResolutionAndBasicCommunicationSkillsPageModule)
  },
  {
    path: 'certificate-physical-exercise',
    loadChildren: () => import('./certificate-physical-exercise/certificate-physical-exercise.module').then( m => m.CertificatePhysicalExercisePageModule)
  },
  {
    path: 'certificate-digital-health',
    loadChildren: () => import('./certificate-digital-health/certificate-digital-health.module').then( m => m.CertificateDigitalHealthPageModule)
  },
  {
    path: 'certificate-clinical-scenarios',
    loadChildren: () => import('./certificate-clinical-scenarios/certificate-clinical-scenarios.module').then( m => m.CertificateClinicalScenariosPageModule)
  },
  {
    path: 'certificate-guidelines',
    loadChildren: () => import('./certificate-guidelines/certificate-guidelines.module').then( m => m.CertificateGuidelinesPageModule)
  },
  {
    path: 'certificate-updates-news',
    loadChildren: () => import('./certificate-updates-news/certificate-updates-news.module').then( m => m.CertificateUpdatesNewsPageModule)
  },
  {
    path: 'certificate-exam',
    loadChildren: () => import('./certificate-exam/certificate-exam.module').then( m => m.CertificateExamPageModule)
  },
  {
    path: 'pdf',
    loadChildren: () => import('./pdf/pdf.module').then( m => m.PdfPageModule)
  },
  {
    path: 'qandan',
    loadChildren: () => import('./qandan/qandan.module').then( m => m.QandanPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
