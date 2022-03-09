import { ComponentMeta,ComponentStory } from "@storybook/react";
import { Footer } from "./footer";

export default{
    title:"Organisms/footer",
    Comment:Footer,
} as ComponentMeta<typeof Footer>;

export const Template :ComponentStory<typeof Footer> = ()=>{
    return (
        <Footer/>
    )
}