import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchBar } from "./searchBars";

export default {
    title:"Molecules/Search Bar",
    Component:SearchBar
} as ComponentMeta<typeof SearchBar>;

export const SearchTab :ComponentStory<typeof SearchBar> = (args)=>{
    return <SearchBar {...args} icon="search"/>
}

SearchTab.args = {
    placeHolder:"Search by title or author"
}

/*
//import CoverImages from './CoverImages';
import React from 'react';
//import CoverImages from './CoverImages';

import SearchBar from './searchbar';
import { ComponentMeta,ComponentStory } from '@storybook/react';


//import imageFile from '/images/cover_images/2.png';
// /application/images/cover_images/2.png

export default {
    title:"Molecules",
    component:SearchBar,
}as ComponentMeta<typeof SearchBar>;

export const SearchBarTemplate : ComponentStory<typeof SearchBar> = (args)=> <SearchBar></SearchBar>;
*/