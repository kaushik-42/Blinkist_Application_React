import { ComponentMeta,ComponentStory } from "@storybook/react";
import { BookCardInterface } from "../../molecules/cards/bookCards";
import CardGrid from "./cardGrid";
import i2 from './../../../stories/assets/i2.png'

export default {
    title:"Organisms/CardGrid",
    Component:CardGrid,
} as ComponentMeta<typeof CardGrid>


export const cardGrid :ComponentStory<typeof CardGrid> = ()=>{
    var data:BookCardInterface[]= [{
                    title :"Bring Your Human to Work", 
                    author : "Erica Keswin",
                    minutesRead : "10", 
                    totalReads : "1.0K reads",
                    finished : true,
                    image:i2,
                    isReading:false,
                    readAgain:false,
                    id:"2",
                },
                {
                    title :"Dont Bring Human to Work", 
                    author : "only Keswin",
                    minutesRead : "11", 
                    totalReads : "1.0K reads",
                    finished : false,
                    image:i2,
                    isReading:true,
                    readAgain:false,
                    id:"3",
                  
                },
                {   
                    title :"Bring Your Tools to Work", 
                    author : "only Erica",
                    minutesRead : "13", 
                    totalReads : "1.9K reads",
                    finished : false,
                    image:i2,
                    isReading:false,
                    readAgain:true,
                    id:"4",
                },
                {
                    title :"Bring Your Human to Party", 
                    author : "nobody",
                    minutesRead : "7", 
                    totalReads : "2K reads",
                    finished : false,
                    image:i2,
                    isReading:false,
                    readAgain:true,
                    id:"5",
                  
                },
                {
                    title :"Bring to work", 
                    author : "myself",
                    minutesRead : "12", 
                    totalReads : "1K reads",
                    finished : true,
                    image:i2,
                    isReading:false,
                    readAgain:true,
                    id:"6",
                  
                },]
    return <div className="cardGrid">
                <div className="insideCardGrid">
                    <CardGrid cards={data} />
                </div>
            </div>
}