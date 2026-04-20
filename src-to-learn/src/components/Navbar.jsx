// import React from 'react'
// import { Link, animateScroll as scroll } from 'react-scroll';


// function Navbar() {
//   return (
    
//     <nav className="navbar navbar-expand-lg bg-light  " style={{fontSize:"80%"}} >
//   <div className="container-fluid">
//     <a className="navbar-brand " href="/" style={{color:"grey"}}>Open to Collaborate <i className="fa-solid fa-handshake-angle fa-bounce"></i>, Ready to Elevate! <i className="fa-solid fa-meteor fa-bounce"></i></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse mx-5" id="navbarNav">
//       <ul className="navbar-nav  me-auto mb-2 mb-lg-0 nav nav-tabs">
        
        
        
        
//       </ul>
//       <form >
//       <div className=''>
//         <Link to="about" offset={100}><button className='btn btn-lg btn-outline-secondary'>About <i className="fa-regular fa-address-card"></i></button></Link>
//         <Link to="skill" offset={100}><button className='btn btn-lg btn-outline-secondary mx-2'>Skills <i className="fa-solid fa-graduation-cap"></i></button></Link>
//         <Link to="project" offset={100}><button className='btn btn-lg btn-outline-secondary mx-2'>Live Projects <i className="fa-solid fa-award"></i></button></Link>
//       </div></form>
//     </div>
//   </div>
// </nav>
//   )
// }

// export default Navbar

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light " style={{ fontSize: "80%" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-wrap" href="/" style={{ color: "grey" }}>
          Open to Collaborate <i className="fa-solid fa-handshake-angle fa-bounce"></i>, Ready to Elevate!{' '}
          <i className="fa-solid fa-meteor fa-bounce"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarNav">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0 nav nav-tabs"></ul>
          <form>
            <div className="">
              <Link to="about" offset={100}>
                <button className="btn btn-lg btn-outline-secondary">About{' '}
                <i className="fa-regular fa-address-card"></i>
                </button>
              </Link>
              <Link to="skill" offset={100}>
                <button className="btn btn-lg btn-outline-secondary mx-2">Skills{' '}
                <i className="fa-solid fa-graduation-cap"></i>
                </button>
              </Link>
              <Link to="project" offset={100}>
                <button className="btn btn-lg btn-outline-secondary mx-2">Live Projects{' '}
                <i className="fa-solid fa-award"></i>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
