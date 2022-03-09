import { ComponentStory , ComponentMeta } from "@storybook/react";
import { Icon } from "./icons";

export default {
    title:"Atoms/Icons",
    component:Icon,
}as ComponentMeta<typeof Icon>;

const Template : ComponentStory<typeof Icon> = (args)=> <Icon {...args}></Icon>;

export const ArrowUpIcon  = Template.bind({});
ArrowUpIcon.args = {
    icon:"arrow-up"
}

export const ArrowDownIcon  = Template.bind({});
ArrowDownIcon.args = {
    icon:"arrow-down"
}

export const SearchIcon  = Template.bind({});
SearchIcon.args = {
    icon:"search"
}

export const AddIcon  = Template.bind({});
AddIcon.args = {
    icon:"add"
}