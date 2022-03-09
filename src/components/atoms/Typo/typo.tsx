import react from "react"

interface TypoInterface{
    text:string;
    type:string;
}


export const Typo = (props:TypoInterface)=>{
    return (
        <div className={props.type}>
            {props.text}
        </div>
    );
}