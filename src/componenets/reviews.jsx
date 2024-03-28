
import datas from './review.json'


const Review = () =>{



    return (


        <div className=' absolute  flex md:grid md:grid-cols-2 md:gap-y-10 items-center md:w-full '>
                {datas.map(data =>{
                    return   <div className='w-[350px]  md:w-full '>
                                    <p className='py-5 text-6xl text-[hsl(228,39%,23%)] font-semibold '>{data.image}</p>
                                    <p className='py-5 text-[hsl(228,39%,23%)] font-semibold '>{data.title}</p>
                                    <p className='text-gray-600 px-4 md:text-left'>{data.description}</p>
                            </div>
                })}

        </div>
    )
}


export default Review