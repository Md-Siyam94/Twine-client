
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useWishlistProducts = () => {

    const {data: wishlistProducts = [], } = useQuery({
        queryKey: ['wishlistProducts', ]
    })
    
};

export default useWishlistProducts;