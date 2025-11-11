import React, { useEffect, useState } from 'react';
import useProducts from '../hooks/useProducts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import "swiper/css";
import { data, Link } from 'react-router-dom';
import useCategoryWiseProducts from '../hooks/useCategoryWiseProducts';




const CategoryProducts = ({category}) => {
    const products = useCategoryWiseProducts(category)


    const handleAddToCart = (id)=>{
        console.log(id);
    }

    return (
        <div className=' py-5 w-11/12 mx-auto '>
            <h1 className='text-2xl font-semibold mb-4'>{category}</h1>
           <div className='shadow-lg p-5 rounded-2xl '>
             <Swiper
                watchSlidesProgress={true}
                spaceBetween={30}
                slidesPerView={5}
                className="mySwiper "
            >
                 {
                  products?.slice(0,15).map((product) => {
                    return <SwiperSlide key={product?._id} className=''>
                        <div className="card bg-base-100 h-full shadow-sm   ">
                <Link to={`/product-details/${product?._id}`}>
                    <figure>
                    <img
                    className='h-40  '
                        src={product?.image}
                        alt={product?.category} />
                </figure>
                </Link>
                <div className="card-body">
                    <h2 className="card-title  ">
                        {product?.name}
                       
                    </h2>
                     {/* <p className=" text-sm">Price: <span className='text-md font-semibold'>{product?.price} {product?.currency}</span></p> */}
                    <p className='text-sm'>Brand: <span className='text-md font-semibold'>{product?.brand}</span></p>
                    <p className=' opacity-60'>{product?.description?.slice(0,70)}...more</p>
                    <div className="card-actions justify-between">
                        <Link to={`/product-details/${product?._id}`} className=" border-b hover:text-teal-400">View Details</Link>
                        <button type='button' onClick={()=>handleAddToCart(product?._id)}  className="py-1 px-4 rounded-2xl bg-teal-400 hover:bg-teal-600 hover:text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
                    </SwiperSlide>
                })
                }
            </Swiper>
           </div>
        </div>
    );
};

export default CategoryProducts;