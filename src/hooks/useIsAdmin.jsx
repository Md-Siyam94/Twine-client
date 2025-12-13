import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../provider/AuthProvider';

const useIsAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {data: isAdmin = false, refetch}= useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data
        },
        enabled: !!user?.email
    })
    return [isAdmin, refetch]
};

export default useIsAdmin;