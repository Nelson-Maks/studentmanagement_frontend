import contactimg from '../images/contact.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast'

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    'service_t6a28t2', 
    'template_cyevee7', 
    form.current, 
    '-ubatdmraD2TRLy2n')

      .then((result) => {
          console.log(result.text);
          if(result){
            toast.success('Message sent successfully')
          }
      }, (error) => {
          console.log(error.text);
          toast.error('Message not sent')
      });
  };

  return (
    <section id='contact_us'>
      <div className='left'>
        <img src={contactimg} width='80px'/>
        <h3>"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do." <span>— Pele, Late Brazilian footbal player</span></h3>
      </div>

      <div className='right'>
        <h3>CONTACT <span>HERE</span></h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className='conInput_group'>
            <label>Name</label>
            <input type="text" name="user_name" className='username'/>
          </div>

          <div className='conInput_group'>
            <label>Email</label>
            <input type="email" name="user_email" className='email'/>
          </div>

          <div className='conInput_group'>
            <label>Message</label>
            <textarea name="message" className='message'/>
          </div>  
          <input type="submit" value="Send" className='msgBtn'/>
        </form>
      </div>
    </section>
  )
}
