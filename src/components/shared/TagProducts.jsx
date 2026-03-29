import React from 'react';

import  { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "aos/dist/aos.css";
import * as motion from "motion/react-client"
import "swiper/css";
import { Link, useLocation, useNavigate } from 'react-router-dom';


import useTagWiseProducts from '../../hooks/useTagWiseProducts';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useIsAdmin from '../../hooks/useIsAdmin';
import Swal from 'sweetalert2';
const TagProducts = ({tag}) => {


// console.log(tag);
const isAdmin = useIsAdmin()
    const {user} = useContext(AuthContext) 
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname);
    const products = useTagWiseProducts(tag)
    // useEffect(() => {
    //     AOS.init()
    // }, [])


    const handleDelete = (id) => {
        console.log(`Delete ${id}`);
    }

    // product add to card
        const handleAddToCart = (id) => {

            if(!user){
                navigate('/login')
            }
            const product = products.filter(singleProduct=> singleProduct?._id === id)
            const productInfo = {
                userEmail: user?.email,
                userName: user?.displayName,
                productName: product?.name,
                productId: product?._id,
                productImage: product?.image,
                description: product?.description,
                material: product?.material,
                brand: product?.brand,
                price: product?.price,
                size: product?.size,
                color: product?.color,
    
            }
            // console.log(productInfo);
            axiosPublic.post("/cart_products", productInfo)
                .then(res => {
                    if (res?.data?.success) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Product has been added to cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        Swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: `${res?.data?.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(err => {
                    console.log("error msg", err);
                })
        }
    
    return (
        <div className=' py-12 max-w-8xl lg:px-20 mx-auto px-5 '>
            <h1 className='text-3xl font-semibold mb-4'>{tag}</h1>
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
                            return <SwiperSlide key={product?._id} className=''>
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
                                            {product?.name.slice(0,17)}...

                                        </h2>
                                        {/* <p className=" text-sm">Price: <span className='text-md font-semibold'>{product?.price} {product?.currency}</span></p> */}
                                        <p className='text-sm'>Brand: <span className='text-md font-semibold text-teal-600'>{product?.brand}</span></p>
                                        <Link to={`/product-details/${product?._id}`}>
                                        <p className=' opacity-60'>{product?.description?.slice(0, 40)}...more</p>
                                        </Link>
                                        <div className="card-actions  justify-center">

                                            <button onClick={()=>handleAddToCart(product?._id)} className="border  border-teal-600 text-teal-600 cursor-pointer hover:text-white hover:bg-teal-700 py-2 font-semibold px-8 rounded-full   ">Add to Cart</button>

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

export default TagProducts;