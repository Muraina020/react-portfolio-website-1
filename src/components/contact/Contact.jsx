import React from 'react';
import "./contact.css";
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_39s96jz', 'template_ms4el4p', form.current, 'YSaUR--0l0WFRBYXf')
    e.target.reset()
      
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

     <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
          <h4 >Email</h4>
          <h5>murainaboluwatife@gmail.com</h5>
          <a href="mailto:murainaboluwatife@gmail.com" target='_blank'>Send a Message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Akande Imran</h5>
          <a href="https://m.me/akande.imran.7" target='_blank'>Send a Message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>murainaboluwatife@gmail.com</h5>
          <a href="https://api.whatsapp.com/send?phone+2347061048347" target='_blank'>Send a Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
       <input type="text" name='name' placeholder='Your full name' required />
       <input type="email" name='email' placeholder='Your Email' required />
       <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
       <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
     </div>
    </section>
  )
}
export default Contact