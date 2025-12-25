import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=" w-10/12  mx-auto h-screen my-auto mt-52  ">
        <div>
            <h1 className="text-center text-error text-3xl md:text-6xl  my-2">404</h1>
            <h3 className="md:text-3xl text-2xl text-center font-semibold mb-4">Opps! Page not Found</h3>
            <p className="font-semibold text-center pb-8">The page you are searching, it's maybe not available or something else</p>
           <button className=" flex flex-col justify-center w-44   mx-auto ">
           <Link className="flex gap-2  items-center py-3  justify-center font-semibold rounded-full bg-teal-600 hover:bg-teal-700 text-white" to={"/"} ><FaArrowLeft />
           Back To Home</Link>
           </button>
        </div>

    </div>
    );
};

export default Error;