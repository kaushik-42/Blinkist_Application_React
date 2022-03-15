import { fireEvent, render,screen } from "@testing-library/react"
import Nav from "./navItems"

describe("Nav Items",()=>{
    test("isPresent",()=>{
        render(<Nav text={"Nav Item"} iconLeft={false} iconRight={true} iconUrl={"arrow-up"} extendedNav={false}/>);
        expect(screen.getByText("Nav Item")).toBeInTheDocument();
    })

    test("onclick",()=>{
        var result = false;
        render(<Nav text={"Nav Item"} iconLeft={false} iconRight={true} iconUrl={"arrow-up"} extendedNav={true} onClick={()=>{result = true}}/>);
        const component = screen.getByText("Nav Item");
        fireEvent.click(component);
        expect(result).toBe(true);
        
    })
}) 