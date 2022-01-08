import React from 'react'

export default function Navbar(props) {
   


    return (
        <div>
            <nav className="bgcolor color navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="container navbar-brand" href="\">SuperVerse</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.hc} />

      </form>
    </div>
  </div>
</nav>
        </div>
    )
}
