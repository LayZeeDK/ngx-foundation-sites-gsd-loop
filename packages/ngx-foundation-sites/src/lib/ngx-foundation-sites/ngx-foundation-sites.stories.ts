import type { Meta, StoryObj } from '@storybook/angular';
import { NgxFoundationSites } from './ngx-foundation-sites';
import { expect } from 'storybook/test';

const meta: Meta<NgxFoundationSites> = {
  component: NgxFoundationSites,
  title: 'NgxFoundationSites',
};
export default meta;

type Story = StoryObj<NgxFoundationSites>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/NgxFoundationSites works!/i)).toBeTruthy();
  },
};
