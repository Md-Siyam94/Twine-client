// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/front-view-stack-books-with-copy-space.jpg'
import slider2 from '../../assets/rm347-sasi-banner-15.jpg'
import slider3 from '../../assets/8620842.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';

// import required modules

const Hero = () => {
    return (
        <div className='border '>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay, ]}
                className="mySwiper h-[calc(100vh-25vh)] "
            >
               
                <SwiperSlide><img className='object-cover ' src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover ' src={slider3} alt="" /></SwiperSlide>
               
               
               
                
            </Swiper>
        </div>
    );
};

export default Hero;