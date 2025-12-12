import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { ProductsMenu } from './products-menu';
import { ProductsMenuItem } from './products-menu-item';
import { NavigationSettingsContainer } from '../container';
import styled from 'styled-components';
import BodyText from '../../body-text/body-text';
import {
  CsprLiveIcon,
  CsprNftStudioIcon,
  CsprWalletIcon,
} from '../../../icons-index';

export default {
  component: ProductsMenu,
  title: 'Components/Navigation/ProductsMenu',
  // excludeStories: ['Primary'],
  // tags: ['autodocs', '!dev'],
  args: {
    opened: true,
  },
} as Meta<typeof ProductsMenu>;

// @ts-ignore
const MenuContainer = styled.div(() => ({
  marginTop: '40px',
  left: '10px',
  position: 'absolute',
}));

const Template: StoryFn<typeof ProductsMenu> = (args) => {
  const [opened, setOpened] = useState(false);

  return (
    <NavigationSettingsContainer>
      <div
        style={{ display: 'flex', flexDirection: 'column' }}
        onMouseOver={() => {
          setOpened(true);
        }}
        onMouseOut={() => {
          setOpened(false);
        }}
      >
        <BodyText size={2} variation={'lightGray'}>
          CSPR Products
        </BodyText>
        <MenuContainer>
          <ProductsMenu opened={opened} {...args} />
        </MenuContainer>
      </div>
    </NavigationSettingsContainer>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <ProductsMenuItem
        nameLabel={'CSPR.live Explorer'}
        descriptionText={'CSPR.live Block explorer'}
        link={''}
        icon={CsprLiveIcon}
      />
      <ProductsMenuItem
        selected
        nameLabel={'Casper Wallet'}
        link={''}
        icon={CsprWalletIcon}
        newBadgeLabel={'New'}
      />
      <ProductsMenuItem
        nameLabel={'CSPR.studio (Beta)'}
        link={''}
        icon={CsprNftStudioIcon}
        comingSoonBadgeLabel={'Coming soom'}
      />
      <ProductsMenuItem
          nameLabel={'CSPR.studio (Beta)'}
          link={''}
          icon={CsprNftStudioIcon}
          comingSoonBadgeLabel={'Coming soom'}
      />
      <ProductsMenuItem
          nameLabel={'CSPR.studio (Beta)'}
          link={''}
          icon={CsprNftStudioIcon}
          comingSoonBadgeLabel={'Coming soom'}
      />
    </>
  ),
};
