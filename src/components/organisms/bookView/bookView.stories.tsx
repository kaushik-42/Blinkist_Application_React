import { ComponentMeta,ComponentStory } from "@storybook/react";
import { BookView } from "./bookView";
import i2 from './../../../stories/assets/i2.png'

export default{
    title:"Organisms/bookView",
    Component:BookView,
} as ComponentMeta<typeof BookView>;

export const bookView:ComponentStory<typeof BookView> = ()=>{
    return <div className="body">
        <BookView book={{
                    title :"Bring Your Human to Work", 
                    author : "Erica Keswin",
                    minutesRead : "13", 
                    totalReads : "1.9K reads",
                    finished : false,
                    image:i2,
                    isReading:false,
                    readAgain:false,
                    id:"2",
                  
                }}/>
    </div>
}