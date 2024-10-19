import React from 'react'
import Card from './Card'
import html from '../Assets/html.png'
import css3 from '../Assets/css3.svg'
import figma from '../Assets/figma.svg'
import js from '../Assets/javascript.svg'
import bootstrap from '../Assets/bootstrap.png'
import react from '../Assets/react.svg'
import tailwindcss from '../Assets/tailwindcss.svg'
import java from '../Assets/java.svg'

const toolsData = [
    {
        id: 1,
        images: react,
        toolName: "React",
        uses: "Framework",
    },
    {
        id: 2,
        images:  js,
        toolName: "JavaScript",
        uses: "Interaction",
    },
    {
        id: 3,
        images: css3 ,
        toolName: "CSS",
        uses: "User Interface",
    },
    {
        id: 4,
        images: bootstrap ,
        toolName: "Bootstrap",
        uses: "User Interface",
    },
    {
        id: 5,
        images:  java,
        toolName: "Java",
        uses: "Web Server",
    },
    {
        id: 6,
        images: tailwindcss,
        toolName: "Tailwind CSS",
        uses: "User Interface",
    },
    {
        id: 7,
        images: html ,
        toolName: "HTML",
        uses: "Web Pages",
    },
    {
        id: 8,
        images:  figma ,
        toolName: "Figma",
        uses: "Design Tool",
    },
]


const Tools = () => {
    return (
        <div className='max-w-screen-lg m-auto mt-20 '>
            <p className='text-[2rem] font-medium'>Essentials Tools I use</p>
            <p className='text-[#bdbdbd] text-sm'>Discover the powerful tools and techonologies I use to create exceptional, high performing website & applications.</p>

            <div className="mt-[1rem] flex gap-4 flex-wrap justify-center">
                {
                    toolsData.map(val => {
                        return (
                            <div key={val.id}>
                                <Card image={val.images} tool={val.toolName} use={val.uses} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Tools
