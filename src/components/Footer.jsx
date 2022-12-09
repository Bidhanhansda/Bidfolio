import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from '../style';



const Footer = () => {
  return (
    <section className={`${styles.paddingY}`}>
    <div className='flex justify-between items-start sm:flex-row flex-col cursor-pointer'>
        <div className='flex flex-col'>
            <p className='leading-[30.8px] font-normal text-[#2F717F] tracking-wider font__heading hov__line'>CALL</p>
            <p className='leading-[30.8px] font-normal text-[#2F4858] tracking-wider font__test py-4'>+917003950299</p>
        </div>
        <div className='flex flex-col '>
            <p className='leading-[30.8px] font-normal text-[#2F717F]  tracking-wider font__heading hov__line' >EMAIL</p>
            <p className='leading-[30.8px] font-normal text-[#2F4858] tracking-wider font__heading py-4 '>bidhanhansda1997@gmail.com</p>
        </div>
        <div className='flex flex-col  '>
            <p className='leading-[30.8px] font-normal text-[#2F717F]  tracking-wider font__heading hov__line'>SOCIAL</p>
            <div className='flex py-4'>
            <a href='https://github.com/Bidhanhansda' target="_blank" rel="noopener noreferrer"><AiFillGithub className=' bg-[#2F717F] text-[2.5rem] rounded-lg'/></a>
            <div className='w-[10px]'/>
            <a href='https://www.linkedin.com/in/bidhanhansda/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin className=' bg-[#2F717F]  text-[2.5rem] rounded-lg'/></a>
            </div>
        </div>

    </div>
    </section>
  )
}

export default Footer;

