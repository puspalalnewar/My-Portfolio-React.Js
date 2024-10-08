import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const header = () => {
  return (
    <>
      <header className='h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className="max-w-screen-xl bg-red w-full mx-auto px-4 flex items-center justify-between">
          {/* <h1 className='text-lg'>Newar</h1> */}
          <FaUserAlt className='text-[1.5rem] inline' />
          <div className="hidden md:block bg-zinc-50/10 p-3 rounded text-sm">
            <a href="#" className='mr-5'>Home</a>
            <a href="#" className='mr-5'>Work</a>
            <a href="#" className='mr-5'>About</a>
            <a href="#" className=''>Review</a>

          </div>
          <FaBars className='md:hidden' />
          <div className="hidden md:h-10 w-24 cursor-pointer bg-slate-50 text-black md:flex justify-center items-center rounded text-sm">
            <a href="#contact" className=''>
              Contact Me
            </a>
          </div>
        </div>
      </header>

    </>
  )
}

export default header
