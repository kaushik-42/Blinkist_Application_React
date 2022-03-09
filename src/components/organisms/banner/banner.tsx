import { CoverImages } from "./../../atoms/cover_images/coverImages"
// import { CoverImage } from "../../atoms/CoverImage/coverImage"
// CoverImages
import ImageFile from "./../../../stories/assets/undraw_Reading_re_29f8 1.png"


const Banner = ()=>{
    return (
        <div className="banner">
            <div className="leftBan">
                Explore Books on <br></br>entreprenueship
                <div className="smallText">
                Everything you need to know about thriving on a<br></br>shoestring budget, making your first million, and hiring<br></br> right from the start.
                </div>
            </div>
            <div className="rightBan">
                <CoverImages url={ImageFile} class={"banner-Image"}/>
            </div>
        </div>
    )
}

export default Banner;