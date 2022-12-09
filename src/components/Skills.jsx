import React ,{useEffect} from 'react';
import { images } from "../constants";
import styles from "../style";
import Logo from "./Logo";
import Aos from 'aos';
import "aos/dist/aos.css";

const Skills = () => {

  useEffect(() =>{
    Aos.init({ });
  },[]);


  return (
    <section id="Skills" className={`${styles.paddingY}`}>
      <div className="flex flex-col justify-center items-center">
        <h1 data-aos="fade-left" 
    data-aos-offset="300"
    data-aos-delay="150"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
        
        className='flex font__heading flex-col justify-center items-center text-[#4eb19e] ss:text-[38px] cursor-pointer hov__line-head'>
          SKILLS
        </h1>
        <div className=' ss:h-1 h-1 ss:w-[150px] w-[75px] bg-[#FFD100]'/>
      </div>


      <div className='flex flex-wrap sm:justify-center justify-center w-full  '>
      {images.map((image) => 
        <Logo   key={image.id} {...image}  />
        
      )}
      
      
      </div>

      

    </section>
  )
}

export default Skills;