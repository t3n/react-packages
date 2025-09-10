import { Meta, StoryObj } from '@storybook/react';

import { ArticleTeaser } from '@t3n/components';

import { storyContainerContentDecorator } from '../../../utils/decorators';

const meta: Meta<typeof ArticleTeaser> = {
  component: ArticleTeaser,
  title: 'Components/Content/ArticleTeaser',
  decorators: [storyContainerContentDecorator],
  parameters: { controls: { sort: 'requiredFirst' } },
  args: {
    article: {
      identifier: 'identifier',
      type: 'Briefing',
      date: '05.02.2025, 11:00',
      title:
        'Vergleiche in der Arbeitswelt: Wenn uns der Blick nach links und rechts umtreibt',
      url: 'https://t3n.de/news/vergleiche-in-der-arbeitswelt-wenn-uns-der-blick-nach-links-und-rechts-umtreibt-1671375/',
      readingTime: 3,
      imageUrl:
        'https://cdn.t3n.de/news/wp-content/uploads/2025/02/Zwei-Maenner-bei-der-Arbeit.jpg',
      isPaywallArticle: true,
      isTRArticle: true,
      teaser:
        'Vergleiche in der Arbeitswelt sind ein zweischneidiges Schwert: Sie können uns weiterbringen oder Unsicherheiten verstärken. Drei Impulse für den nächsten Blick nach links oder rechts, nach oben, unten oder in den Spiegel.',
    },
    teaserText: true,
    largeTeaserImage: true,
    smallTeaserImage: false,
  },
};

export default meta;
type Story = StoryObj<typeof ArticleTeaser>;

export const SmallTeaserImage: Story = {
  args: { largeTeaserImage: false, smallTeaserImage: true, teaserText: true },
};

export const LargeTeaserImage: Story = {
  args: { largeTeaserImage: true, smallTeaserImage: false, teaserText: true },
};
