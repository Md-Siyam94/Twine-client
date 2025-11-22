import React, { useEffect, useState } from 'react';
import Feature from '../../components/Feature';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard'

const Men = () => {
    const [menProducts, setMenProducts] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_baseAPI}/products/men-products`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setMenProducts(data)
        })
    },[])

   
    return (
        <div className='px-20 py-4'>
           <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
            {
                menProducts.map((menProduct)=> <ProductCard key={menProduct._id} menProduct={menProduct}></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Men;