import { render, screen } from "@testing-library/react"
import { Footer } from "./footer"

describe("Footer",()=>{
    test("Text",()=>{
        render(<Footer/>)
        expect(screen.getByText("What is Nonfiction?")).toBeInTheDocument()
    })
}) 