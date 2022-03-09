//import CoverImages from './CoverImages';
import React from 'react';
//import CoverImages from './CoverImages';

import {Logo} from './logo';
import { ComponentMeta,ComponentStory } from '@storybook/react';


//import imageFile from '/images/cover_images/2.png';
// /application/images/cover_images/2.png

export default {
    title:"Atoms/Logo",
    component:Logo,
}as ComponentMeta<typeof Logo>;

export const Template_Logo : ComponentStory<typeof Logo> = (args)=> <Logo></Logo>;
