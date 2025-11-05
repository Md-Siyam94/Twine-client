import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard';

const Products = () => {
    const [products] = useProducts()
    


    return (
        <div className='px-20 pt-5 '>
            
            <div className=' grid grid-cols-5 gap-4 items-center '>
                    {
                        products.map((product, index)=> <ProductCard key={index} product={product}></ProductCard>)
                    }
            </div>
        </div>
    );
};

export default Products;