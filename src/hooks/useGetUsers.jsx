import React from 'react';
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

const useGetUsers = () => {
   const axiosSecure = useAxiosSecure()

   const {data: users = [], refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
       const  res = await axiosSecure.get('/users', {
          headers: {
                authorization:  `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        return res.data
        
    }
   })
   return [users, refetch]
};

export default useGetUsers;