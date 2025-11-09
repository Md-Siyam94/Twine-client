import React from 'react';
import Icon1 from "../../assets/fabric.png"
import Icon2 from "../../assets/return-box.png"
import Icon3 from "../../assets/free-shipping.png"
import Icon4 from "../../assets/gift.png"

const Facilities = () => {
    return (
        <div className='grid grid-cols-4 gap-4  py-20 w-11/12 mx-auto items-center '>
            <div className='py-14 rounded-2xl shadow px-2 '>
                <img className='h-12 w-12 ' src={Icon1} alt="Icon" />
                <h1 className='text-lg my-5 font-semibold'>Sustainable Materials</h1>
                <p className=''>Experience eco-friendly shopping with products made from sustainably sourced materials.</p>
            </div>

            <div className='py-14 rounded-2xl shadow px-2 '>
                <img className='h-12 w-12 ' src={Icon2} alt="Icon" />
                <h1 className='text-lg my-5 font-semibold'>30 Days Free Returns</h1>
                <p className=''>Shop with complete confidence, knowing you’re covered by our 30-day free return policy on all of our products.</p>
            </div>

            <div className='py-14 rounded-2xl shadow px-2 '> 
                <img className='h-12 w-12 ' src={Icon3} alt="Icon" />
                <h1 className='text-lg my-5 font-semibold'>Free Delivery</h1>
                <p className=''>Enjoy free delivery on all orders exceeding 200 USD, bringing more value to your shopping experience.</p>
            </div>

            <div className='py-14 rounded-2xl shadow px-2 '>
                <img className='h-12 w-12 ' src={Icon4} alt="Icon" />
                <h1 className='text-lg my-5 font-semibold'>COD Delivery</h1>
                <p className=''>Enjoy the convenience of Cash on Delivery (COD) for a secure and hassle-free shopping experience.</p>
            </div>
            
        </div>
    );
};

export default Facilities;