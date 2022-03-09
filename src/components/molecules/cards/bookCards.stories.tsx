import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookCard } from "./bookCards";
import i2 from './../../../stories/assets/i2.png'
// ./../../../stories/assets/i2.png

export default {
    title:"Molecules/bookCards",
    component:BookCard,
} as ComponentMeta<typeof BookCard>;

export const bookCard : ComponentStory<typeof BookCard> = (args)=>{
    return (
        <BookCard {...args}/>
    )
}

bookCard.args = {
    title :"Bring Your Human to Work", 
    author : "Erica Keswin",
    minutesRead : "13-minute read", 
    totalReads : "1.9K reads",
    isReading : false,
    finished : false,
    readAgain:false,
    image:i2,
}