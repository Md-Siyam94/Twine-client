import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import AOS from 'aos'
import * as motion from "motion/react-client"
import useIsAdmin from '../hooks/useIsAdmin';
const ProductCard = ({ product }) => {

    const isAdmin = useIsAdmin()
        const location = useLocation()

    

        
    useEffect(() => {
        AOS.init({
            duration: 600,
            delay: 20,

        })
    }, [])
    return (
        <SwiperSlide data-aos="fade-up" data-aos-easing="ease-in-out"
            data-aos-mirror="true" className='aos-animate aos-init'>
            <motion.div whileHover={{ scale: 1.03 }} className="card bg-base-100 h-full shadow-sm   ">
                <div>
                    {
                        isAdmin && location.pathname !== "/" ? <button onClick={() => handleDelete(product?._id)} className='text-lg font-semibold text-end cursor-pointer'>Delete</button> : <></>
                    }
                </div>
                <Link to={`/product-details/${product?._id}`}>
                    <figure>
                        <img
                            className='lg:h-40 h-64 '
                            src={product?.image}
                            alt={product?.category} />
                    </figure>
                </Link>
                <div className="card-body ">
                    <h2 className="card-title ">
                        {product?.name.slice(0, 17)}...

                    </h2>
                    {/* <p className=" text-sm">Price: <span className='text-md font-semibold'>{product?.price} {product?.currency}</span></p> */}
                    <p className='text-sm'>Brand: <span className='text-md font-semibold text-teal-600'>{product?.brand}</span></p>
                    <Link to={`/product-details/${product?._id}`}>
                        <p className=' opacity-60'>{product?.description?.slice(0, 40)}...more</p>
                    </Link>
                    {
                        product?.descountPrice ? <p className='text-lg text-amber-600 font-semibold'><span className='line-through'>{product?.price}</span> <span>{product?.descountPrice}</span> ৳ </p> : <p className='text-lg text-amber-600 font-semibold'><span>{product?.price}</span> ৳ </p>
                    }
                    <div className="card-actions  justify-center">

                        <button onClick={() => handleAddToCart(product?._id)} className="border  border-teal-600 text-teal-600 cursor-pointer hover:text-white hover:bg-teal-700 py-2 font-semibold px-8 rounded-full   ">Add to Cart</button>

                    </div>
                </div>

            </motion.div>
        </SwiperSlide>
    );
};

export default ProductCard;