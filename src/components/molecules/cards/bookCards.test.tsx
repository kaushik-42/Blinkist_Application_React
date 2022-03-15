import { fireEvent, render, screen } from "@testing-library/react"
import { BookCard } from "./bookCards"

describe("Book Cards",()=>{
    test("first",()=>{
        render(<BookCard title={"Demo Title"} author={"Myself"} minutesRead={"13"} totalReads={"1.9"} isReading={false} finished={true} readAgain={false} image={"i2"} id={"2"} />);
        expect(screen.getByText("Demo Title")).toBeInTheDocument();
    })

    test("onAdd Button",()=>{
        render(<BookCard title={"Demo Title"} author={"Myself"} minutesRead={"13"} totalReads={"1.9"} isReading={false} finished={false} readAgain={false} image={"i2"} id={"2"} 
                onAddButtonClick={()=>{result=true}}/>);
        var result = false;
        const button = screen.getByText("Add to library");
        fireEvent.change(button,{target:{onclick:()=>{result:true}}});
        fireEvent.click(button);
        expect(result).toBe(true);
    })

    test("onReadAgainButton",()=>{
        render(<BookCard title={"Demo Title"} author={"Myself"} minutesRead={"13"} totalReads={"1.9"} isReading={false} finished={true} readAgain={true} image={"i2"} id={"2"} />);
        expect(screen.getByText("Read Again")).toBeInTheDocument();
    })

    test("onReadAgainButton click",()=>{
        render(<BookCard title={"Demo Title"} author={"Myself"} minutesRead={"13"} totalReads={"1.9"} isReading={true} finished={true} readAgain={true} image={"i2"} id={"2"} 
                onReadAgainClick={()=>{result=true}}/>);
        var result = false;
        const button = screen.getByText("Read Again");
        fireEvent.click(button);
        expect(result).toBe(true);    
    })
    test("onFinishButton click",()=>{
        render(<BookCard title={"Demo Title"} author={"Myself"} minutesRead={"13"} totalReads={"1.9"} isReading={false} finished={true} readAgain={true} image={"i2"} id={"2"} 
                onReadAgainClick={()=>{result=true}}/>);
        var result = false;
        const button = screen.getByText("Read Again");
        fireEvent.click(button);
        expect(result).toBe(true);
    })
    
    test("finished",()=>{
        render(<BookCard title={"Demo Title"} author={"Myself"} minutesRead={"13"} totalReads={"1.9"} isReading={false} finished={true} readAgain={false} image={"i2"} id={"2"} />);
        expect(screen.getByText("Finished")).toBeInTheDocument();
    })
})