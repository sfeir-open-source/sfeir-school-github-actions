// One method per module
function schoolSlides() {
  return ['00-presentation/00-TITLE.md', '00-presentation/01-speaker-thibauld.md','00-presentation/02-speaker-gaetan.md','00-presentation/03-participant.md'];
}

function introSlides() {
  return ['intro/00-TITLE.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
