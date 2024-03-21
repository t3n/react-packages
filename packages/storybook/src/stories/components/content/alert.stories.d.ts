import { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@t3n/components';
declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;
export declare const success: Story;
export declare const notice: Story;
export declare const warning: Story;
export declare const error: Story;
