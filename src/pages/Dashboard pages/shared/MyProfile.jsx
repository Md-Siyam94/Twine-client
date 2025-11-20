import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useUser from '../../../hooks/useUser';

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    const [userInformation] = useUser()
    // console.log(user);
    // console.log(userInformation.usersInformation);
    return (
        <div >
            <h1 className='text-lg'>Welcome <span className='font-semibold'> {userInformation?.name}</span></h1>

            <div className='p-10 bg-base-100  rounded-2xl h-full flex gap-6 shadow my-5'>
                <div className=''>
                    <img className='h-24 w-24 rounded-full object-cover  ' src={user?.photoURL} alt="user photo" />
                    
                </div>

                <div >
                    <h2>{userInformation?.name}</h2>
                    <p>{userInformation?.email}</p>
                </div>
            </div>
            <div className='grid grid-cols-4 justify-evenly items-center gap-5 my-10 '>
                <div className='text-center bg-base-100 p-4 shadow rounded-2xl'>
                    <h1  className=' '>Total Orders</h1>
                    <p className='text-xl font-semibold'>45</p>
                </div>
                <div className='text-center bg-base-100 p-4  shadow rounded-2xl'>
                    <h1 className=' '> Total Buy</h1>
                    <p className='text-xl font-semibold' >685 ৳</p>
                </div>
                <div className='text-center bg-base-100 p-4  shadow rounded-2xl'>
                    <h1 className=' '>Wishlist</h1>
                    <p className='text-xl font-semibold'>7</p>
                </div>
                <div className='text-center bg-base-100 p-4  shadow rounded-2xl'>
                    <h1 className=' '>Reviews</h1>
                    <p className='text-xl font-semibold'>25</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;