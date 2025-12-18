import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import AOS from 'aos'
import * as motion from "motion/react-client"
const ProductCard = ({ product }) => {
   useEffect(()=>{
    AOS.init({
        duration:600,
        delay: 20,
        
    })
   },[])
    return (
        <SwiperSlide data-aos="fade-up"   data-aos-easing="ease-in-out"
        data-aos-mirror="true" className='aos-animate aos-init'>
            <motion.div   whileHover={{ scale: 1.03 }}
             className="card bg-base-100 h-full shadow-sm   ">
                <Link to={`/product-details/${product?._id}`}>
                    <figure>
                        <img
                            className='lg:h-40 h-80 '
                            src={product?.image}
                            alt={product?.category} />
                    </figure>
                </Link>
                <div className="card-body">
                    <h2 className="card-title">
                        {product?.name}

                    </h2>
                    {/* <p className=" text-sm">Price: <span className='text-md font-semibold'>{product?.price} {product?.currency}</span></p> */}
                    <p className='text-sm'>Brand: <span className='text-md font-semibold text-teal-600'>{product?.brand}</span></p>
                    <p className=' opacity-60'>{product?.description?.slice(0, 70)}...more</p>
                    <div className="card-actions  justify-end">

                        <Link to={`/product-details/${product?._id}`} className=" bg-teal-600 text-white hover:bg-teal-700 py-1 px-4 rounded-lg  ">View Details</Link>

                    </div>
                </div>
            </motion.div>
        </SwiperSlide>
    );
};

export default ProductCard;