import React from 'react'
import "./experience.css";
import {BsFillPatchCheckFill} from 'react-icons/bs'

function experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTMl</h4>
              <small className='color-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='color-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='color-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='color-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='color-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='color-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

       {/* end of experience frontend */}

        <div className="experiene__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node.js</h4>
              <small className='color-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='color-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='color-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MYSQL</h4>
              <small className='color-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='color-light'>Experienced</small>
              </div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience