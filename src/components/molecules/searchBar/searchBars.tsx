import { Icon } from "../../atoms/Icon/icons"

interface SearchBarInterface{
    icon:string;
    placeHolder:string;
}

export const SearchBar = (props:SearchBarInterface)=>{
    return (
        <div className="search-bar">
            <Icon icon={props.icon}/>
            <input placeholder={props.placeHolder}/>
        </div>
    )
}