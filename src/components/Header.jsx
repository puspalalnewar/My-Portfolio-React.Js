import React, { useState } from 'react'

import { Link } from 'react-scroll';
import me from '../Assets/me.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <>
      <header className={`h-20 ${isOpen ? 'mb-[9rem]' : ''}`}>
        <div className="max-w-screen-xl bg-red w-full mx-auto px-4 flex items-center justify-between">

          <img src={me} alt="" className='w-10' />
          <FaBars className={`text-[1.7rem] ${isOpen ? 'hidden' : 'block'} md:hidden`} onClick={toggleMenu} />
          <ImCross className={`text-[1.7rem] ${isOpen ? 'block' : 'hidden'} md:hidden`} onClick={toggleMenu} />

          <div className="hidden md:block bg-zinc-50/10 p-3 rounded text-sm">
            <Link to="about" className='mr-5 cursor-pointer' smooth={true} duration={500}>About</Link>
            <Link to="tools" className='mr-5 cursor-pointer' smooth={true} duration={500}>Tools</Link>
            <Link to="projects" className='mr-5 cursor-pointer' smooth={true} duration={500}>Projects</Link>
            <Link to="contact" className='cursor-pointer' smooth={true} duration={500}>Contact</Link>
          </div>

          <div className="hidden md:h-10 w-24 cursor-pointer bg-slate-50 text-black md:flex justify-center items-center rounded text-sm">
            <Link to="contact" smooth={true} duration={500}> Contact Me</Link>
          </div>
        </div>
        <div className={`bg-zinc-50/30 p-3 ${isOpen ? '' : 'hidden'} rounded text-sm flex flex-col justify-evenly mt-4 md:hidden`}>
          <Link to="about" className='mb-4 cursor-pointer' smooth={true} duration={500}>About</Link>
          <Link to="tools" className='mb-4 cursor-pointer' smooth={true} duration={500}>Tools</Link>
          <Link to="projects" className='mb-4 cursor-pointer' smooth={true} duration={500}>Projects</Link>
          <Link to="contact" className='cursor-pointer' smooth={true} duration={500}>Contact</Link>
        </div>
      </header>

    </>
  )
}

export default Header
