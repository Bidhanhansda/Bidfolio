import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import styles from '../style';

const Myself = () => {



  useEffect(() =>{
    Aos.init({ });
  },[]);


  return (
    <section id="Myself" className={`${styles.paddingY} flex  }`}>
      <div data-aos="zoom-in-up" 
    data-aos-offset="250"
    data-aos-delay="100"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
  
      
      className=' w-full h-full flex flex-col justify-center items-center  rounded-3xl shad_m  '>
          <h2 className=' text-[#4eb19e] font__heading flex items-center justify-center ss:text-[38px] cursor-pointer hov__line-head'>Myself</h2>
          <div className=' ss:h-1 h-1 ss:w-[150px] w-[75px] bg-[#FFD100]'/>
          
          <p className=' text-black font__test  text-[18px] leading-[30.8px] font-poppins flex items-center justify-start sm:mx-12 mx-4  sm:text-[26px]   my-16'>
          Hey, my name is Bidhan Chandra Hansda. I'm a  front-end web developer from India. I'm also passionate about pop music, Competetive Coding, Competetive Gaming and universes around what I listen to and I,m always curious to learn more when it comes to new technologies and creative coding.
          </p>
          
      </div>
    </section>
  )
}

export default Myself;





































// import React from 'react';
// import styles from '../style';

// const Myself = () => {
//   return (
//     <section id="Myself" className={`${styles.paddingY} flex }`}>
//       <div className=' w-full h-full flex flex-col justify-center items-center  rounded-3xl shad_m  '>
//           <h2 className=' text-white font-poppins flex items-center justify-center ss:text-[38px] cursor-pointer hov__line-head'>Myself</h2>
//           <div className=' ss:h-1 h-1 ss:w-[150px] w-[75px] bg-orange-700'/>
          
//           <p className='text-white font-normal text-dimWhite text-[18px] leading-[30.8px] font-poppins flex items-center justify-start sm:mx-12 mx-4  sm:text-[26px]   my-16'>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
//           </p>
          
//       </div>
//     </section>
//   )
// }

// export default Myself;