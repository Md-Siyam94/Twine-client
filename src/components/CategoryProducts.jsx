import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AOS from 'aos'
import "aos/dist/aos.css";
import * as motion from "motion/react-client"
import "swiper/css";
import { data, Link } from 'react-router-dom';
import useCategoryWiseProducts from '../hooks/useCategoryWiseProducts';


const CategoryProducts = ({ category }) => {
    const products = useCategoryWiseProducts(category)
    useEffect(() => {
        AOS.init({
            duration: 500,
            
        })
    }, [])

    return (
        <div  className=' py-12 lg:px-20 mx-auto px-4 '>
            <h1 className='text-2xl font-semibold mb-4'>{category}</h1>
            <div className='shadow-lg p-5 rounded-2xl '>
                <Swiper
                
                    watchSlidesProgress={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        992: {   
                            slidesPerView: 5,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        products?.slice(0, 10).map((product) => {
                            return <SwiperSlide data-aos="fade-up" data-aos-delay='20' key={product?._id} className=''>
                                <motion.div whileHover={{ scale: 1.03 }} className="card bg-base-100 h-full shadow-sm   ">
                                    <Link to={`/product-details/${product?._id}`}>
                                        <figure>
                                            <img
                                                className='lg:h-40 h-64 '
                                                src={product?.image}
                                                alt={product?.category} />
                                        </figure>
                                    </Link>
                                    <div className="card-body">
                                        <h2 className="card-title ">
                                            {product?.name}

                                        </h2>
                                        {/* <p className=" text-sm">Price: <span className='text-md font-semibold'>{product?.price} {product?.currency}</span></p> */}
                                        <p className='text-sm'>Brand: <span className='text-md font-semibold text-teal-600'>{product?.brand}</span></p>
                                        <p className=' opacity-60'>{product?.description?.slice(0, 40)}...more</p>
                                        <div className="card-actions  justify-end">

                                            <Link to={`/product-details/${product?._id}`} className=" bg-teal-600 text-white hover:bg-teal-700 py-1 px-4 rounded-lg  ">View Details</Link>

                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default CategoryProducts;