import { render, screen, fireEvent } from "@testing-library/react"
import { Header } from "./header"


describe("Header", ()=>{
    test("Text",()=>{
        render(<Header loggedIn={false}/>)
        expect(screen.getByText("Explore")).toBeInTheDocument();
    })
    test("Explore",()=>{
        render(<Header loggedIn={false} isExplore={true}/>)
        expect(screen.getByText("Entrepreneurship")).toBeInTheDocument();
    })
    test("Explore Click Option",()=>{
        var result = false;
        render(<Header loggedIn={false} onExploreClick={()=>{result=true}}/>)
        fireEvent.click(screen.getByText("Explore"))
        expect(result).toBe(true);
    })
    test("My Library Click",()=>{
        var result = false;
        render(<Header loggedIn={false} onMyLibClick={()=>{result=true}}/>)
        fireEvent.click(screen.getByText("My Library"))
        expect(result).toBe(true);
    })
}) 