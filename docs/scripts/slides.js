// One method per module
function schoolSlides() {
  return [
    '00-presentation/00-TITLE.md',
    '00-presentation/01-speaker-thibauld.md',
    '00-presentation/02-speaker-gaetan.md',
    '00-presentation/03-participant.md'
];
}

function introSlides() {
  return [
    '01-intro/00-TITLE.md',
    '01-intro/01-objectifs.md',
    '01-intro/02-off-topic.md',
    '01-intro/03-TOC.md'
  ];
}

function introInteractWithEnv() {
  return [
    '03-Interact-With-Env/00-TITLE.md'
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

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(),
    ...introInteractWithEnv(),
    ...introReusableWorkflows(),
    ...introAdvancedConceptsSlides(),//
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
