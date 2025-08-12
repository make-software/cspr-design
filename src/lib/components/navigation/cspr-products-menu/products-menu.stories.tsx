import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { ProductsMenu } from './products-menu';
import { ProductsMenuItem } from './products-menu-item';
import { NavigationSettingsContainer } from '../container';
import styled from 'styled-components';
import BodyText from '../../body-text/body-text';

export default {
  component: ProductsMenu,
  title: 'Components/Navigation/Products Menu',
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
        icon={'./assets/icons/logos/cspr-live.svg'}
      />
      <ProductsMenuItem
        selected
        nameLabel={'Casper Wallet'}
        link={''}
        icon={'./assets/icons/logos/cspr-wallet.svg'}
        newBadgeLabel={'New'}
      />
      <ProductsMenuItem
        nameLabel={'CSPR.studio (Beta)'}
        link={''}
        icon={'./assets/icons/logos/cspr-nft-studio.svg'}
        comingSoonBadgeLabel={'Coming soom'}
      />
      <ProductsMenuItem nameLabel={'some name3'} link={''} icon={''} />
      <ProductsMenuItem nameLabel={'some name3'} link={''} icon={''} />
      <ProductsMenuItem nameLabel={'some name3'} link={''} icon={''} />
    </>
  ),
};
