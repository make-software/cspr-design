import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge } from './badge';
import Link from '../link/link';
import TruncateBox from '../truncate-box/truncate-box';

export default {
  component: Badge,
  title: 'Common/Components/Badge',
  args: {
    variation: 'green',
    label: 'Test',
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;
export const badgeWithLink = () => (
  <Badge
    label={
      <TruncateBox size={1} style={{ verticalAlign: 'middle' }}>
        <Link color={'inherit'} href={'./'}>
          Link
        </Link>
      </TruncateBox>
    }
    variation={'blue'}
  />
);
export const Primary = Template.bind({});
