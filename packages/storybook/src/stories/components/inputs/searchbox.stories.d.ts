import { ComponentType } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from '@t3n/components';
import { SearchBoxProps } from '@t3n/components/src/SearchBox';
interface TSuggestion {
    type: 'ITEM' | 'MORE';
    title: string;
    value: string;
    url: string;
    description: string;
}
declare const meta: Meta<ComponentType<SearchBoxProps<TSuggestion>>>;
export default meta;
type Story = StoryObj<typeof SearchBox>;
export declare const searchBox: Story;
export declare const light: Story;
export declare const red: Story;
export declare const loading: Story;
export declare const withSearchTermChange: Story;
