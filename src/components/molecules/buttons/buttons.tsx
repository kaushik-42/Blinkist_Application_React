import { Icon } from '../../atoms/Icon/icons';

interface ButtonInterface{
    hasIcon:boolean;
    icon:string;
    text:string;
    onClick?:Function;
}

export const Button = (props:ButtonInterface)=>{
    var className = "button ";
    if(props.hasIcon)className+="addButton";
    return (
        <div className={className} onClick={()=>{if(props.onClick)props.onClick()}}>
            {props.hasIcon? <Icon icon="add"/>: null}
            {props.text}
        </div>
    )
}
