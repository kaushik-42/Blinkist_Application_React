import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typo } from "./typo";

export default{
    title:"Atoms/Typo",
    Component:Typo,
} as ComponentMeta<typeof Typo>;

export const Template:ComponentStory<typeof Typo> = (args)=>{
    return (
        <Typo {...args}/>
    );
}

Template.args = {
    text:"Bring Your Human to Work",
    type:"h1",
}
