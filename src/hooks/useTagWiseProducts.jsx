import useProducts from './useProducts';

const useTagWiseProducts = (tag) => {
     const [products] = useProducts()
    // console.log(products);
    // console.log(category);

  const data = products.filter(newproducts=> newproducts?.tag === tag )
  // console.log("from usecategory wise product",data);
         return data
    
};

export default useTagWiseProducts;