import { Meta, StoryObj } from '@storybook/react';
import { LegacyHeader } from '@t3n/components';
import { TagNavTagsType } from '@t3n/components/src/LegacyHeader/components/LegacyTagNav';
export declare const tagNavTags: TagNavTagsType[];
declare const meta: Meta<typeof LegacyHeader>;
export default meta;
type Story = StoryObj<typeof LegacyHeader>;
export declare const legacyHeader: Story;
export declare const notLoggedIn: Story;
