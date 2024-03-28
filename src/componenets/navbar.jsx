import Logo from './img/logo.svg'
import NavBtn from './img/icon-hamburger.svg'
import React, { useState } from 'react'
import ReadMe from './img/READ.png'


const Navbar = () =>{

    const [nav, setNav] = useState(true)

    const HandleClick = () =>{

        setNav((prevState)=>{
            return !prevState
        })
    }

    const [readme, setReadme] = useState(true);


    const handleReadme = () =>{
        setReadme((preState)=>{
            return !preState;
        })
    }

    const handleCloseReadme = () =>{
        setReadme((preState) =>{
            return !preState
        })
    }

    return (

        <div className='fixed top-0 bg-[#ffffff] w-full'>
                
                <div className="bg-[#ffffff] w-[350px] md:w-4/5">

                        <div className=' relative'>
                            <div className=' py-3 flex justify-between '>
                                <img className='cursor-pointer md:w-[100px] h-[20px]' src={Logo} alt="" />
                                <div className='hidden md:flex gap-5 flex-col md:flex-row justify-center md:h-fit h-[85vh]'>
                                    <a href="#" className='font-semibold hover:text-[#1c1c41] '>Pricing</a>
                                    <a href="#" className='font-semibold hover:text-[#1c1c41] '>Product</a>
                                    <a href="#" className='font-semibold hover:text-[#1c1c41] '>About US</a>
                                    <a href="#" className='font-semibold hover:text-[#1c1c41] '>Careers</a>
                                    <a href="#" className='font-semibold hover:text-[#1c1c41] '>Community</a>
                                </div>
                                <button className='hover:bg-[#f25f3ad4] hidden md:block rounded-lg px-5 py-1 bg-[hsl(12,88%,59%)] text-[hsla(0,0%,98%,1)] '>
                                    Get Started
                                </button>
                                    
                                <img onClick={HandleClick} className='md:hidden cursor-pointer hover:scale-105' src={NavBtn} alt="" />
                            </div>
                        </div>
                        <div className={nav ? "hidden" : " md:hidden flex absolute w-full -left-24 z-30"}>
                            {/* This is the mobile navigation section */}
                                <div className='flex gap-5 flex-col justify-center w-full h-[100vh] bg-[#ffffffe3]'>
                                    <a href="#" className='text-2xl hover:bg-orange-300 font-semibold hover:text-[#1c1c41] '>Pricing</a>
                                    <a href="#" className='text-2xl hover:bg-orange-300 font-semibold hover:text-[#1c1c41] '>Product</a>
                                    <a href="#" className='text-2xl hover:bg-orange-300 font-semibold hover:text-[#1c1c41] '>About US</a>
                                    <a href="#" className='text-2xl hover:bg-orange-300 font-semibold hover:text-[#1c1c41] '>Careers</a>
                                    <a href="#" className='text-2xl hover:bg-orange-300 font-semibold hover:text-[#1c1c41] '>Community</a>
                                </div>

                        </div>



                </div>
                <div className=' '>
                    <div className='fixed top-16 left-20 md:left-32 md:top-20'>
                        <img onClick={handleReadme} className={readme ? 'rounded-xl shadow-xl shadow-gray-400 font-semibold hover:cursor-pointer w-24 h-10 animate-bounce' : "hidden" } src={ReadMe} alt="" srcset="" />
                    
                    </div>
                    <div className={readme ? 'hidden' : ' absolute bg-[#f16846] text-black w-[375px] md:w-[600px] h-[70vh] rounded-lg top-12 -left-10 md:left-[50%] md:translate-x-[-70%] ' }>
                            <p onClick={handleCloseReadme} className='text-xl font-bold border-4 border-black w-fit py-1 px-3 absolute left-[80%] cursor-pointer hover:bg-[#ffffff] hover:text-[#575656] hover:border-[#575656] mt-5'>X</p>
                            <h1 className=' font-semibold hover:cursor-pointer pt-24'>READ ON </h1>
                            <p className='text-2xl font-bold text-white'>What this site has..</p>
                            <p className='pt-5 px-3 '>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem repellendus, incidunt aliquam quae quia, laboriosam iusto eligendi recusandae soluta eius facere quibusdam quos tenetur assumenda ad rerum expedita illum ab!
                                Id rem modi esse deserunt quost in saepe commodi quas quos!
                               sequi asperiores ab voluptatem, </p>
                    </div>
                 </div>
        </div>
    )
}



export default Navbar;