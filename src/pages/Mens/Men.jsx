import React, { useEffect, useState } from 'react';
import Feature from '../../components/Feature';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard'

const Men = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseAPI}/products/men/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    console.log(products);

    return (
        <div className='px-20 py-4'>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 '>
                {
                    products.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Men;