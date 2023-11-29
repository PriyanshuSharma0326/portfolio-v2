import React from 'react'

function StackBox({ title }) {
    return (
        <span className='
            px-[0.8rem] 
            py-[0.4rem] 
            rounded-full 
            text-[#45FFCA] 
            text-[0.8rem] 
            bg-[#45FFCA24]
            
            max-[1024px]:text-[0.7rem]
            max-[1024px]:px-[0.7rem]
            max-[1024px]:py-[0.3rem]
            
            max-[768px]:text-[0.85rem]
            max-[768px]:px-[0.85rem]
            max-[768px]:py-[0.45rem]'
        >{title}</span>
    )
}

export default StackBox;
