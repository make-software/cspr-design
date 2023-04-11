import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ProductsMenu } from "./products-menu";
import { ProductsMenuItem } from "./products-menu-item";

export default {
  component: ProductsMenu,
  title: "Products Menu",
  args: {
    opened: true,
  },
} as ComponentMeta<typeof ProductsMenu>;

const Template: ComponentStory<typeof ProductsMenu> = (args) => (
  <ProductsMenu {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: (
    <>
      <ProductsMenuItem
        nameLabel={"CSPR.live Explorer"}
        descriptionText={"CSPR.live Block explorer"}
        link={""}
        icon={"../assets/icons/ic-sand-clock-light.svg"}
      />
      <ProductsMenuItem
        nameLabel={"Casper Wallet"}
        link={""}
        icon={""}
        newBadgeLabel={"New"}
      />
      <ProductsMenuItem
        nameLabel={"CSPR.studio (Beta)"}
        link={""}
        icon={""}
        comingSoonBadgeLabel={"Coming soom"}
      />
      <ProductsMenuItem nameLabel={"some name3"} link={""} icon={""} />
      <ProductsMenuItem nameLabel={"some name3"} link={""} icon={""} />
      <ProductsMenuItem nameLabel={"some name3"} link={""} icon={""} />
    </>
  ),
};
