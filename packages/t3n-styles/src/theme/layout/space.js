export const space = 1.25; // 20px
export const spaceExtraSmall = space / 4; // 5px
export const spaceSmaller = space / 2; // 10px
export const spaceSmall = 0.9375; // 15px
export const spaceMedium = space * 1.25; // 25px
export const spaceLarge = space * 2.5; // 50px
export const spaceExtraLarge = space * 4; // 80px

export const spaces = [
  0,
  spaceExtraSmall, // 5px
  spaceSmaller, // 10px
  spaceSmall, // 15px
  space, // 20px
  spaceMedium, // 25px
  spaceLarge, // 50px
  spaceExtraLarge // 80px
];

export default spaces.map(space => space + 'rem');

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
