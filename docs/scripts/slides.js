import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/01-speaker-thibauld.md',
    '00-school/02-speaker-gaetan.md',
    '00-school/03-speaker-remi.md',
    '00-school/04-speaker-raphael.md',
    '00-school/05-participant.md',
    '00-school/06-objectives.md',
    '00-school/07-off-topic.md',
    '00-school/08-TOC.md',
    '00-school/09-prerequisites.md',
    '00-school/10-context.md'
];
}

function gaBasicsSlides() {
  return [
    '01-GA-basics/00-TITLE.md',
    '01-GA-basics/01-workflow.md',
    '01-GA-basics/02-example.md',
    '01-GA-basics/03-jobs.md',
    '01-GA-basics/04-steps.md',
    '01-GA-basics/05-triggers.md',
    '01-GA-basics/06-ui.md',
    '01-GA-basics/07-docs-tools.md',
    '01-GA-basics/08-exercises.md'
  ]
}

function introInteractWithEnv() {
  return [
    '02-interact-with-env/00-TITLE.md',
    '02-interact-with-env/01-environment-variables.md',
    '02-interact-with-env/02-job-summary.md',
    '02-interact-with-env/03-secrets.md',
    '02-interact-with-env/04-interact-with-github.md',
    '02-interact-with-env/05-runner.md',
    '02-interact-with-env/06-exercises.md'
  ];
}

function introReusableWorkflows() {
  return [
    '03-reusable-workflows/00-TITLE.md',
    '03-reusable-workflows/01-reusable-workflow.md',
    '03-reusable-workflows/02-exercises.md'
  ];
}

function gaMarketplaceSlides() {
  return [
    '04-GA-marketplace/00-TITLE.md',
    '04-GA-marketplace/01-GA-marketplace.md'
  ];
}

function introAdvancedConceptsSlides() {
  return [
    '05-advanced-concepts/00-TITLE.md',
    '05-advanced-concepts/01-advanced-concept.md',
    '05-advanced-concepts/02-error-handling.md',
    '05-advanced-concepts/03-artifacts.md',
    '05-advanced-concepts/04-cache.md',
    '05-advanced-concepts/05-exercises.md',
    '05-advanced-concepts/06-migration.md'
  ];
}

function outroSlides() {
  return [
    '06-conclusion/00-TITLE.md',
    '06-conclusion/01-feedback.md'
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...gaBasicsSlides(),
    ...introInteractWithEnv(),
    ...introReusableWorkflows(),
    ...gaMarketplaceSlides(),
    ...introAdvancedConceptsSlides(),
    ...outroSlides()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
