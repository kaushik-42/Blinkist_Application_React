import { CoverImages } from "../../atoms/cover_images/coverImages"
import { Icon } from "../../atoms/Icon/icons";
import { Typo } from "../../atoms/Typo/typo";
import { Button } from "../buttons/buttons";
import Nav from "../navItems/navItems";

export interface BookCardInterface{
    title:string;
    author:string;
    minutesRead:string;
    totalReads:string;
    isReading:boolean;
    finished:boolean;
    readAgain:boolean;
    image:string;
    id:string;
}
interface FinalBookCardInterface extends BookCardInterface{
    onAddButtonClick?:Function;
    onReadAgainClick?:Function;
}
export const BookCard = (props:FinalBookCardInterface)=>{
    let bottomText = "Finished";
    let progressBar = "readingHighlight";
    if(props.finished && props.readAgain){
        bottomText = "Read Again";
        progressBar += " full";
    }else if(props.isReading && props.readAgain){
        bottomText = "Finish Reading";
    }
    return(
        <div className="bookCard" key={props.id}>
            <CoverImages class={""} url={props.image} />
            <Typo text={props.title} type="h1"/>
            <Typo text={props.author} type="h2"/>
            <div className="bookCardNav">
            <Nav text={props.minutesRead} iconLeft={true} iconRight={false} iconUrl={"time"} extendedNav={false}/>
            <Nav text={props.totalReads} iconLeft={true} iconRight={false} iconUrl={"user"} extendedNav={false}/>
            </div>
            <br/>
            {(props.isReading)? 
                (props.readAgain)?
                    <>
                    <div onClick={()=>{if(props.onReadAgainClick)props.onReadAgainClick()}}>
                    <Typo text={bottomText} type="blueText" />
                    </div>
                    <div className="reading" >
                        <div className={progressBar}></div>
                    </div>
                    </>
                    :
                <>
                <div style={{ display:"flex",width:"95%", justifyContent:"flex-end", marginBottom:"5px"}}>
                    <Icon icon="menu" />
                </div>
                <div className="reading">
                    <div className="readingHighlight"></div>
                </div>
                </>
                :
                <>
                {props.finished ?
                    <>
                    <div onClick={()=>{if(props.onReadAgainClick)props.onReadAgainClick()}}>
                    <Typo text={bottomText} type="blueText" />
                    </div>
                    <div className="reading" >
                        <div className={progressBar}></div>
                    </div>
                    </>
                    :
                    <Button hasIcon={true} icon={"add"} text={"Add to library"} onClick={()=>{if(props.onAddButtonClick)props.onAddButtonClick()}}/>
                }
                </>
            }
        </div>
    )
}