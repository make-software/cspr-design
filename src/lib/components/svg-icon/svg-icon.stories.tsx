import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SvgIcon from '../svg-icon/svg-icon';
import { FacebookIcon, Twitter_xIcon } from '../../icons-index';
import SvgIconSocial from './svg-icon-social';
import FlexRow from '../flex-row/flex-row';

export default {
  component: SvgIcon,
  title: 'Components/Image and icons/SvgIcon',
  // tags: ['autodocs', '!dev'],
  args: { src: FacebookIcon },
  argTypes: { src: {} },
} as Meta<typeof SvgIcon>;

const Template: StoryFn<typeof SvgIcon> = (args) => (
  <SvgIcon {...args} color={'#000000'} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const SocialMediaIcons = () => (
  <FlexRow itemsSpacing={10}>
    <SvgIconSocial userId={'000'} socialMediaType={'github'} />
    <SvgIconSocial userId={'111'} socialMediaType={'linkedin'} />
    <SvgIconSocial userId={'111'} socialMediaType={'telegram'} />
    <SvgIconSocial userId={'111'} socialMediaType={'twitter_x'} />
    <SvgIconSocial userId={'111'} socialMediaType={'youtube'} />
    <SvgIconSocial userId={'111'} socialMediaType={'keybase'} />
    <SvgIconSocial userId={'111'} socialMediaType={'medium'} />
    <SvgIconSocial userId={'111'} socialMediaType={'reddit'} />
    <SvgIconSocial userId={'111'} socialMediaType={'website'} />
    <SvgIconSocial userId={'111'} socialMediaType={'wechat'} />
  </FlexRow>
);
