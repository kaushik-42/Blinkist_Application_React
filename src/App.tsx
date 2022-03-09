//import {CoverImages} from './atoms/cover_images/coverImages';
//import { BookCardInterface } from './components/molecules/cards/bookCards';
//import {BookCard} from './molecules/cards/BookCards';
import { useState } from 'react';
import './App.css';
import { Header } from './components/organisms/header/header';
import { Footer } from './components/organisms/footer/footer';
import { Typo } from './components/atoms/Typo/typo';
import { Tab } from './components/molecules/tabs/tabs';
import CardGrid from './components/organisms/cardGrid/cardGrid';
import { BookCardInterface } from './components/molecules/cards/bookCards';
import Banner from './components/organisms/banner/banner';
import { SearchBar } from './components/molecules/searchBar/searchBars';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import i2 from './stories/assets/i2.png'
import i3 from './stories/assets/i3.png'
import i4 from './stories/assets/i4.png'
import i5 from './stories/assets/i5.png'
import i6 from './stories/assets/i6.png'
import i7 from './stories/assets/i7.png'
import i8 from './stories/assets/i8.png'
import i9 from './stories/assets/i9.png'
import i0 from './stories/assets/i0.png'
import i1 from './stories/assets/i1.png'
import { BookView } from './components/organisms/bookView/bookView';
import {useAuth0} from '@auth0/auth0-react';


function App() {

  var {isAuthenticated} = useAuth0(); 

  var dummyData = {
              title :"Book Dummy", 
              author : "No one",
              minutesRead: "0", 
              totalReads : "0 reads",
              finished : false,
              image:i2,
              isReading:true,
              readAgain:false,
              id:"2",
          }
  var stringToUrl:{[key:string]:string} = {"i2":i2,"i3":i3,"i4":i4,"i5":i5,"i6":i6,"i7":i7,"i8":i8,"i9":i9,"i0":i0,"i1":i1};
  var datas:BookCardInterface[] = [dummyData];
  var [data,setData] = useState(datas);
  var [FinishedTab,setFinished] = useState(false);
  var [EntTab,setEntTab] = useState(false);
  var [isExplore,setExplore] = useState(false);
  var [bookView,setBookView] = useState(false);
  var [currentBook,setCurrentBook] = useState(dummyData);
  var [currentBookId,setCurrentBookId] = useState("2");
  var [updateData,setUpdateData] = useState(false);
  var initalFetch = true;
  //if(isAuthenticated && data.length === 1 && initalFetch){
  if(data.length === 1 && initalFetch){
    console.log("INITIAL FETCH");
    fetch("http://localhost:3000/data/").then(res => res.json()).then(result => {
      result = result['array'];
      var dat = result.map((value: { [x: string]: any; })=>{
        value['image'] = value['image'].slice(14,16);
        console.log(value['image']);
        value["image"] = stringToUrl[(value["image"])];return value;
      })
      setData(dat);console.log("INITIAL",dat);
      initalFetch=false;
    });
  }
  var Cards = <div className='gridSpacing'>
    {console.log("CARDS ",data)}
                <CardGrid cards={data.filter((value)=>{
                  if(EntTab){
                    value.readAgain = false;
                    return true;
                  }
                  value.readAgain = true;
                  if(FinishedTab){return value.finished;}
                  return value.isReading;
                })}
                onAddButtonClick={(id: string)=>{
                  console.log("Clicked "+id);
                  setData(data.map((value,index)=>{
                    if(value.id === id){
                      value.isReading = true;
                      setCurrentBook(data[index]);
                      setCurrentBookId(id);
                      console.log("Got Current book "+currentBookId);
                    }
                    return value;
                  }));
                  setUpdateData(!updateData);
                  setBookView(true);
                  console.log("Setted BookView "+bookView)
                }}
                onReadAgainClick={(id: string)=>{
                  if(EntTab) return;
                  console.log("onReadAgain Clicked "+id);
                  setData(data.map((value)=>{
                    if(value.id === id){
                      value.finished = !value.finished;
                      value.isReading = !value.isReading;
                    }
                    return value;
                  }));
                  setUpdateData(!updateData);
                }}
                />
              </div>
  const onReadNowButtonClick = ()=>{
    setBookView(false);setFinished(false);setEntTab(false);
    setUpdateData(!updateData);
    setData(data.map((value)=>{
      if(value.id === currentBookId){
        value.isReading = true;
      }
      return value;
    }))}
  const onFinishedButtonClick = ()=>{
    setUpdateData(!updateData);
    setBookView(false);setFinished(true);setEntTab(false);
    setData(data.map((value)=>{
      if(value.id === currentBookId){
        value.finished = true;
        value.isReading = false;
      }
      return value;
    }))}
    //if( isAuthenticated && (!updateData || updateData)){
    /*
    if(!updateData || updateData){
      //console.log("NOWWWWWWWWWWWWWWWWWWWWWWw")
      //console.log("UPDATING");
      let putData = '{"id":0,"array":'.concat(JSON.stringify(data)).concat("}");
      console.log("PUTDATA",putData)
      fetch("http://localhost:3000/data", {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: putData
      })
      .then(res => {res.json()});
    
      console.log("Changed")
    }
    */
  return (
    <ThemeProvider theme={theme}>
    <>
    <Header loggedIn={isAuthenticated} isExplore={isExplore}
        onClickExploreTab={()=>{setEntTab(true);setExplore(!isExplore);setBookView(false);setFinished(false)}} 
        onExploreClick={()=>{setExplore(!isExplore);}}
        onMyLibClick={()=>{setEntTab(false);setBookView(false)}}/>
    <div className='body'>
      {bookView?
        <>
        <BookView book={currentBook} onReadNowButtonClick={onReadNowButtonClick} onFinishedButtonClick={onFinishedButtonClick}/>
        </>
        :EntTab?
        <>
          <div className='bannerContainer'>
            <Banner/>
          </div>
          <SearchBar icon={'search'} placeHolder={'Search by title or author '} />
          <div className='h1 title'>Trending blinks</div>
          {Cards}
        </>
        :
        <>
          <Typo text={'My Library'} type={'heading'} />
          <div className='tabBox'>
            <Tab text={'Currently Reading'} isSelected={!FinishedTab} onClick={()=>setFinished(false)}/>
            <Tab text='Finished' isSelected={FinishedTab} onClick={()=>setFinished(true)}/>
          </div>
          {Cards}
        </>
      }
    </div>

    <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;