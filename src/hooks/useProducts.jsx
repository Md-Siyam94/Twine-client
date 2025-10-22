import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useProducts = () => {
    const {data: products = [] , refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res = await axios.get('/public/products.json')
            return res.data
        }
    })
    console.log(products);
    return [products, refetch]
};

export default useProducts;