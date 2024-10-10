import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='max-w-screen-lg m-auto mt-20 mb-8'>
      <p className='text-[2rem] font-medium'>Contact Me</p>
      <div className="flex flex-wrap w-full justify-between mt-[1rem]">
        <div className='w-[20rem] h-4'>
            <p className='text-[1.4rem] font-medium'>Contact Me For Collaboration</p>
            <p className='text-sm text-[#bdbdbd] w-[15rem]'>Reach out today to discuss your project needs and start collaboration on something amazing.</p>
            <div className="social flex gap-2 text-[1.5rem] mt-10 ">
                <FaLinkedin onClick={()=>window.open("https://www.linkedin.com/in/puspalalnewar/")}/>
                <FaGithub/>
                <FaXTwitter/>
                <IoLogoInstagram/>
            </div>
        </div>
        <div className='w-[45%]'>
            <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default Contact
