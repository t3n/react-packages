export const spaces = new Array(10).fill(0).map((val, i) => i * 0.5);

export default spaces.map(space => `${space}rem`);

// $gap                      : 1.25rem;
// $gap-extrasmall           : $gap/4;
// $gap-small                : $gap/2;
// $gap-medium               : 0.938rem;
// $gap-large                : $gap*2.5;
// $gap-extralarge           : $gap*4;

// $grid-space               : $gap-large;
// $grid-space-small         : $gap;

// $wrapper-width            : 90rem;
// $content-width            : 71.875rem;
// $content-width-small      : 48.125rem;
// $sidebar-width            : 25%;
