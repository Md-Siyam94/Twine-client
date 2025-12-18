import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'

const WinterArrivalse = ({title, description,image, reversClass = ''}) => {
  useEffect(()=>{
    AOS.init()
  },[])
    return (
        <div  className={` lg:flex items-center  gap-6 lg:px-28  py-20 px-4 ${reversClass}`}>
            <div  className="flex-1 ">
              
                <h1 data-aos="fade-up" data-aos-duration="900" className='lg:text-6xl md:text-5xl text-3xl font-semibold '>{title}</h1>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="40" className='my-4 '>{description}</p><br />
                <div data-aos="fade-up" data-aos-duration="700" >
                <Link  to={'/products'} className='lg:py-3 py-2 px-6 rounded-full text-white bg-linear-80 from-teal-500 to-gray-500'>Let's Shop</Link>
                </div>
            </div>
            <div className={reversClass ?"flex-1 mt-6": 'flex-1 justify-items-end mt-6' }>
                <img className='lg:h-88 w-full object-cover' src={image} alt="" />
            </div>
        </div>
    );
};

export default WinterArrivalse;