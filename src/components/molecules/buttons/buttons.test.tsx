import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./buttons"

describe("Button",()=>{
    test("Text on Button",()=>{
        render(<Button hasIcon={false} icon={"arrow-down"} text={"Submit"}/>);
        expect(screen.getByText("Submit")).toBeInTheDocument();

    })

    test("Icons",()=>{
        const icon_click=jest.fn();
        render(<Button hasIcon={true} icon={"arrow-down"} text={"Submit"} onClick={()=>{icon_click}}/>)
        expect(screen.getByText("Submit").classList.contains("addButton")).toBe(true);
    })

    test("Button Fired",()=>{
        const button_click=jest.fn();
        render(<Button hasIcon={false} icon={"arrow-down"} text={"Submit"} onClick={button_click}/>)
        fireEvent.click(screen.getByText("Submit"));
        expect(button_click).toHaveBeenCalled();
    })
})
