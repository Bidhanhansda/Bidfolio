import React, { useState } from 'react';
import {close, menu} from "../assets";
import {navLinks} from "../constants";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center py-6 ">
    <h1 className="w-[124px] h-[32px] text-6xl font__text text-black">BidFolio</h1>

    <ul className='list-none justify-end flex-1 items-center nav-menu'>
      {navLinks.map((nav,index) =>(
        <li key={nav.id} className={` hov__line font__heading font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
        <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}

      
    </ul>

    <div className='sm:hidden flex flex-1 justify-end items-center  '>
        <img src={toggle ? close : menu}
          alt="nav_menu"
          className=' w-[28px] h-[28px] object-contain  '
          onClick={() => setToggle((prev) =>!prev)}
        />
        <div
        className={` ${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bounce-in-top z-99`}
        >
        
      <ul className=' list-none flex flex-col justify-end items-center flex-1 '>
      {navLinks.map((nav,index) => (
        <li key={nav.id} className={`font__heading font-normal cursor-pointer text-[16px] font__heading text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>
      ))}

      </ul>
        </div>
      </div>


    </nav>
  )
}

export default Navbar;
