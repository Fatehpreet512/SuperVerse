import React, { useEffect, useState } from "react";
import Hero from "./Hero.js";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader.js';

const Heros = (props) => {
  
  
  
  
  return (
    <>
     
    <InfiniteScroll 
    dataLength={props.data.length}
    next={props.fetch}
    hasMore={props.data.length<=731}
    loader={<Loader/>}
    >
      
      <div className='color'>
    <div className="row">
      {(props.data).map((element) => {
        return (
          <div className="col md-4" key={element.id}>
            <Hero title={element.name} image={element.image.url} intelligence={element.powerstats.intelligence} power={element.powerstats.power} combat={element.powerstats.combat} aliases={element.biography.aliases} pub={element.biography.publisher} race={element.appearance.race} />
          </div>
        );
      })}
    </div>
    </div>
    </InfiniteScroll>
    </>
  );
};
export default Heros;