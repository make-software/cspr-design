import React from 'react';
import TooltipV2 from './tooltip-v2';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import TruncateBox from '../truncate-box/truncate-box';
import { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react-vite';
import CaptionText from '../caption-text/caption-text';

const meta = {
  component: TooltipV2,
  title: 'Components/Display/TooltipV2',
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
} as Meta<typeof TooltipV2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return (
      <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
          <BodyText size={2}>Tooltip V2</BodyText>
          <TooltipV2 {...args}>
            <BodyText size={3} monotype>
              <TruncateBox size={1}>{args.tooltipContent as string}</TruncateBox>
            </BodyText>
          </TooltipV2>
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
          <TooltipV2 {...args} caption="PublicKey">
            <BodyText size={3} monotype>
              <TruncateBox size={1}>{args.tooltipContent as string}</TruncateBox>
            </BodyText>
          </TooltipV2>
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
          <TooltipV2 {...args} limitWidth="300px">
            <BodyText size={3} monotype>
              <TruncateBox size={1}>{args.tooltipContent as string}</TruncateBox>
            </BodyText>
          </TooltipV2>
        </FlexColumn>
      </FlexRow>
    );
  },
};

