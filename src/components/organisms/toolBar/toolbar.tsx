import  Nav  from "../../molecules/navItems/navItems"

interface ToolBarInterface{
    onClick:Function;
}

export const ToolBar = (props:ToolBarInterface)=>{
    return (
        <div className="toolBar">
        <div className="toolBarTopNavsDiv">
            <div className="toolBarTopNav">
                <Nav text={"Explore by category"} iconLeft={false} iconRight={false} iconUrl={""} extendedNav={true}/>
                <Nav text={"See recently added titles"} iconLeft={false} iconRight={false} iconUrl={""} extendedNav={true} />
                <Nav text={"See popular titles"} iconLeft={false} iconRight={false} iconUrl={""} extendedNav={true} />
            </div>
        </div>
        <div className="toolBarTopNavsDiv fullheight">
            <div className="toolBarBottomNavsDiv">
                <div className="toolBarBottomNav">
                <Nav text={"Entrepreneurship"} iconLeft={true} iconRight={false} iconUrl={"bell"} extendedNav={true}  onClick={()=>{props.onClick()}}/>
                <Nav text={"Poilitics"} iconLeft={true} iconRight={false} iconUrl={"politics"} extendedNav={true} />
                <Nav text={"Marketing & Sales"} iconLeft={true} iconRight={false} iconUrl={"sales"} extendedNav={true} />
                </div>
            </div>
            <div className="toolBarBottomNavsDiv">
                <div className="toolBarBottomNav">
                <Nav text={"Science"} iconLeft={true} iconRight={false} iconUrl={"science"} extendedNav={true} />
                <Nav text={"Health & Nutrition"} iconLeft={true} iconRight={false} iconUrl={"health"} extendedNav={true} />
                <Nav text={"Personal Development"} iconLeft={true} iconRight={false} iconUrl={"personal"} extendedNav={true} />
                </div>
            </div><div className="toolBarBottomNavsDiv">
                <div className="toolBarBottomNav">
                <Nav text={"Economics"} iconLeft={true} iconRight={false} iconUrl={"economics"} extendedNav={true} />
                <Nav text={"History"} iconLeft={true} iconRight={false} iconUrl={"history"} extendedNav={true} />
                <Nav text={"Communication Skills"} iconLeft={true} iconRight={false} iconUrl={"skills"} extendedNav={true} />
                </div>
            </div><div className="toolBarBottomNavsDiv">
                <div className="toolBarBottomNav">
                <Nav text={"Coporate Culture"} iconLeft={true} iconRight={false} iconUrl={"corporate"} extendedNav={true} />
                <Nav text={"Motivation & Inspiration"} iconLeft={true} iconRight={false} iconUrl={"motivation"} extendedNav={true} />
                <Nav text={"Money & Investments"} iconLeft={true} iconRight={false} iconUrl={"money"} extendedNav={true} />
                </div>
            </div><div className="toolBarBottomNavsDiv">
                <div className="toolBarBottomNav">
                <Nav text={"Psychology"} iconLeft={true} iconRight={false} iconUrl={"psychology"} extendedNav={true} />
                <Nav text={"Productivity"} iconLeft={true} iconRight={false} iconUrl={"product"} extendedNav={true} />
                <Nav text={"Sex & Relationship"} iconLeft={true} iconRight={false} iconUrl={"heart"} extendedNav={true} />
                </div>
            </div><div className="toolBarBottomNavsDiv">
                <div className="toolBarBottomNav">
                <Nav text={"Nature & Environment"} iconLeft={true} iconRight={false} iconUrl={"leaf"} extendedNav={true} />
                <Nav text={"Care & Success"} iconLeft={true} iconRight={false} iconUrl={"health"} extendedNav={true} />
                <Nav text={"Education"} iconLeft={true} iconRight={false} iconUrl={"education"} extendedNav={true} />
                </div>
            </div>
        </div>
        </div>
    )
}