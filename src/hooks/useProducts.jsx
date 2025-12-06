import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useProducts = () => {
    const axiosPublic = useAxiosPublic()
    const {data: products = [] , refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/products')
            return res.data
        }
    })
   
    return [products, refetch]
};

export default useProducts;