import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'

const WinterArrivalse = ({title, description,image, reversClass = ''}) => {
  useEffect(()=>{
    AOS.init()
  },[])
    return (
        <div  className={` lg:flex items-center max-w-7xl mx-auto gap-16  py-20 px-5 ${reversClass}`}>
            <div  className="flex-1 ">
              
                <h1 data-aos="fade-up" data-aos-duration="900" className='lg:text-5xl md:text-3xl text-2xl font-semibold '>{title}</h1>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="40" className='my-4 '>{description}</p><br />
                <div data-aos="fade-up" data-aos-duration="700" >
                <Link  to={'/products'} className='rounded-full bg-linear-80 w-full px-6 cursor-pointer bg-black/80 text-white font-semibold lg:py-4 py-3 hover:bg-black/90  transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl'>Let's Shop</Link>
                </div>
            </div>
            <div className={reversClass ?"flex-1 mt-6": 'flex-1 justify-items-end mt-6' }>
                <img className='lg:h-88 w-full object-cover' src={image} alt="" />
            </div>
        </div>
    );
};

export default WinterArrivalse;