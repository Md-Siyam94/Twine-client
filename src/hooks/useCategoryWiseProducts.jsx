import React from 'react';
import useProducts from './useProducts';

const useCategoryWiseProducts = (category) => {

    const [products] = useProducts()
    // console.log(products);
    // console.log(category);

  const data = products.filter(newproducts=> newproducts?.category === category )
         return data
};

export default useCategoryWiseProducts;