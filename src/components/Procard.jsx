import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Procard = (ping) => {


  useEffect(() =>{
    Aos.init({ });
  },[]);



  return (
    <div
     data-aos="fade-left" 
    data-aos-offset="350"
    data-aos-delay="4000"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
     className='card '>
      <img 
      
      data-aos="flip-up" 
    data-aos-offset="350"
    data-aos-delay="4000"
    data-aos-duration="2500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
      
      src={ping.img} alt="pro_img" className="card_img"/>
      <div className='card_body'>
        <h3 className='card_title'>{ping.title}</h3>
        <p className='card_using'>Using</p>
        
        <p className='card_skill'>{ping.skill}</p>
        <a href={ping.link} target="_blank" rel="noopener noreferrer">
        <button type='button' className='card_btn'>Visit Now</button>
        </a>
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