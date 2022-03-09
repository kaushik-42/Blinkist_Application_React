import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "./header";

export default {
    title:"Organisms/Header",
    component:Header,
} as ComponentMeta<typeof Header>;

export const Template:ComponentStory<typeof Header> = (args)=>{
    return (
        <Header {...args}/>
    )
}
Template.args = {
    loggedIn:false,
    onClickExploreTab:()=>{},
    onExploreClick:()=>{},
}