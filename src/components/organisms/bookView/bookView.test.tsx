import { fireEvent, render, screen } from "@testing-library/react"
import { BookView } from "./bookView";
import i2 from './../../../stories/assets/i2.png'
import { BookCardInterface } from "../../molecules/cards/bookCards"


describe("BookView", () => {
    var book:BookCardInterface ={
        title :"Bring Your Human to Work", 
        author : "Erica Keswin",
        minutesRead : "13", 
        totalReads : "1.9K reads",
        finished : false,
        image:i2,
        isReading:false,
        readAgain:false,
        id:"2",
    }
    
    test("Text on Books",()=>{
        render(<BookView book={book}/>);
        expect(screen.getByText("Bring Your Human to Work")).toBeInTheDocument();
        expect(screen.getByText("Get the key ideas from")).toBeInTheDocument();
    })
})
