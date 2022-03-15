import { fireEvent, render, screen } from "@testing-library/react"
import { Tab } from "./tabs"

describe("Tabs",()=>{
    test("Check for tabs",()=>{
        render(<Tab text={"Tab"} isSelected={false} />);
        expect(screen.getByText("Tab")).toBeInTheDocument();
    })
    test("onclick function",()=>{
        var result = false;
        render(<Tab text={"Tab"} isSelected={false} onClick={()=>{result = true}}/>);
        fireEvent.click(screen.getByText("Tab"));
        expect(result).toBe(true);
        
    })
}) 