import React from 'react'

const About = () => {

    const projectCount = 30;

    return (
        <div className='max-w-screen-lg mx-auto bg-zinc-50/10 mt-8 rounded'>
            <p className='p-9 pb-2'>
                <strong>Student of Computer Science | DSA with Java | React.js | Tailwin CSS | JavaScript | Git | GitHub</strong> <br />

                As a passionate Computer Science student, I am continuously expanding my knowledge by exploring new ideas and technologies every day. My technical expertise includes building responsive and interactive web applications using React.js and Tailwind CSS, and I have a strong foundation in JavaScript, Git, and GitHub. Additionally, I am well-versed in Data Structures and Algorithms (DSA) with Java, which I apply to solve complex coding challenges.<br />

                I thrive in project-based learning environments and enjoy contributing to innovative projects. Whether it's optimizing web development workflows or tackling coding problems, I am always eager to grow and enhance my skill set.
            </p>
            <div className='pl-9 pb-9 flex gap-4'>
                <div className="box">
                    <h1 className='text-[2.5rem]'>{projectCount}<span className='text-cyan-500'>+</span></h1>
                    <p className='text-sm'>Project Done</p>
                </div>
                <div className="box">
                    <h1 className='text-[2.5rem]'>{projectCount}<span className='text-cyan-500'>+</span></h1>
                    <p className='text-sm'>Project Done</p>
                </div>

            </div>


        </div>
    )
}

export default About
