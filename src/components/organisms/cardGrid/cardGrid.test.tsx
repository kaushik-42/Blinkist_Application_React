import { BookCardInterface } from "../../molecules/cards/bookCards";
import CardGrid from "./cardGrid";
import i2 from './../../../stories/assets/i2.png'
import { fireEvent, render, screen } from "@testing-library/react"

describe("Card Grid",()=>{
    var book_1:BookCardInterface ={
        title:"Demo Book",
        author:"ITs me",
        minutesRead:"13-min read",
        totalReads:"19K",
        isReading:false,
        finished:false,
        readAgain:false,
        image:"Image1",
        id:"1"
    }

    test("Text Tests",()=>{
        render(<CardGrid cards={[book_1]}/>);
        expect(screen.getAllByText("Add to library").length===1).toBe(true);
    })

    test("OnClick for Adding",()=>{
        var result = {"1":false};
        render(<CardGrid cards={[book_1]} onAddButtonClick={(id:string)=>{if(id==="1")result["1"] = true}}/>)
        /* Works for multiple books in our tests if present
        screen.getAllByText("Add to library").forEach((value)=>{
            fireEvent.click(value);
        })
        */
        // For one:
        fireEvent.click(screen.getAllByText("Add to library")[0]);
        expect(result["1"]).toBe(true);
    })

    test("Onclick for reading again",()=>{
        var result = {"1":false};
        book_1["finished"] = true;
        book_1["readAgain"] = true;
        render(<CardGrid cards={[book_1]} onReadAgainClick={(id:string)=>{if(id==="1")result["1"] = true}}/>)
        fireEvent.click(screen.getAllByText("Read Again")[0]);
        expect(result["1"]).toBe(true);
    })
})