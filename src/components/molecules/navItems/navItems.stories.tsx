import { ComponentStory , ComponentMeta } from "@storybook/react";
import Nav from "./navItems";

export default {
    title:"Molecules/NavItems",
    component:Nav
} as ComponentMeta<typeof Nav>;

const Template :ComponentStory<typeof Nav> = ()=>{
    return <Nav text="Nav Item" iconLeft={false} iconRight={false} iconUrl="" extendedNav={false} />
}

export const Primary = Template.bind({});

export const withIcon :ComponentStory<typeof Nav> = (args)=>{
    return <Nav {...args} />
}
withIcon.args = {
    text : "Nav Item",
    iconLeft : false,
    iconRight : true,
    iconUrl : "arrow-down",
    extendedNav:false,
}

export const extendedNav = withIcon.bind({});
extendedNav.args={
    text:"Entrepreneuship",
    iconLeft:true,
    iconRight:false,
    iconUrl:"bell",
    extendedNav:true,
}