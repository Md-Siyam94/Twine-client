import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

const ProductCard = ({product}) => {
    console.log(product);
    return (
        <SwiperSlide>
           <div className="card bg-base-100 h-full shadow-sm   ">
                <Link to={`/product-details/${product?._id}`}>
                    <figure>
                    <img
                    className='h-48 object-cover'
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
                     
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default ProductCard;