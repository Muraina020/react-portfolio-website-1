import React from 'react';
import './testimonials.css';
import AVTR1 from "../../asset/AVTR1.jpg"
import AVTR2 from "../../asset/AVTR2.jpg"
import AVTR3 from "../../asset/AVTR3.jpg"
import AVTR4 from "../../asset/AVTR4.jpg"

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
avatar: AVTR1,
name: 'Hajia Bintu',
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo odit accusamus est, nisi architecto voluptatum placeat?',
},
 {
avatar: AVTR2,
name: 'Hajia Meenah',
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo odit accusamus est, nisi architecto voluptatum placeat?',
},  
{
avatar: AVTR3,
name: 'Uncle Hakeem',
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo odit accusamus est, nisi architecto voluptatum placeat?',
}, 
 {
avatar: AVTR4,
name: 'Akande Imran',
review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo odit accusamus est, nisi architecto voluptatum placeat?',
},
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
        <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
        >
       {
        data.map(({avatar, name, review}, index) => (
          <SwiperSlide key={index} className="testimonials">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h3 className='avatar__name'>{name}</h3>
          <small className='avatar__review'>{review}</small>
        </SwiperSlide>
        ) )
       }
     
      </Swiper>
    </section>
  )
}

export default Testimonials