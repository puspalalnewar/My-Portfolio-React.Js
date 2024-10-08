import React from 'react'


const Card = (props) => {
    return (
        <div className='w-[15rem] border-[2px] border-zinc-50/10 h-[4rem] flex rounded-lg items-center gap-[0.5rem]'>
            <div className="bg-zinc-50/10 w-[3rem] h-[3rem] ml-[0.5rem] p-[0.6rem] rounded-lg">
                <img src={props.image} alt="" />
            </div>
            <div className=''>
                <p className=''>{props.tool}</p>
                <p className='text-[#bdbdbd] text-sm'>{props.use}</p>
            </div>
        </div>
    )
}

export default Card
