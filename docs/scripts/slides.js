// One method per module
function schoolSlides() {
  return [
    '00-presentation/00-TITLE.md',
    '00-presentation/01-speaker-thibauld.md',
    '00-presentation/02-speaker-gaetan.md',
    '00-presentation/03-participant.md'
];
}

function gaBasicsSlides() {
  return [
    '02-GA-Basics/00-TITLE.md',
    '02-GA-Basics/01-Workflow.md',
    '02-GA-Basics/02-Example.md',
    '02-GA-Basics/03-Triggers.md',
    '02-GA-Basics/04-Exercices.md'
  ]
}


function gaMarketplaceSlides() {
  return [
    '05-GA-Marketplace/00-TITLE.md'
  ];
}

function introInteractWithEnv() {
  return [
    '03-Interact-With-Env/00-TITLE.md',
    '03-Interact-With-Env/01-Environment-Variables.md',
    '03-Interact-With-Env/02-Secrets.md',
    '03-Interact-With-Env/03-interact-with-github.md'

  ];
}

function introReusableWorkflows() {
  return [
    '04-Reusable-Workflows/00-TITLE.md'
  ];
}

function introAdvancedConceptsSlides() {
  return [
    '06-Advanced-Concepts/00-TITLE.md'
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

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(),
    ...gaBasicsSlides(),
    ...introInteractWithEnv(),
    ...introReusableWorkflows(),
    ...gaMarketplaceSlides(),
    ...introAdvancedConceptsSlides()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
