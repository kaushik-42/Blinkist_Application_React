import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ToolBar } from "./toolbar";

export default {
    title:"Organisms/ToolBar",
    component:ToolBar,
} as ComponentMeta<typeof ToolBar>;

export const Template:ComponentStory<typeof ToolBar> = (args)=>{
    return (
        <ToolBar {...args}/>
    )
}
Template.args = {
}