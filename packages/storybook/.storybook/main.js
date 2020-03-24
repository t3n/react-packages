module.exports = {
  stories: [
    '../src/stories/storybook/introduction.story.mdx',

    // Design-System
    '../src/stories/designSystem/breakpoints/breakpoints.stories',
    '../src/stories/designSystem/colors/colors.stories',
    '../src/stories/designSystem/space/space.stories',
    '../src/stories/designSystem/theme/theme.stories',

    // Components - Typography
    '../src/stories/components/typography/heading/heading.stories',
    '../src/stories/components/typography/text/text.stories',
    '../src/stories/components/typography/punchline/punchline.stories',

    // Components - Layout
    '../src/stories/components/layout/globalStyle.stories',
    '../src/stories/components/layout/content.stories',
    '../src/stories/components/layout/center.stories',
    '../src/stories/components/layout/divider.stories',
    '../src/stories/components/layout/grid.stories',
    '../src/stories/components/layout/pageLayout.stories',
    '../src/stories/components/layout/pageHeader.stories',
    '../src/stories/components/layout/pageFooter.stories',
    '../src/stories/components/layout/ratio.stories',
    '../src/stories/components/layout/section.stories',

    // Components - Content
    '../src/stories/components/content/accordion.stories',
    '../src/stories/components/content/alert.stories',
    '../src/stories/components/content/authorArticleCard.stories',
    '../src/stories/components/content/avatar.stories',
    '../src/stories/components/content/badge.stories',
    '../src/stories/components/content/card.stories',
    '../src/stories/components/content/heroArticleCard.stories',
    '../src/stories/components/content/icon.stories',
    '../src/stories/components/content/image.stories',
    '../src/stories/components/content/jobCard.stories',
    '../src/stories/components/content/loader.stories',
    '../src/stories/components/content/newsCard.stories',
    '../src/stories/components/content/placeholder.stories',
    '../src/stories/components/content/searchbox.stories',
    '../src/stories/components/content/tag.stories',
    '../src/stories/components/content/taglist.stories',
    '../src/stories/components/content/titleCard.stories',

    // Components - Inputs
    '../src/stories/components/inputs/button.stories',
    '../src/stories/components/inputs/socialButton.stories',
    '../src/stories/components/inputs/checkbox.stories',
    '../src/stories/components/inputs/input.stories',
    '../src/stories/components/inputs/slider.stories',
    '../src/stories/components/inputs/switch.stories',
    '../src/stories/components/inputs/link.stories',
    '../src/stories/components/inputs/breadcrumbs.stories',

    // Form
    '../src/stories/components/form/formgroup.stories',
    '../src/stories/components/form/form.stories',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/preset-typescript',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
  ],
};
