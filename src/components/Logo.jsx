import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import styles from '../style';

const Logo = ({img,title}) => {

  useEffect(() =>{
    Aos.init({ });
  },[]);

  return (
    <div data-aos="zoom-out-right" 
    data-aos-offset="300"
    data-aos-delay="200"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
     className={`flex flex-col justify-between px-6 py-8 rounded-[20px] max-w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card transform hover:scale-125 shad`}>
        <img 
        src={img} alt="skill_img"
        className='w-[48px] h-[48px] object-contain '
        />
        <p className='text-black flex items-center justify-center mt-4 font__test font-semibold'>{title}</p>
    </div>
  )
}

export default Logo