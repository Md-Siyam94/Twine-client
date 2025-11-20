import React from 'react';
import { Link } from 'react-router-dom';

const TargetAudiance = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-4 text-center  items-center  justify-evenly '>
            <Link className=' py-14 px-20 rounded-2xl bg-teal-50 shadow-lg  ' >
                <h1 className='text-xl  font-semibold'>Man</h1>
                <p className='text-sm opaci'>View Collection</p>
                
            </Link>
            <Link className=' py-14 px-20 rounded-2xl bg-teal-50 shadow-lg  '>
                <h1 className='text-xl  font-semibold'>Woman</h1>
                <p className='text-sm opaci'>View Collection</p>
            </Link>
            <Link className=' py-14 px-20 rounded-2xl bg-teal-50 shadow-lg  '>
                <h1 className='text-xl  font-semibold'>Kids</h1>
                <p className='text-sm opaci'>View Collection</p>
            </Link>
        </div>
    );
};

export default TargetAudiance;