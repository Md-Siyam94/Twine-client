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
        <div>
            Products page is commingggggg
        </div>
    );
};

export default Products;