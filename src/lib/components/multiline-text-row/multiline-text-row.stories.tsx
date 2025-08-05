import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MultilineTextRow } from './multiline-text-row';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import styled from 'styled-components';

export default {
  component: MultilineTextRow,
  title: 'Common/Components/MultilineTextRow',
  args: {
    label: 'Message',
    text: 'Lorem ipsum dolor sit amet. Est illo perspiciatis vel excepturi debitis quo dolores galisum ad soluta maxime eum ipsa omnis in blanditiis tenetur. Qui Quis natus qui explicabo atque qui similique molestiae in corrupti delectus in neque blanditiis ex atque quod quo quia quasi!',
  },
} as Meta<typeof MultilineTextRow>;

const SmallContainer = styled('div')(({}) => ({
  width: '300px',
}));

const MiddleContainer = styled('div')(({}) => ({
  width: '600px',
}));

const Template: StoryFn<typeof MultilineTextRow> = (args) => (
  <>
    <FlexRow itemsSpacing={30}>
      <FlexColumn itemsSpacing={20}>
        <BodyText size={2}>Small Container</BodyText>
        <SmallContainer>
          <MultilineTextRow {...args} />
        </SmallContainer>
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      <FlexColumn itemsSpacing={20}>
        <BodyText size={2}>Middle Container</BodyText>
        <MiddleContainer>
          <MultilineTextRow {...args} />
        </MiddleContainer>
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      <FlexColumn itemsSpacing={20}>
        <BodyText size={2}>Large Container</BodyText>
        <MultilineTextRow {...args} />
      </FlexColumn>
    </FlexRow>
  </>
);

export const Primary = Template.bind({});
