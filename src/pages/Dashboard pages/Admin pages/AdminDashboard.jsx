import React from 'react';
import useGetUsers from '../../../hooks/useGetUsers';

const AdminDashboard = () => {
    const [users] = useGetUsers()
    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default AdminDashboard;