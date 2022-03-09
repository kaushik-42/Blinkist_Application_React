import { CoverImages } from "../../atoms/cover_images/coverImages"
import { Typo } from "../../atoms/Typo/typo";
import { Button } from "../../molecules/buttons/buttons";
import { BookCardInterface } from "../../molecules/cards/bookCards";
import Nav from "../../molecules/navItems/navItems";
import { Tab } from "../../molecules/tabs/tabs";

interface BookViewInterface{
    book:BookCardInterface;
    onReadNowButtonClick?:Function;
    onFinishedButtonClick?:Function;
}

export const BookView = (props:BookViewInterface)=>{
    console.log("I got "+props.book.title);
    return  <>
                <div >Get the key ideas from</div>
                <div className="heading">{props.book.title}</div>
                <Typo text={"By "+props.book.author} type="smallText"/>
                <div className="bookViewNav">
                    <Nav text={props.book.minutesRead+"-minute read"} iconLeft={true} iconRight={false} iconUrl={"time"} extendedNav={false}/>
                </div>
                <div className="bookViewButtonDiv">
                    <div className="bookViewButton">
                        <div className="bookViewReadButton">
                            <Button hasIcon={false} icon={""} text={"Read now"} onClick={props.onReadNowButtonClick?props.onReadNowButtonClick:()=>{}}/>
                        </div>
                        <Button hasIcon={false} icon={""} text={"Finished Reading"} onClick={props.onFinishedButtonClick?props.onFinishedButtonClick:()=>{}}/>
                        <div className="bookViewNav">
                            <Nav text={"Send to kindle"} iconLeft={false} iconRight={true} iconUrl={"arrow-forward"} extendedNav={false}/>
                        </div>
                    </div>
                </div>
                <Tab text={"Synopsis"} isSelected={true}/>
                <Tab text={"Who is it for?"} isSelected={false}/>
                <Tab text={"About the author"} isSelected={false}/>
                <div className="bookViewText">Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.</div>
                <div className="bookViewImage">
                    <CoverImages class={""} url={props.book.image} />
                </div>
            </>;
}