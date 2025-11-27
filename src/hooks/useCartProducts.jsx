import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useCartProducts = () => {
   const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)

    const {data: cartProdcuts = [], refetch} = useQuery({
        queryKey: ["cartProducts", user?.email],
        queryFn: async()=>{
           const res = await axiosPublic.get(`/cart_products/${user?.email}`)
           return res.data
          
        }
    })
    return [cartProdcuts, refetch]
};

export default useCartProducts;