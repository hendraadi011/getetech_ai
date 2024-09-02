import React from 'react'
import { loading } from '../assets'

const Generating = ({ className }) => {
    return (
        <div className={`flex items-center h-[3.5] px-6 py-4 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
            <img
                className='w-5 h-5 mr-4'
                src={loading}
                alt="loadig"
            />
            AI is generating
        </div>
    )
}

export default Generating
