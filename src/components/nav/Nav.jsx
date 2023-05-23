import React from 'react';
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { MdOutlineContactMail} from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarks/></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><TbMessage/></a>
      <a href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><AiOutlineFolderOpen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
    </nav>
  );
}

export default Nav;

