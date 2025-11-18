import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useGetSingleProduct = (productId) => {

    const axiosPublic = useAxiosPublic()

    const {data: singleProduct = [],refetch } = useQuery({
        queryKey: ["singleProduct", productId],
        queryFn: async(productId)=>{
            const res = await axiosPublic.get(`/products/${productId}`)
            return res.data
        }
    })
    return[singleProduct, refetch]
};

export default useGetSingleProduct;