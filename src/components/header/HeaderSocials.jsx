import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import {RiDribbbleLine} from "react-icons/ri";


const HeaderSocials = () => {
  return (
   <div className="header__social">
    <a href="https://linkedin.com" target='_blank'><FaLinkedin/></a>
    <a href="https://github.com"><BsGithub/></a>
    <a href="https://dribble.com"><RiDribbbleLine/></a>
   </div>
  )
}

export default HeaderSocials