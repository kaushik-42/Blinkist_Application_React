//import CoverImages from './CoverImages';
import React from 'react';
//import CoverImages from './CoverImages';

import ExtendedNav from './extendednav';
import { ComponentMeta,ComponentStory } from '@storybook/react';


//import imageFile from '/images/cover_images/2.png';
// /application/images/cover_images/2.png

export default {
    title:"Molecules",
    component:ExtendedNav,
}as ComponentMeta<typeof ExtendedNav>;

export const ExtendedNavTemplate : ComponentStory<typeof ExtendedNav> = (args)=> <ExtendedNav></ExtendedNav>;
