import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-screen-lg m-auto flex justify-between mt-[9rem] flex-wrap'>
            <div className="w-[20rem]">
                <p className='text-[2.5rem]'>Let's work together today!</p>
            </div>
                <div className="mt-[3rem] w-full md:mt-0 flex justify-around md:w-[50%] flex-wrap">
                    <div className='text-center text-[#bdbdbd] text-sm'>
                        <p className='text-[1.3rem] text-white'>Sitemap</p>
                        <p>Home</p>
                        <p>About</p>
                        <p>Tools</p>
                        <p>Projects</p>
                        <p>Contact</p>
                    </div>
                    <div className='text-center text-[#bdbdbd] text-sm'>
                        <p className='text-[1.3rem] text-white'>Socials</p>
                        <p>GitHub</p>
                        <p>Twitter X</p>
                        <p>Instagram</p>
                        <p>FaceBook</p>
                        <p>Leetcode</p>
                    </div>
                </div>
        </div>
    )
}

export default Footer
