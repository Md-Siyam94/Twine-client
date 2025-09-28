
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <li ><NavLink className={(isActive)=> isActive ? 'text-red-700 font-semibold' : 'text-black'} >হোম</NavLink></li>
        <li><NavLink className={(isActive)=> isActive ? 'text-red-700 font-semibold' : 'text-black'} to={'/products'}>সকল বই</NavLink></li>
        <li><NavLink className={(isActive)=> isActive ? 'text-red-700 font-semibold' : 'text-black'} to={'/blog'}>ব্লগ</NavLink></li>
        <li><NavLink>Home</NavLink></li>

    </>
    return (
        <div className="navbar justify-between py-5 px-20 bg-base-100  shadow-sm">
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
                <a className="btn btn-ghost text-xl">BoiLagbe</a>
            </div>
            <div className='navbar-center hidden lg:flex'>
                <label className="flex flex-row-reverse py-2 border rounded-full items-center px-5 border-sky-500">
                    <svg className="h-[1em] opacity-50 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                    <input className='focus:outline-0 w-md' type="search" placeholder="Search" />
                </label>
            </div>

            <div className="flex gap-24">
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8  menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
               <button className='py-3 px-10'> <Link to={'/Login'} className='py-3 px-6'>Sign up</Link></button>
               <button className='py-3 px-10'> <Link to={'/Login'} className='py-3 px-6'>Sign up</Link></button>
            </div>
        </div>
    );
};

export default Navbar;