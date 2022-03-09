import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./buttons";

export default {
    title:"Molecules/Buttons",
    Component:Button
} as ComponentMeta<typeof Button>;

export const SearchTab :ComponentStory<typeof Button> = (args)=>{
    return <Button {...args} />
}

SearchTab.args = {
    text:"Connect",
    hasIcon:false,
    icon:"add",
}

export const AddButton  = SearchTab.bind({});
AddButton.args = {
    text:"Add to library",
    hasIcon:true,
    icon:"add",
} 