import React from 'react'

const LandingPage = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-52 px-20 '>
                {
                    ["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                        return <div className='masker '>
                            <h1 key={index} className='uppercase font-["Founders_Grotesk"] text-[7vw] leading-[6vw] font-semibold tracking-tighter '> {item}</h1>
                        </div>
                    })
                }



            </div>

            <div className='border-t-[1px] border-l-zinc-800 mt-32 flex justify-between items-center px-20'>
                {
                    ["For Public & Private Companies", "From The First Pitch To IPO"].map((item,index)=><p className='text-md tracking-tight leading-none font-light'>{item}</p>)
                }
            </div>
        </div>
    )
}

export default LandingPage
