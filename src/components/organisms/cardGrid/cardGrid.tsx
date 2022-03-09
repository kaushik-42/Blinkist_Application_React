import { Grid } from "@material-ui/core";
import { BookCard, BookCardInterface } from "../../molecules/cards/bookCards";

interface CardGridInterface{
    cards:BookCardInterface[];
    onAddButtonClick?:Function;
    onReadAgainClick?:Function;
}

const cardGrid=(props:CardGridInterface)=>{
    let items;
    items=props.cards.map((value:BookCardInterface)=>{ 

        return (
            <Grid item xs={4} key={value.id}>
                <BookCard title={value.title} 
                            author={value.author} 
                            minutesRead={value.minutesRead + "-minute read"} 
                            totalReads={value.totalReads} 
                            isReading={value.isReading} 
                            finished={value.finished} 
                            readAgain={value.readAgain} 
                            image={value.image}
                            id = {value.id}
                            onAddButtonClick={()=>{if(props.onAddButtonClick)props.onAddButtonClick(value.id)}}
                            onReadAgainClick={()=>{if(props.onReadAgainClick)props.onReadAgainClick(value.id)}}/>
            </Grid> );
    })
    return (
        <Grid container spacing={2}>
            {items}
        </Grid>
    )
}

export default cardGrid;