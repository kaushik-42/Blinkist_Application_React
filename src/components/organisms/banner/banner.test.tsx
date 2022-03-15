import { fireEvent, render, screen } from "@testing-library/react"
import Banner from './banner';

describe("Banner",()=>{
    test("Image",()=>{
        render(<Banner/>);
        expect(screen.getByAltText("Book Cover")).toBeInTheDocument();
    })

    test("Text in the Banner",()=>{
        render(<Banner/>);
        expect(screen.getByText("Explore Books on entreprenueship")).toBeInTheDocument();
    })
})