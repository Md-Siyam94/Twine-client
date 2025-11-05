import React from 'react';
import { SwiperSlide } from 'swiper/react';

const ProductCard = ({ product }) => {
    // console.log(product);
    return (
        <SwiperSlide>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                    className='h-48 '
                        src={product?.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default ProductCard;