import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavigationBanner from './navigation-banner';
import FlexRow from '../../flex-row/flex-row';
import TruncateBox from '../../truncate-box/truncate-box';
import SvgIcon from '../../svg-icon/svg-icon';
import styled from 'styled-components';

const StyledSvgIcon = styled(SvgIcon)(() => ({
  color: 'inherit',
  transform: 'rotate(180deg) scale(0.8)',
  marginLeft: '4px',
}));

export default {
  component: NavigationBanner,
  title: 'Components/Navigation/NavigationBanner',
  // tags: ['autodocs', '!dev'],
  args: {
    message: 'Call me maybe!',
    link: '',
  },
} as Meta<typeof NavigationBanner>;

const Template: StoryFn<typeof NavigationBanner> = (args) => (
  <NavigationBanner {...args} />
);

export const BannerWithJSXNode = () => (
  <NavigationBanner
    message={
      <FlexRow align="center" justify="center">
        <SvgIcon
          src="assets/icons/flags/ic-flag-ua.svg"
          size={14}
          marginRight
        />{' '}
        <TruncateBox size={2}>Stand with Ukraine</TruncateBox>
        <StyledSvgIcon src="assets/icons/ic-arrow-with-tail.svg" size={14} />
      </FlexRow>
    }
    link={'#'}
  />
);

export const BannerWithLongText = () => (
  <NavigationBanner
    message={
      <TruncateBox size={2}>
        2132460a950062fd30ad8a54cda9d0bed7ee1571edeb65459f62f3562ed82884
      </TruncateBox>
    }
  />
);

export const Primary = Template.bind({});
