import React, { useState } from 'react'
import ImageOne from './img/avatar-ali.png'
import ImageTwo from './img/avatar-anisha.png'
import ImageThree from './img/avatar-richard.png'
import Review from './reviews';




const Testimonals = () =>{


    const [move, setMove] = useState(0)

    const updatePreState = 350

    const handleLeft = () =>{
        setMove((preState)=>{
            return preState - updatePreState
        })
    }

    const handleRight = () =>{
        setMove((preState) =>{
          return  preState + updatePreState
        })
    }

  

    return (

        <div className='py-10 bg-[#f9f8f8] z-10 '>

            <div className='relative '>
                <h1 className='text-[hsl(228,39%,23%)] text-5xl font-bold pb-10 '>Our Trust You <br /> Can Value</h1>
                <div>
                    <Review/>
                </div>
                
                <div className='flex mt-[300px] md:hidden w-full h-fit gap-2 justify-center '>
                    <a href="#" className='px-2.5 py-2.5 bg-[#f25f3ad4]  border-4 border-[#f25f3ad4] rounded-full'></a>
                    <a href="#" className='px-2.5 py-2.5 border-4 border-[#f25f3ad4] rounded-full'></a>
                    <a href="#" className='px-2.5 py-2.5 border-4 border-[#f25f3ad4] rounded-full'></a>
                </div>
                <div className='md:hidden flex text-white justify-center gap-5 py-10'>
                    <div onClick={handleLeft} className='text-3xl cursor-pointer hover:bg-[#f25f3ab0] hover:text-[#ffffff] font-bold py-0.5 px-5 text-center bg-[hsl(12,88%,59%)] '> &lt; </div>
                    <div onClick={handleRight} className='text-3xl font-bold py-0.5 px-5 text-center bg-[hsl(12,88%,59%)]  cursor-pointer hover:bg-[#f25f3ab0] hover:text-[#ffffff] '>&gt; </div>
                </div>
                <button className='hover:bg-[#f25f3ad4] md:mt-[600px] rounded-xl my-10 px-10 py-1 bg-[hsl(12,88%,59%)] text-[hsla(0,0%,98%,1)] '>
                    Get Started
                </button>
            </div>
            
        </div>
    )
}


export default Testimonals;