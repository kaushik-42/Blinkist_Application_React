import { Avatar } from "../../atoms/avatar/avatar";
import { CoverImages } from "./../../atoms/cover_images/coverImages"
import { Icon } from "../../atoms/Icon/icons";
import  Nav from "../../molecules/navItems/navItems";
import { ToolBar } from "../toolBar/toolbar";
import imageFile from "./../../../stories/assets/logo.png"
import {useAuth0} from '@auth0/auth0-react';
import { useState } from "react";

interface HeaderInterface{
    loggedIn:boolean;
    onClickExploreTab?:Function;
    onExploreClick?:Function;
    isExplore?:boolean;
    onMyLibClick?:Function;
}
const LoginButton  = ()=>{
    const {loginWithRedirect} = useAuth0();
    return <button className="button logButton" onClick={() => { console.log("Log in"); loginWithRedirect(); } }>Log In</button>
  }
function LogoutButton() {
    const {logout} = useAuth0();
    return (
    <button className="button logButton" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
    </button>
    );
}

export const Header = (props:HeaderInterface)=>{
    var [isAccountClicked,setClick] = useState(false);
    return (
        <>
        <div className="header">
            <div className="insideHeader">
                <div className="tabsHeader">
                    <CoverImages url={imageFile} class="headerImage"/>
                    <Icon icon={"search"} />
                    <Nav text={"Explore"} iconLeft={false} iconRight={true} iconUrl={props.isExplore? "arrow-up" : "arrow-down"} extendedNav={false} onClick={()=>{if(props.onExploreClick) props.onExploreClick()}}/>
                    <Nav text={"My Library"} iconLeft={false} iconRight={false} iconUrl={"arrow-down"} extendedNav={false} onClick={()=>{if(props.onMyLibClick)props.onMyLibClick()}}/>
                </div>
                <div className="account">
                    {!props.loggedIn ? 
                    
                    <>
                    <Nav text={"Account"} iconLeft={false} iconRight={true} iconUrl={isAccountClicked? "arrow-up" : "arrow-down"} extendedNav={false}  onClick={()=>{setClick(!isAccountClicked);}}/>
                    {isAccountClicked?
                        <>
                        {props.loggedIn?
                            <LogoutButton/>:<LoginButton/>
                        }
                    </>
                    :null
                    }
                    </>
                    :
                    <>
                    <div onClick={()=>{setClick(!isAccountClicked);}}>
                        <Avatar text="Blesan"/>
                        <Icon icon={isAccountClicked? "arrow-up" : "arrow-down"}/>
                    </div>
                    
                    {isAccountClicked?
                        <>
                            {props.loggedIn?
                                <LogoutButton/>:<LoginButton/>
                            }
                        </>
                        :null
                    }
                    </>
                    }
                </div>
            </div>
        </div>
        {props.isExplore ?
        <>
        <ToolBar onClick={props.onClickExploreTab!=null? props.onClickExploreTab : ()=>{}} />
        <div className="dimFill"></div>
        </>
        :
        null}
        </>
    );
}
