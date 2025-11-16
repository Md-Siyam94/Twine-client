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
            console.log(res.data);
           return res.data
          
        }
    })
    return [cartProdcuts, refetch]
};

export default useCartProducts;