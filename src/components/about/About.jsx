import React from 'react';
import './about.css';
import Egator11 from "../../asset/egator11.png";
import {FaAward} from "react-icons/fa";
import {AiOutlineUsergroupAdd} from "react-icons/ai";
import {RiProjector2Line} from "react-icons/ri";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Egator11} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about-icon'/>
            <h5>Experience</h5>
            <small>3+ years working</small>
            </article>

            <article className='about__card'>
              <AiOutlineUsergroupAdd className='about-icon'/>
            <h5>Clients</h5>
            <small>300+ worldwide</small>
            </article>

            <article className='about__card'>
              <RiProjector2Line className='about-icon'/>
            <h5>Projects</h5>
            <small>80+ completed</small>
            </article>

          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore illum nihil numquam corrupti ab distinctio magnam dolore asperiores harum quibusdam!</p>
          <a href="#contact" className='btn btn-t'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About