import './App.css';
import Carousel from './Components/Carousel';
import Heros from './Components/Heros';
import Navbar from './Components/Navbar';
import React, {useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";




function App() {

  const [allheros, setallheros] = useState([]);
  const [totalres, settotalres] = useState(0);
  const [t, sett] = useState(0)
  const [flag, setflag] = useState(0)

  const fatehFunction = async () => {
    sett(0);
    for (let i = 1; i < 5; i++) {
      let url = `https://www.superheroapi.com/api.php/618640229505587/${i+t}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      //  arr.push(parsedata)
      // setallheros(arr);
       setallheros(aaryan => [...aaryan, parsedata]);
        
       }
       let temp=totalres;
       settotalres(temp+4)
  };
  useEffect(() => {
    fatehFunction();
  }, []);

  useEffect(() => {
    
   console.log(allheros);
  }, [allheros])

  const fetchMoreData = async() => {
    if(flag===0){
    setTimeout( async() => {

    for (let i = 1; i < 5; i++) {
        let url = `https://www.superheroapi.com/api.php/618640229505587/${i+t+4}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      //  arr.push(parsedata)
      // setallheros(arr);
      
       setallheros(aaryan => [...aaryan, parsedata]);
       }
      }, 3000);
       sett(t+4);
       let temp=totalres;
       settotalres(temp+4)
    }
  };

  async function handlechange(e){
    let txt=e.target.value;
    sett(0);

      if(txt.length>=3){
        setTimeout(async() => {
          let url = `https://www.superheroapi.com/api.php/618640229505587/search/${txt}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      //  arr.push(parsedata)
      // setallheros(arr);
      setallheros([])
       setallheros(parsedata.results)
        }, 3500);
      
       setflag(1);
      }
       if(txt.length<=1){
         setflag(0);
        setallheros([])
setTimeout(async() => {
  for (let i = 1; i < 5; i++) {
    let url = `https://www.superheroapi.com/api.php/618640229505587/${i+t}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    //  arr.push(parsedata)
    // setallheros(arr);
     setallheros(aaryan => [...aaryan, parsedata]);
      
     }
     let temp=totalres;
     settotalres(temp+4)
}, 3500);
        
      }
  };

  return (
    <div>
      <Router>
      <Navbar hc={handlechange} />
      <h2 className='text-center'></h2>
      <Carousel/>
      <Switch>
      <Route path="/">
            <Heros data={allheros} fetch={fetchMoreData} ts={totalres}/>
          </Route>
         
          
      </Switch>
    </Router>
    </div>
  );
}

export default App;
