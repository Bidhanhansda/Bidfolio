import React, { useRef } from 'react';
import { pings } from '../constants';
import styles from '../style';
import Procard from './Procard';

import { Navigation, Pagination, Scrollbar, A11y,EffectCreative } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-creative";

const Projects = () => {






  return (
    <section id="Projects" className={`${styles.paddingY}`}>
      <div className='flex flex-col sm:justify-center justify-center w-full mr-5'>
        <div className='flex flex-col justify-center items-center'>
          <h1
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
            className='flex font__heading flex-col justify-center items-center text-[#4eb19e] ss:text-[38px] hov__line-head cursor-pointer'>
            PROJECTS
          </h1>

          <div className=' ss:h-1 h-1 ss:w-[150px] w-[75px] bg-[#FFD100]' />
        </div>

        <div className=' items-center justify-center sm:flex-col flex-row sm:py-[10px] py-[10px] '>
          

          <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
            }}
            
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}


            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
            
              prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
            }}
          >


            {pings.map((ping) =>
              <SwiperSlide key={ping.id}>
                <div className='p-10 ml-4'><Procard key={ping.id} {...ping} /></div>
              </SwiperSlide>
            )}



          </Swiper>


          


        </div>


      </div>
    </section>
  )
}

export default Projects;






