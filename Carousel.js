import React from 'react'
import capmjolnir from './capmjolnir.jpeg';
import spiderman from './spiderman.jpeg';
import superman from './superman.jpg';
import thor from './thor.jpeg';
import ironman from './ironman.jpeg';
import ba from './ba.jpeg';
import bp from './bp.jpeg';
import batman from './batman.jpg';
import thanos from './thanos.jpeg';
import am from './am.jpeg';
import shangchi from './shangchi.jpeg';
import venom from './venom.jpeg';
import joker from './joker.jpg';
import ww from './ww.jpg';
import hulk from './hulk.jpg';
import def from './def.jpg';
import bane  from './bane (1).jpg';
import hela from './hela.jpg';
import shazam from './shazam.jpg';
import rocketgroot from './rocketgroot.jpg';

export default function Carousel() {
    return (
        <div>
           <div id="carouselExampleInterval" className="bcolor container carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src={capmjolnir} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={spiderman} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={superman} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={thor} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={ironman} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={ba} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={bp} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={batman} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={thanos} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={am} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={venom} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={joker} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={shangchi} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={ww} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={bane} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={def} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={shazam} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={hela} className="container d-block w-50" alt="..."/>
    </div>
    <div className="carousel-item"data-bs-interval="5000">
      <img src={rocketgroot} className="container d-block w-50" alt="..."/>
    </div>
    
    <div className="carousel-item"data-bs-interval="5000">
      <img src={hulk} className="container d-block w-50" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
