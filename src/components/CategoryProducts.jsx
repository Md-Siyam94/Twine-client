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
    const isAdmin = useIsAdmin()
    const {user} = useContext(AuthContext) 
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location.pathname);
    const products = useCategoryWiseProducts(category)
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