import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'

const WinterArrivalse = ({title, description,image, reversClass = ''}) => {
  useEffect(()=>{
    AOS.init({
        duration:800,
        delay: 50,
    })
  },[])
    return (
        <div  className={` lg:flex items-center  gap-6 lg:px-28  py-20 px-4 ${reversClass}`}>
            <div  className="flex-1 ">
              
                <h1 className='lg:text-6xl md:text-5xl text-3xl font-semibold '>{title}</h1>
                <p className='my-4 '>{description}</p><br />
                <Link to={'/products'} className='lg:py-3 py-2 px-6 rounded-full text-white bg-linear-80 from-teal-500 to-gray-500'>Let's Shop</Link>
            </div>
            <div className={reversClass ?"flex-1 mt-6": 'flex-1 justify-items-end mt-6' }>
                <img className='lg:h-88 w-full object-cover' src={image} alt="" />
            </div>
        </div>
    );
};

export default WinterArrivalse;