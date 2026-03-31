import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTagWiseProducts = (tag) => {
    const axiosPublic = useAxiosPublic()
    const {data: products= [], refetch}= useQuery({
        queryKey: ['products'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/products/${tag }`)
            return res.data
        }
    })

    return [products, refetch]
    
};

export default useTagWiseProducts;