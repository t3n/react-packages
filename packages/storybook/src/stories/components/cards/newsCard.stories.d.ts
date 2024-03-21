import { Meta, StoryObj } from '@storybook/react';
import { NewsCard } from '@t3n/components';
declare const meta: Meta<typeof NewsCard>;
export default meta;
type Story = StoryObj<typeof NewsCard>;
export declare const hero: Story;
export declare const author: Story;
export declare const loadingHero: Story;
export declare const loadingAuthor: Story;
