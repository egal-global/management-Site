import Facebook from './img/icon-facebook.svg'
import Youtube from './img/icon-youtube.svg'
import Twitter from './img/icon-twitter.svg'
import Pincreast from './img/icon-pinterest.svg'
import Instgram from './img/icon-instagram.svg'


const Footer = () =>{

    return (
        <div className="md:flex md:gap-5 md:justify-between md:items-center md:pb-10  bg-[hsl(228,39%,23%)] pt-10">
            <div className="flex  gap-5 pl-5 justify-center items-center "> 
                <input className="pl-3 py-2 rounded-full" type="text" placeholder="Updates in your inbox" />
                <button className='hover:bg-[#f25f3ad4] rounded-xl px-5 py-1 text-xl bg-[hsl(12,88%,59%)] text-[hsla(0,0%,98%,1)] '>
                    Go
                </button>
            </div>
            <div className="flex justify-center mt-5 gap-5 text-gray-200">
                <div className="flex flex-col gap-3">
                    <a href="#" className=" hover:text-orange-500">Home</a>
                    <a href="#" className=" hover:text-orange-500">Pricing</a>
                    <a href="#" className=" hover:text-orange-500">Products</a>
                    <a href="#" className=" hover:text-orange-500">About Us</a>
                </div>
                <div className="flex flex-col gap-3">
                    <a href="#" className=" hover:text-orange-500">Careers</a>
                    <a href="#" className=" hover:text-orange-500">Community</a>
                    <a href="#" className=" hover:text-orange-500">Privacy Policy</a>
                </div>

            </div>
           <div className='md:mr-10'>

                <div className='flex justify-center gap-4 my-10 md:flex md:flex-wrap '>
                        <img src={Facebook} alt="" />
                        <img src={Youtube} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Pincreast} alt="" />
                        <img src={Instgram} alt="" />
                    </div>
                    <p className='text-gray-200 pb-10'>
                        Copyright 2020. All Rights Reserved
                    </p>

           </div>
        </div>
    )
}


export default Footer;