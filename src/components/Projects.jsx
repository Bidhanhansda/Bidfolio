import React, { useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { pings } from '../constants';
import styles from '../style';
import Procard from './Procard';

const Projects = () => {

  const scrollRef = useRef();

  const scroll = (direction) => {

    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  }




  return (
    <section id="Projects" className={`${styles.paddingY}`}>
      <div className='flex flex-col sm:justify-center justify-center w-full mx-5'>
        <div className='flex flex-col justify-center items-center'>
          <h1 
          data-aos="zoom-in" 
    data-aos-offset="200"
    data-aos-delay="350"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
          className='flex font__heading flex-col justify-center items-center text-[#4eb19e] ss:text-[38px] hov__line-head cursor-pointer'>
            PROJECTS
          </h1>

          <div className=' ss:h-1 h-1 ss:w-[150px] w-[75px] bg-[#FFD100]'/>
          </div>
        
          <div className=' items-center justify-center sm:flex-col flex-row sm:py-[10px] py-[10px] '>
            <div className='sm:flex-col flex-row' ref={scrollRef}>

              {pings.map((ping) =>
                
                <Procard key={ping.id} {...ping} />
              )}
              

            </div>

            
          </div>

        
      </div>
    </section>
  )
}

export default Projects;






// const Projects = () => {

//   const scrollRef = useRef();

//   const scroll = (direction) => {

//     const { current } = scrollRef;

//     if (direction === "left") {
//       current.scrollLeft -= 400;
//     } else {
//       current.scrollLeft += 400;
//     }
//   }




//   return (
//     <section id="Projects" className={`${styles.paddingY}`}>
//       <div className='flex flex-col sm:justify-center justify-center w-full mx-5'>
//         <div className='flex flex-col justify-center items-center'>
//           <h1 
//           data-aos="zoom-in" 
//     data-aos-offset="350"
//     data-aos-delay="350"
//     data-aos-duration="1500"
//     data-aos-easing="ease-in-out"
//     data-aos-mirror="false"
//     data-aos-once="false"
//     data-aos-anchor-placement="top-bottom"
//           className='flex font-poppins flex-col justify-center items-center text-[#4eb19e] ss:text-[38px] hov__line-head cursor-pointer'>
//             PROJECTS
//           </h1>

//           <div className=' ss:h-1 h-1 ss:w-[150px] w-[75px] bg-[#FFD100]'/>
//           </div>
        
//           <div className='image__gallery sm:py-[10px] py-[10px] '>
//             <div className='image__container' ref={scrollRef}>

//               {pings.map((ping) =>
                
//                 <Procard key={ping.id} {...ping} />
//               )}
              

//             </div>

//             <div className='w-full flex justify-between items-center py-4 absolute mt-[2%]'>
//               <BsArrowLeftShort className='img__arrow-icon' onClick={() => scroll("left")} />
//               <BsArrowRightShort className='img__arrow-icon' onClick={() => scroll("Right")} />

//             </div>
//           </div>

        
//       </div>
//     </section>
//   )
// }

// export default Projects;