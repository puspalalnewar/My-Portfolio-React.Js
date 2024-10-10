import React from 'react'
import image from '../Assets/javascript.svg'
import ToolsIcon from './ToolsIcon'


const ProjectCard = (props) => {
    const icons = props.tools;
    return (
        <div className='bg-zinc-50/10 w-[20rem] p-[1rem] rounded-md'>
            <div className="img-box w-full flex justify-center">
                <img src={props.projectImg} alt="" className='w-[20rem] h-[18rem] rounded-md' />
            </div>
            <p className='text-[1.3rem] font-bold mt-5'>{props.projectName}</p>
            <div className="btn mt-2">
                <button onClick={()=>window.open(props.netlifyLink)} className='h-10 w-24 cursor-pointer bg-[#76d4ff] text-black rounded text-sm mr-3'>View Live</button>
                <button onClick={()=>window.open(props.githubLink)} className='h-10 w-24 cursor-pointer bg-[#76d4ff] text-black rounded text-sm'>GitHub</button>
            </div>
            <div className="tools flex gap-[1px] mt-2 items-center">
                <strong className='text-[#bdbdbd]'>Tools : </strong>
                {
                    icons.map((item , idx) => {
                        return (
                            <div className=" w-[2rem] h-[2rem] rounded" key = {idx}>
                                <ToolsIcon icon={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectCard
