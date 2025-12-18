import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard';
import CategoryProducts from '../../components/CategoryProducts';

const Products = () => {
    const [products] = useProducts()
    


    return (
        <div className=' px-4 pt-5 '>
            <section>
                <CategoryProducts category={"T-shirt"}></CategoryProducts>
            </section>
            <section>
                <CategoryProducts category={"Saree"}></CategoryProducts>
            </section>
            <section>
                <CategoryProducts category={"T-shirt"}></CategoryProducts>
            </section>
            <section>
                <CategoryProducts category={"Panjabi"}></CategoryProducts>
            </section>
            <section>
                <CategoryProducts category={"Pant"}></CategoryProducts>
            </section>
        </div>
    );
};

export default Products;