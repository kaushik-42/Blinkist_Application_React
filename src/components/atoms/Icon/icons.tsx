import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowUpIcon from '@material-ui/icons//KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons//KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import SignalCellularAltOutlinedIcon from '@material-ui/icons/SignalCellularAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

interface IconInterface{
    icon:string;
}

export const Icon = (props:IconInterface)=>{
    if(props.icon === "arrow-up"){
        return (
            <KeyboardArrowUpIcon/>
        )
    }else if(props.icon === "arrow-down"){
        return (
            <KeyboardArrowDownIcon/>
        )
    }else if(props.icon === "arrow-forward"){
        return (
            <ArrowForwardIcon/>
        )
    }else if(props.icon === "search"){
        return (
            <SearchIcon/>
        )
    }else if(props.icon === "add"){
        return (
            <AddIcon/>
        )
    }else if(props.icon === "bell"){
        return(
            <NotificationsNoneOutlinedIcon/>
        )
    }else if(props.icon === "time"){
        return(
            <AccessTimeIcon/>
        )
    }else if(props.icon === "user"){
        return(
            <PersonOutlineIcon/>
        )
    }else if(props.icon === "menu"){
        return(
            <MoreHorizIcon/>
        )
    }else if(props.icon === "politics"){
        return <PublicOutlinedIcon/>
    }else if(props.icon === "sales"){
        return <InsertChartOutlinedIcon/>
    }else if(props.icon === "science"){
        return <RestoreOutlinedIcon/>
    }else if(props.icon === "health"){
        return <EmojiObjectsOutlinedIcon/>
    }else if(props.icon === "personal"){
        return <SignalCellularAltOutlinedIcon/>
    }else if(props.icon === "economics"){
        return <AccountBalanceOutlinedIcon/>
    }else if(props.icon === "history"){
        return <RestoreOutlinedIcon/>
    }else if(props.icon === "skills"){
        return <TrackChangesOutlinedIcon/>
    }else if(props.icon === "corporate"){
        return <WorkOutlineOutlinedIcon/>
    }else if(props.icon === "motivation"){
        return <TimelineOutlinedIcon/>
    }else if(props.icon === "money"){
        return <AccountBalanceWalletOutlinedIcon/>
    }else if(props.icon === "heart"){
        return <FavoriteBorderOutlinedIcon/>
    }else if(props.icon === "leaf"){
        return <ChatBubbleOutlineOutlinedIcon/>
    }else if(props.icon === "psychology"){
        return <TimelineOutlinedIcon/>
    }else if(props.icon === "education"){
        return <SchoolOutlinedIcon/>
    }
    return (
        <EditIcon/>
    )
}
