import React from 'react'
import Card from './Card'
import css3 from '../Assets/css3.svg'
import expressjs from '../Assets/expressjs.svg'
import figma from '../Assets/figma.svg'
import js from '../Assets/javascript.svg'
import mongodb from '../Assets/mongodb.svg'
import nodejs from '../Assets/nodejs.svg'
import react from '../Assets/react.svg'
import tailwindcss from '../Assets/tailwindcss.svg'

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
        images: expressjs ,
        toolName: "Express js",
        uses: "Node Framework",
    },
    {
        id: 5,
        images:  nodejs,
        toolName: "Node Js",
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
        images: mongodb ,
        toolName: "MongoDB",
        uses: "Database",
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
