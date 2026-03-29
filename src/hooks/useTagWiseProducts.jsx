import React from 'react';
import useProducts from './useProducts';

const useTagWiseProducts = (tag) => {
    // console.log(tag);
   const [products] = useProducts()

   const data = products.filter(newProducts=> newProducts?.tag === tag)
   console.log(data);
    return  data
    
};

export default useTagWiseProducts;