import { CoverImages } from "./../../atoms/cover_images/coverImages"
import { Typo } from "../../atoms/Typo/typo"
import imageFile from "./../../../stories/assets/logo.png"

interface FooterInterface{}
export const Footer = (props:FooterInterface)=>{
    return (
        <div className="footer">
            <div className="footerDivfirst">
                <CoverImages url={imageFile} class="footerIcon"/>
                <div className="footerHeading">Big ideas in small packages<br/> Start learning now</div>
            </div>
            <div className="footerDiv">
                <Typo text={"Editorial"} type={"h1"}/>
                <Typo text={"Book lists"} type="h2" />
                <Typo text={"What is Nonfiction?"} type="h2" />
                <Typo text={"What to read next?"} type="h2" />
                <Typo text={"Benefits of reading"} type="h2" />
            </div>
            <div className="footerDiv">
                <Typo text={"Useful links"} type={"h1"}/>
                <Typo text={"Pricing"} type="h2" />
                <Typo text={"Blinkist Business"} type="h2" />
                <Typo text={"Gift cards"} type="h2" />
                <Typo text={"Blinkist magaine"} type="h2" />
                <Typo text={"Contact & help"} type="h2" />
            </div>
            <div className="footerDiv">
                <Typo text={"Company"} type={"h1"}/>
                <Typo text={"About"} type="h2" />
                <Typo text={"Careers"} type="h2" />
                <Typo text={"Partners"} type="h2" />
                <Typo text={"Code of Conduct"} type="h2" />
            </div>
            <div className="footerCopyright">
            &copy; Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Polocies
            </div>
        </div>
    )
}