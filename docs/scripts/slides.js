import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-presentation/00-TITLE.md',
    '00-presentation/01-speaker-thibauld.md',
    '00-presentation/02-speaker-gaetan.md',
    '00-presentation/03-speaker-remi.md',
    '00-presentation/04-speaker-raphael.md',
    '00-presentation/05-participant.md'
];
}

function gaBasicsSlides() {
  return [
    '02-GA-Basics/00-TITLE.md',
    '02-GA-Basics/01-Workflow.md',
    '02-GA-Basics/02-Example.md',
    '02-GA-Basics/03-Jobs.md',
    '02-GA-Basics/04-Steps.md',
    '02-GA-Basics/05-Triggers.md',
    '02-GA-Basics/06-UI.md',
    '02-GA-Basics/07-Docs-Tools.md',
    '02-GA-Basics/08-Exercices.md'
  ]
}


function gaMarketplaceSlides() {
  return [
    '05-GA-Marketplace/00-TITLE.md',
    '05-GA-Marketplace/01-GA-Marketplace.md'
  ];
}

function introInteractWithEnv() {
  return [
    '03-Interact-With-Env/00-TITLE.md',
    '03-Interact-With-Env/01-Environment-Variables.md',
    '03-Interact-With-Env/02-Job-summary.md',
    '03-Interact-With-Env/03-Secrets.md',
    '03-Interact-With-Env/04-interact-with-github.md',
    '03-Interact-With-Env/05-Runner.md',
    '03-Interact-With-Env/06-Exercices.md'
  ];
}

function introReusableWorkflows() {
  return [
    '04-Reusable-Workflows/00-TITLE.md',
    '04-Reusable-Workflows/01-Reusable-workflow.md',
    '04-Reusable-Workflows/02-Exercices.md'
  ];
}

function introAdvancedConceptsSlides() {
  return [
    '06-Advanced-Concepts/00-TITLE.md',
    '06-Advanced-Concepts/01-Advanced-concept.md',
    '06-Advanced-Concepts/02-Error-Handling.md',
    '06-Advanced-Concepts/03-Artifacts.md',
    '06-Advanced-Concepts/04-Cache.md',
    '06-Advanced-Concepts/05-Exercices.md',
    '06-Advanced-Concepts/06-Migration.md'
  ];
}

function introSlides() {
  return [
    '01-intro/00-TITLE.md',
    '01-intro/01-objectifs.md',
    '01-intro/02-off-topic.md',
    '01-intro/03-TOC.md',
    '01-intro/04-Prerequisites.md',
    '01-intro/05-GA-Context.md'
  ];
}

function outroSlides() {
  return [
    '07-Conclusion/00-TITLE.md'
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(),
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
