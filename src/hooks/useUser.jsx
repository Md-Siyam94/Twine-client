import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../provider/AuthProvider';

const useUser = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const { data: usersInformation = {}, refetch } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data
        },
        enabled: !!user?.email
    })
    return [usersInformation, refetch]
};

export default useUser;