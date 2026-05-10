import React, { useContext, useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AOS from 'aos'
import "aos/dist/aos.css";
import * as motion from "motion/react-client"
import "swiper/css";
import { data, Link, useLocation, useNavigate } from 'react-router-dom';
import useCategoryWiseProducts from '../hooks/useCategoryWiseProducts';
import useIsAdmin from '../hooks/useIsAdmin';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';
import ProductCard from './ProductCard';


const CategoryProducts = ({ category }) => {

    const products = useCategoryWiseProducts(category)

    return (
        <div className=' py-12 max-w-7xl mx-auto px-5 '>
            <h1 className='text-2xl font-semibold mb-4'>{category}</h1>
            <div className='shadow-lg p-5 rounded-2xl '>
                <Swiper

                    watchSlidesProgress={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    grid={{
                        rows: 2,
                    }}
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
                        products?.map((product) => {
                            return <SwiperSlide key={product?._id}>
                                <ProductCard product={product}></ProductCard>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default CategoryProducts;