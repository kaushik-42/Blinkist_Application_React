import { ComponentMeta,ComponentStory } from "@storybook/react";
import Banner from './banner';
export default {
    title:"Organisms/banner",
    Component:Banner,
} as ComponentMeta<typeof Banner>

export const BannerTemplate : ComponentStory<typeof Banner> = ()=>{
    return (
        <div className="body">
            <div className="bannerContainer">
                <Banner/>
            </div>
        </div>
    )
}