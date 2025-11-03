import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    // const [products, setProducts] = useState([])
    const [products] = useProducts()
    // console.log(products);
    // useEffect(()=>{
    //     fetch('/products.json')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         console.log(data);
    //     })
    // },[])
    

    return (
        <div className='px-20 grid mt-4 grid-cols-12 '>
           <div className='col-span-4 border h-96'>

           </div>
           <div className='col-span-8 border h-96'>
            
           </div>
        </div>
    );
};

export default Products;