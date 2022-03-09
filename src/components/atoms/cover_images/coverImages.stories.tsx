//import CoverImages from './CoverImages';
import React from 'react';
//import CoverImages from './CoverImages';

import {CoverImages} from './coverImages';
import { ComponentMeta,ComponentStory } from '@storybook/react';
import imageFile from './../../../stories/assets/i2.png';

//import imageFile from '/images/cover_images/2.png';
// /application/images/cover_images/2.png

export default {
    title:"Atoms/CoverImages",
    component:CoverImages,
}as ComponentMeta<typeof CoverImages>;

export const Template : ComponentStory<typeof CoverImages> = (args)=> 
{
    return <div>
        <CoverImages url={imageFile} class="image2"/>
    </div>
}
/*
export default {
    title:"Atoms",
    component:IconAvatars,
}as ComponentMeta<typeof IconAvatars>;

export const Avatar_Logo : ComponentStory<typeof IconAvatars> = (args)=> <IconAvatars></IconAvatars>;
*/

