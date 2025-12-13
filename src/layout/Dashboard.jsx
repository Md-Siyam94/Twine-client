import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import { AuthContext } from '../provider/AuthProvider';
import { FaRegStar, FaRegUser } from 'react-icons/fa6';
import { RiShoppingCartLine } from 'react-icons/ri';
import { GoHeart, GoHome } from 'react-icons/go';
import { FiLogOut } from 'react-icons/fi';
import useUser from '../hooks/useUser';
import { MdOutlineAddBusiness } from 'react-icons/md';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const userInformation = useUser()

    const handleLogOut = () => {
        console.log("log out");
    }

    const isAdmin = true

    const links = <>
    </>
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div>
                <Navbar></Navbar>
            </div>
            <div className='grid grid-cols-12 lg:px-20 px-4 gap-4 min-h-[calc(100vh-100px)] bg-base-200 pt-4 '>
                <div className='lg:col-span-3 pt-20 hidden lg:block '>
                    <ul className='font-semibold menu bg-base-100 py-6 rounded-xl shadow  z-[1] w-full gap-4 p-2'>
                        {
                            isAdmin ? <div><li><NavLink to={"/"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><GoHome className='text-xl' /> Home</NavLink></li>
                                <li>  <NavLink className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                } to={"/dashboard/profile"} ><FaRegUser className='text-lg' /> My Account</NavLink></li>

                                <li><NavLink to={"/dashboard/my-orders"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><RiShoppingCartLine className='text-xl' /> My Orders</NavLink></li>

                                <li><NavLink to={"/dashboard/add-product"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><MdOutlineAddBusiness className='text-xl' /> Add Product</NavLink></li>

                                {/* todo: make review page */}
                                
                                {/* <li><NavLink to={"/dashboard/my-reviews"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><FaRegStar className='text-xl' /> Reviews</NavLink></li> */}

                                <li><NavLink to={"/dashboard/wishlist"} className={({ isActive }) =>
                                    isActive ? "text-green-500 " : " hover:text-green-500 "
                                }><GoHeart className='text-xl' /> Wish List</NavLink></li>
                                <li><button onClick={handleLogOut}><FiLogOut className='text-xl' /> Log out</button></li></div> :

                                <div>
                                    <li><Link to={"/dashboard/profile"}>
                                        <img className='h-12 w-12 rounded-full object-cover' src={user?.photoURL} alt="user photo" />
                                        {user?.displayName}</Link></li>
                                    <li>  <NavLink className={({ isActive }) =>
                                        isActive ? "text-green-500 " : " hover:text-green-500 "
                                    } to={"/dashboard/profile"} ><FaRegUser className='text-lg' /> My Account</NavLink></li>

                                    <li><NavLink to={"/dashboard/my-orders"} className={({ isActive }) =>
                                        isActive ? "text-green-500 " : " hover:text-green-500 "
                                    }><RiShoppingCartLine className='text-xl' /> My Orders</NavLink></li>

                                    {/* todo: make review page */}

                                    {/* <li><NavLink to={"/dashboard/my-reviews"} className={({ isActive }) =>
                                        isActive ? "text-green-500 " : " hover:text-green-500 "
                                    }><FaRegStar className='text-xl' /> Reviews</NavLink></li> */}

                                    <li><NavLink to={"/dashboard/wishlist"} className={({ isActive }) =>
                                        isActive ? "text-green-500 " : " hover:text-green-500 "
                                    }><GoHeart className='text-xl' /> Wish List</NavLink></li>
                                    <li><button onClick={handleLogOut}><FiLogOut className='text-xl' /> Log out</button></li>
                                </div>

                        }
                    </ul>
                </div>
                <div className='lg:col-span-9 pt-20 col-span-12 '>
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Dashboard;