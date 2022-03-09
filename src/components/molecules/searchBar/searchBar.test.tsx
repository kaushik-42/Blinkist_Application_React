import { render, screen } from "@testing-library/react"
import { SearchBar } from "./searchBars"

describe("Search Bar",()=>{
    test("Search Bar Placeholder Test",()=>{
        render(<SearchBar icon={"search"} placeHolder={'Search By Title'}/>);
        expect(screen.getByPlaceholderText('Search By Title')).toBeInTheDocument();
    })
})