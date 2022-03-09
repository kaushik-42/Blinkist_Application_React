import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tab } from "./tabs";

export default {
    title:"Molecules/Tabs",
    Component:Tab
} as ComponentMeta<typeof Tab>;

export const SearchTab :ComponentStory<typeof Tab> = (args)=>{
    return <Tab {...args}/>
}

SearchTab.args = {
    text:"Currently Reading",
    isSelected:false,
}