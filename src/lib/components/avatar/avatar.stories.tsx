import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import Avatar from './avatar';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import SubtitleText from '../subtitle-text/subtitle-text';

export default {
  component: Avatar,
  title: 'Common/Components/Avatar',
  args: {
    size: 'default',
    hash: '01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2',
  },
  argTypes: {
    hash: {
      control: { type: 'text' },
    },
    size: {
      options: ['small', 'default', 'average', 'medium', 'big'],
      control: { type: 'radio' },
    },
    loading: {
      options: [true, false],
      control: { type: 'radio' },
    },
    isErc20: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Avatar>;

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Template: StoryFn<typeof Avatar> = (args) => (
  <FlexRow itemsSpacing={10}>
    <FlexColumn itemsSpacing={10}>
      <Avatar {...args} />
    </FlexColumn>
  </FlexRow>
);
const AvatarTypes = ({ size }) => (
  <>
    <SubtitleText size={2}>{size}</SubtitleText>
    <StyledBlock>
      <Avatar loading={true} size={size} />
      <Avatar
        hash="01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2"
        size={size}
      />
      <Avatar
        hash="84f97651d9322db4b6b23541528017c64acebf3a6250bdac8ff7481759ff8604"
        size={size}
      />
      <Avatar isErc20 size={size} />
      <Avatar
        src="https://makegroup.io/wp-content/uploads/2023/09/Logo.png"
        size={size}
      />
    </StyledBlock>
  </>
);

export const allOptions = () => (
  <FlexRow itemsSpacing={10}>
    <FlexColumn itemsSpacing={10}>
      <AvatarTypes size="small" />
      <AvatarTypes size="default" />
      <AvatarTypes size="average" />
      <AvatarTypes size="medium" />
      <AvatarTypes size="big" />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
