import { fireEvent, render, screen } from "@testing-library/react"
import { ToolBar } from "./toolbar"

describe("ToolBar",()=>{
    test("Text",()=>{
        render(<ToolBar onClick={()=>{}}/>)
        expect(screen.getByText("Entrepreneurship")).toBeInTheDocument();
    })
    test("onClick",()=>{
        var result = false;
        render(<ToolBar onClick={()=>{result = true}}/>)
        fireEvent.click(screen.getByText("Entrepreneurship"));
        expect(result).toBe(true);
    })
}) 