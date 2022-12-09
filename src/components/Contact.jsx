import React, { useRef } from "react";
import styles from '../style';
// import Contactform from './Contactform';

import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kgky9yl",
        "template_196ajtm",
        form.current,
        "FvgQ74FjtCF1zJ2HW"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };








  return (
    <section id="Contact" className={`${styles.paddingY}`}>
      <div className="flex flex-col justify-center items-center">
        <h2 className='flex font__heading flex-col justify-center items-center text-[#4eb19e] ss:text-[38px] hov__line-head cursor-pointer'>CONTACT</h2>
        <div className=' ss:h-1 h-1 ss:w-[150px] w-[75px] bg-[#FFD100]'/>
        <p className=' text-black font-normal  text-[18px] leading-[30.8px] font__test flex items-center justify-start sm:mx-12 mx-4  sm:text-[26px]   my-8'>Get in touch</p>
      </div>

      <div className='flex justify-center items-center  flex-col'>
        <div className='flex sm:flex-row flex-col items-center justify-center w-full'>
        <p className='  font-normal text-black text-[18px] leading-[30.8px] font__test flex items-center justify-start sm:mx-12 mx-4  sm:text-[26px] tracking-wider  my-8'>
          OHHHH !!!   You have come this far '(❁´◡`❁)'.<br/>  
          I'd love if you reached out to me. Even if it's just to say "Hey!!!". Don't hesitate Drop me a line and I'll get back to you ASAP! 
        </p>

        </div>

        <div className=' w-[full] flex flex-col items-center justify-center '>
          <h2 className=' text-[#4eb19e] font-normal  text-[18px] leading-[30.8px] font-poppins flex items-center justify-start sm:mx-12 mx-4  sm:text-[26px] tracking-wider  my-8'>Write me a Message 👇😎</h2>
          
          {/* <Contactform   /> */}
          <StyledContactForm className="ss:px-12 px-10">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
          
        </div>
        
      </div>
    </section>
  )
}

export default Contact;



const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    paddingX:16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid #4eb19e;
      &:focus {
        border: 3px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid #4eb19e;
      &:focus {
        border: 3px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      color: #E2517E;
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #4eb19e;
      color: white;
      border: none;
    }
  }
`;
