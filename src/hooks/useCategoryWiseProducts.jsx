import React from 'react';
import useProducts from './useProducts';

const useCategoryWiseProducts = (category) => {

    const [products] = useProducts()
    // console.log(products);
    // console.log(category);

  const data = products.filter(newproducts=> newproducts?.category === category )
  console.log("from usecategory wise product",data);
         return data
};

export default useCategoryWiseProducts;