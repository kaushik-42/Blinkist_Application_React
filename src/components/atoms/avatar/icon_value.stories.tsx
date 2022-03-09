import {Avatar} from './avatar';
import React from 'react';
import { ComponentMeta,ComponentStory } from '@storybook/react';


export default {
    title:"Atoms/Avatar",
    component:Avatar,
}as ComponentMeta<typeof Avatar>;


export const Template:ComponentStory<typeof Avatar> = (args)=>{
    return (
        <Avatar text="Kaushik"/>
    )
}
Template.args = {
    text:"Kaushik",
}
/*
export const Avatar_Logo : ComponentStory<typeof Avatar> = (args)=> <Avatar></Avatar>;
*/