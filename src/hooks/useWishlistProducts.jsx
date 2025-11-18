
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useWishlistProducts = () => {
    const axiosPublic = useAxiosPublic()
    const {user}= useContext(AuthContext)
    const {data: wishlistProducts = [], refetch} = useQuery({
        queryKey: ['wishlistProducts', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/wishlist/${user?.email}`)
            return res.data
        }
    })
    return [wishlistProducts, refetch]
};

export default useWishlistProducts;