import React from 'react';
import Tooltip from './tooltip';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import TruncateBox from '../truncate-box/truncate-box';
import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react-vite';
import CaptionText from '../caption-text/caption-text';

const meta = {
  component: Tooltip,
  title: 'Components/Display/Tooltip',
  args: {
    caption: 'PublicKey',
    tooltipContent:
      '0202fa4d6ff148562fe18cdb5aca0bb6c3b96592cdacad8587eb906c3e4b1ac7258a',
  },
  argTypes: {
    tooltipContent: {
      control: 'text',
      description: 'The tooltip text to display',
    },
    additionalBlock: {
      control: 'object',
    },
  },
} as Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return (
      <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
          <BodyText size={2}>Tooltip V2</BodyText>
          <Tooltip {...args}>
            <BodyText size={3} monotype>
              <TruncateBox size={1}>{args.tooltipContent as string}</TruncateBox>
            </BodyText>
          </Tooltip>
        </FlexColumn>
      </FlexRow>
    );
  },
};

export const WithCaption: Story = {
  render: (args) => {
    return (
      <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
          <BodyText size={2}>With Caption</BodyText>
          <Tooltip {...args} caption="PublicKey">
            <BodyText size={3} monotype>
              <TruncateBox size={1}>{args.tooltipContent as string}</TruncateBox>
            </BodyText>
          </Tooltip>
        </FlexColumn>
      </FlexRow>
    );
  },
};

export const WithExtendedLine: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    additionalBlock: (
      <FlexColumn>
        <CaptionText size={1} variation={'gray'}>
          Tooltip Caption
        </CaptionText>
        <BodyText size={3}>Tooltip Content</BodyText>
      </FlexColumn>
    ),
  },
};

export const LimitedWidth: Story = {
  render: (args) => {
    return (
      <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
          <BodyText size={2}>Limited Width (300px)</BodyText>
          <Tooltip {...args} limitWidth="300px">
            <BodyText size={3} monotype>
              <TruncateBox size={1}>{args.tooltipContent as string}</TruncateBox>
            </BodyText>
          </Tooltip>
        </FlexColumn>
      </FlexRow>
    );
  },
};

