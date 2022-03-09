import { Icon } from '../../atoms/Icon/icons';
interface NavRequiredInterface{
    // class:string;
    text:string;
    iconLeft:boolean;
    iconRight:boolean;
    iconUrl:string;
    extendedNav :boolean;
}
interface DefaultNav{
    onClick?:Function;
}
interface NavItemInterface extends NavRequiredInterface,DefaultNav{}

const Nav = (props:NavItemInterface)=>{
    var cname = "nav ";
    if(props.extendedNav){
        cname+="extendedNav";
    }
    return (
        <>
        <div className={cname} onClick={(e)=>{if(props.onClick)props.onClick(e);}}>
            { props.iconLeft? <Icon icon={props.iconUrl}/>: null }
            {props.text}
            { props.iconRight? <Icon icon={props.iconUrl}/>: null }
        </div>
        </>
    )
}

Nav.defaultProps = { 
    onClick : ()=>{},
};
export default Nav;