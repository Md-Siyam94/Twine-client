import React, { useEffect, useState } from 'react';
import Feature from '../../components/Feature';
import ProductCard from '../../components/ProductCard';

const Women = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseAPI}/products/women/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (

        <div className='lg:px-20 px-4 py-4'>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 '>
                {
                    products.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
                }
            </div>
        </div>

    );
};

export default Women;