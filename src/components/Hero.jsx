import React, { useEffect, useRef } from 'react';
import { logoWeb, avatar1 } from "../assets";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Typed from 'typed.js';
import styles, { layout } from '../style';


const Hero = () => {


  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        " ", "Web", "Front-end", "Back-end", "Full Stack"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])


  return (
    <section id="Home" className={`${styles.paddingY}  sm:h-[80vh] h-[50vh] md:mt-0  mt-44 }`}>
      <div className='flex'>


        <div className='text-center p-10 py-10 flex-col'>

          <h1 className="text-5xl py-2 #4eb19e text-teal-600  font-medium dark:text-teal-400 md:text-9xl">
            HI, I AM BIDHAN
          </h1>

          <h3 className="text-2xl py-2 text-black md:text-3xl font-bold">
            <span ref={el}></span>
            <br className='sm:block ' />
            Developer
          </h3>

          <div className="text-5xl flex justify-center gap-16 py-3 text-black">

            <a className=" hover:scale-125 hover:text-[#4eb19e]" href='https://www.linkedin.com/in/bidhanhansda/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            <a className=" hover:scale-125 hover:text-[#4eb19e]" href='https://github.com/Bidhanhansda' target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
          </div>
        </div>
        <div className="profile_pic  ss:h-[800px] h-[800px] ss:w-[800px] w-[800px] md:h-[550px] md:w-[550px]  md:rounded-full rounded-xl shadow-2xl shadow-shadow">
          <img src={avatar1} className='object-cover pb-4 ' />
        </div>
      </div>

    </section>
  )
}

export default Hero;




















// import React, { useEffect, useRef } from 'react';
// import { logoWeb } from "../assets";
// import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
// import Typed from 'typed.js';
// import styles, { layout } from '../style';

// const Hero = () => {


//   const el = useRef(null);
//   const typed = useRef(null);

//   useEffect(() => {
//     const options = {
//     	strings: [
//         " ", "Web", "Front-end", "Back-end", "Full Stack"
//       ],
//       typeSpeed: 50,
//       backSpeed: 50,
//       loop:true
//     };

//     typed.current = new Typed(el.current, options);

//     return () => {
//       typed.current.destroy();
//     }
//   }, [])


//   return (
//     <section id="Home" className={`${styles.paddingY}   }`}>
//       <div className='text-center p-10 py-10'>

//         <h1 className="text-5xl py-2 #4eb19e text-teal-600  font-medium dark:text-teal-400 md:text-6xl">
//           HI, I AM BIDHAN
//         </h1>

//         <h3 className="text-2xl py-2 text-white md:text-3xl">
//           <span ref={el}></span>
//           <br className='sm:block ' />
//           Developer
//         </h3>
       
//         <div className="text-5xl flex justify-center gap-16 py-3 text-white">

//         <a  className=" hover:scale-125 hover:text-[#4eb19e]" href='https://www.linkedin.com/in/bidhanhansda/' target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
//           <a className=" hover:scale-125 hover:text-[#4eb19e]" href='https://github.com/Bidhanhansda' target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
//         </div>
//         <div className="profile_pic mt-10 ss:h-[800px] h-[800px] ss:w-[800px] w-[800px] md:h-[550px] md:w-[550px] ">
//           <img src={logoWeb} className='object-cover pb-4' />
//         </div>
//       </div>

//     </section>
//   )
// }

// export default Hero;



{/* <div className='flex justify-between md:flex-row flex-col '>
      <div className='flex-1 items-center w-full  '>
        <h1 className=' md:ml-16 ml-2 gradient__text font-poppins font-semibold ss:text-[52px] text-[32px] ss:leading-[40px] leading-[15px] pb-4'>Hi, </h1>
        <h1 className=' md:ml-16 ml-2 gradient__text font-poppins font-semibold ss:text-[52px] text-[32px] ss:leading-[40px] leading-[15px] pb-4'>I Am <span className='font__text'> Bidhan</span></h1>
        <h1 className=' md:ml-16 ml-2 gradient__text font-poppins font-semibold ss:text-[52px] text-[32px] ss:leading-[50px] leading-[15px] pb-4'>A <span ref={el}></span> 
        <br className='sm:block '/>
        Developer</h1>

        <button type='button' className={` md:ml-16 mt-12 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none heartbeat `}>
          Download Resume
        </button>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-1 relative w-full`}>
        <img
          src={profile} alt="profile_pic"
          className='sm:w-[55%] w-[100%] h-[100%] relative z-[5] transform transition-all hover:scale-150  rounded-xl'
        />
          <div className="absolute z-[0] w-[40%] h-[35%] top-20 orange__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full white__gradient bottom-40" />
        
    




      </div>

</div> */}
