export interface TabRequiredInterface{
    text:string;
    isSelected:boolean;
}
interface DefaultTab{
    onClick?:Function;
}
interface TabInterface extends TabRequiredInterface,DefaultTab{}


export const Tab = (props:TabInterface)=>{
    return (
        <div className= { "tabs" + (props.isSelected?" selectedTab":" ")} onClick={(e)=>{if(props.onClick)props.onClick(e);}}>
            {props.text}
        </div>
    )
}