import React from 'react';
import CTA from './CTA';
import Egator10 from "../../asset/egator10.png";
import "./header.css";
import HeaderSocial from "./HeaderSocials";


function header() {
  return (
   <>
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h2>Hajia Meenah</h2>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <HeaderSocial/>
      
      <div className="me">
        <img src={Egator10} alt="egator" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
   </>
  )
}

export default header