
import { useContext } from 'react';
import { FaRegCircleUser, FaRegStar, FaRegUser } from 'react-icons/fa6';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GoHeart } from 'react-icons/go';
import { FiLogOut } from 'react-icons/fi';
import TwineLogo from '../../assets/ChatGPT Image Nov 2, 2025, 07_46_58 PM.png'
import { useEffect, useState } from 'react';


import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactTyped } from 'react-typed';




const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const location = useLocation()
    const path = location.pathname.slice(0, 10)

    const links = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        } to={"/"}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        } to={"/products"}>Products</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        } to={"/blog"}>Blog</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        } to={"/men"}>Men's</NavLink></li>
        <li><NavLink className={({ isActive }) =>
            isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        } to={"/women"}>Women's</NavLink></li>
    </>

    //    category wise navigation
    const [categories, setCategories] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/category')
            .then(res => {
                setCategories(res.data);
            })
    }, [])


    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                navigate("/")
            })
            .catch(err => {
                console.log("error from log out", err);
            })
    }

   
    return (
        <div>
            <div className="navbar max-w-screen-2xl mx-auto fixed top-0 z-50 justify-between py-4 lg:px-20 bg-white/60 shadow-sm">
                <div className=" ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-3xl  ">
                        {/* <img className='h-24 w-24' src={TwineLogo} alt="Boi lagbe logo" />  */}
                        Twine
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    {/* ToDo: make search bar searchable */}
                    {/* <label className="flex flex-row-reverse py-2 border rounded-full items-center px-5 border-green-500">
                        <svg className="h-[1em] opacity-50 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <ReactTyped

                            attr="placeholder"
                            fadeOut={true}
                            fadeOutDelay={0}
                            onBegin={function noRefCheck() { }}
                            onComplete={function noRefCheck() { }}
                            onDestroy={function noRefCheck() { }}
                            onLastStringBackspaced={function noRefCheck() { }}
                            onReset={function noRefCheck() { }}
                            loop={true}

                            onStringTyped={function noRefCheck() { }}
                            onTypingPaused={function noRefCheck() { }}
                            onTypingResumed={function noRefCheck() { }}
                            strings={[
                                'Search: panjabi',
                                'Search: t-shirt',
                                'Search: pant',
                                'Search: saree',
                                'Search: product',
                                'Search: man were',
                                'Search: woman',
                                'Search: kids'
                            ]}
                            typeSpeed={100}
                            typedRef={function noRefCheck() { }}
                        >
                            <input
                                className='focus:outline-0 w-md'
                                type="search"
                                placeholder="Search products..."
                                onChange={e => setSearch(e.target.value)}
                            />
                        </ReactTyped>

                    </label> */}
                </div>

                <div className="flex gap-24">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-8  menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>

                    <div className='flex items-center gap-4'>


                        {
                            user ? <div> <div className="dropdown dropdown-end  dropdown-hover z-50">
                                <div tabIndex={0} role="button" className=""> <img
                                    className="h-10 w-10  rounded-full object-cover"
                                    referrerPolicy="no-referrer"
                                    src={user?.photoURL}
                                    alt="user photo" /></div>
                                <ul tabIndex={0} className="dropdown-content font-semibold menu bg-base-100  z-[1] w-52 p-2 shadow">
                                    <li><Link>{user?.displayName}</Link></li>
                                    <li><NavLink to={"/dashboard/profile"} className='hover:text-green-500  '><FaRegUser className='text-lg' /> My Account</NavLink></li>
                                    <li><NavLink to={"/dashboard/my-orders"} className='hover:text-green-500  '><RiShoppingCartLine className='text-xl' /> My Orders</NavLink></li>
                                    <li><NavLink to={"/dashboard/my-reviews"} className='hover:text-green-500  '><FaRegStar className='text-xl' /> Reviews</NavLink></li>
                                    <li><NavLink to={"/dashboard/wishlist"} className='hover:text-green-500  '><GoHeart className='text-xl' /> Wish List</NavLink></li>
                                    <li><button onClick={handleLogOut}><FiLogOut className='text-xl' /> Log out</button></li>
                                </ul>
                            </div>
                            </div> : <div className="flex gap-2"> <Link to={'/login'} className='lg:py-3 py-1 px-6 flex items-center gap-2  border rounded-full hover:bg-teal-600 hover:text-white '><FaRegCircleUser className='text-xl ' /> Sign up</Link>
                            </div>
                        }
                        <Link to={'/cart'} className=''><RiShoppingCartLine className='text-3xl' /></Link>
                    </div>
                </div>

            </div>
            {/* <div>

                {
                    path == "/dashboard" ? <div></div> : <div className='py-3 px-20 shadow-sm '>
                        <Swiper
                            watchSlidesProgress={true}
                            spaceBetween={20}
                            slidesPerView={10}
                            className="mySwiper "
                        >
                            {
                                categories.map((category) => <SwiperSlide className='h-full px-6 py-2 font-semibold text-center border-2 border-[#E7E8E8] rounded-full' key={category?._id}>
                                    <NavLink to={`/products/${category._id}`} className=''> {category?._id}</NavLink>
                                </SwiperSlide>)
                            }
                        </Swiper>

                    </div>
                }
            </div> */}

        </div>
    );
};

export default Navbar;