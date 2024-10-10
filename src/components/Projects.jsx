import React from 'react'
import ProjectCard from './ProjectCard'
import project1 from '../Assets/project-1.jpg'
import project2 from '../Assets/project-2.jpg'
import project3 from '../Assets/project-3.jpg'
import project4 from '../Assets/project-4.jpg'
import project5 from '../Assets/project-5.jpg'
import project6 from '../Assets/project-6.jpg'

import html from '../Assets/html.png'
import css3 from '../Assets/css3.svg'
import expressjs from '../Assets/expressjs.svg'
import figma from '../Assets/figma.svg'
import js from '../Assets/javascript.svg'
import mongodb from '../Assets/mongodb.svg'
import nodejs from '../Assets/nodejs.svg'
import react from '../Assets/react.svg'
import tailwindcss from '../Assets/tailwindcss.svg'



const data = [
    {
        id : 1,
        projectName : "Music App",
        projectImg: project1,
        tools : [html, css3, js, react, expressjs, nodejs],
        githubLink : "https://github.com/puspalalnewar/currency-converter",
        netlifyLink : null,
    },
    {
        id : 2,
        projectName : "Search Images",
        projectImg: project2,
        tools : [html, css3, js, figma, tailwindcss]
    },
    {
        id : 3,
        projectName : "Power Calculator",
        projectImg: project3,
        tools : [html, css3, mongodb]
        
    },
]

const Projects = () => {
    return (
        <div className='max-w-screen-lg m-auto mt-20'>
            <p className='text-[2rem] font-medium'>My Portfolio Highlights</p>
            <div className="box flex gap-[1rem] flex-wrap justify-center mt-[1rem]">
                
                {
                    data.map((val)=>{
                        return (
                            <div key = {val.id}>
                                <ProjectCard {...val}/>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Projects
