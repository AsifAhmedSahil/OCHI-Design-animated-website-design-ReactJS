import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-52 px-20 '>
                {
                    ["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                        return (
                            <div className='masker '>
                                <div className='w-fit flex '>
                                    {index === 1 && (<div className='w-[8vw] h-[5vw] bg-red-600 relative top-[0.6vw] rounded-md mr-[1vw]'></div>)}
                                    <h1 key={index} className='uppercase font-["Founders_Grotesk"] text-[6.5vw] leading-[6vw] font-semibold tracking-tighter '> {item}</h1>
                                </div>
                            </div>
                        )
                    })
                }



            </div>

            <div className='border-t-[1px] border-l-zinc-800 mt-32 flex justify-between items-center px-20 py-2'>
                {
                    ["For Public & Private Companies", "From The First Pitch To IPO"].map((item, index) => <p className='text-md tracking-tight leading-none font-light'>{item}</p>)
                }

                <div className='start flex items-center gap-5'>
                    <div className='uppercase px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-sm'>Start the project</div>

                    <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400'>
                        <span className='rotate-[45deg] cursor-pointer'>
                            <FaArrowUpLong />
                        </span>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default LandingPage
