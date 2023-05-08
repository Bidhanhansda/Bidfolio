import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { AiFillGithub, } from 'react-icons/ai';


const Procard = (ping) => {


  useEffect(() =>{
    Aos.init({ });
  },[]);



  return (
    <div
     data-aos="fade-left" 
    data-aos-offset="100"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
     className='card  shad_m'>
      <img 
      
      data-aos="flip-up" 
    data-aos-offset="100"
    data-aos-delay="1000"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
      
      src={ping.img} alt="pro_img" className="card_img"/>
      <div className='card_body'>
        <h3 className='card_title'>{ping.title}</h3>
        
        
        {/* <p className='card_skill'>{ping.skill}</p> */}
        <div className='flex justify-start '>
        <a className=" text-center p-2 m-2 mt-2 items-center justify-center flex text-3xl card_btn" href={ping.gitlink} target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
        
        <a href={ping.link} target="_blank" rel="noopener noreferrer">
        <button type='button' className=' p-2 m-3  card_btn'>Visit Now</button>
        </a>
        </div>
        
      </div>
    </div>
  )
}

export default Procard;












// import React from 'react'

// const Procard = (ping) => {
//   return (
//     <div className='card'>
//       <img src={ping.img} alt="pro_img" className="card_img"/>
//       <div className='card_body'>
//         <h3 className='card_title'>{ping.title}</h3>
//         <p className='card_using'>Using</p>
        
//         <p className='card_skill'>{ping.skill}</p>
//         <button type='button' className='card_btn'>Visit Now</button>
//       </div>
//     </div>
//   )
// }

// export default Procard;



























// import React from 'react';
// import styles from '../style';

// const Procard = (ping,title) => {
//   return (
//     <div className='image__card flex flex-col justify-center items-center'>
//         <img 
//             src={ping.img} alt="pro_img"
//             className=' w-full h-full object-cover'
//         />
//         <p className=' text-white'>{ping.title}</p>
//     </div>
    
//   )
// }

// export default Procard;