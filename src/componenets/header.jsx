
import HeaderImg from './img/illustration-intro.svg'

const Header = () =>{

    return (


        <div className="back w-full -mt-20 relative -z-10">
            <div className="bg-hero-pattern  items-center md:flex md:flex-row-reverse md:gap-10 "> 
                <img className='pt-44 w-full h-fit md:w-1/2' src={HeaderImg}  />
                <div className='md:mt-[200px] text-left  '>
                    <h1 className='text-4xl pt-5 leading-[45px] font-semibold text-[hsl(228,39%,23%)] '>
                        Bring everyone together to build better products.
                    </h1>
                    <p className='md:text-left py-10 text-xl text-gray-500'>
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the 
                        larger team goasl in view
                    </p>
                    <button className=' hover:bg-[#f25f3ad4] rounded-lg mb-10 px-10 py-1 text-2xl bg-[hsl(12,88%,59%)] text-[hsla(0,0%,98%,1)] '>
                        Get Started
                    </button>
                </div>
            </div>

         

        </div>
    )
}


export default Header;