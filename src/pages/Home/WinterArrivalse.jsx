import React from 'react';
import ArrivalVideo from "../../assets/Untitled video - Made with Clipchamp.mp4"
import { Link } from 'react-router-dom';

const WinterArrivalse = () => {
    const style = {
        
    }
    return (
        <div className=' relative w-full  lg:h-[600px] overflow-hidden'>
            <video className="absolute top-0 left-0 w-full opacity-85 max-h-[calc(100vh-15vh)] my-auto  object-cover -z-10" src={ArrivalVideo} autoPlay loop muted controls={false}></video>
           <div  className="relative z-10 text-white flex flex-col justify-center items-center h-full">
            <h1 className='lg:text-7xl md:text-6xl text-4xl font-semibold '>Winter Arrival</h1>
            <p className='my-6 lg:w-5/12 w-11/12 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem blanditiis quibusdam eaque aperiam quis iste atque omnis, neque sapiente ut.</p>
            <Link to={'/products'} className='py-3 px-6 mt-6 rounded-full bg-teal-400'>Let's Shop</Link>
           </div>
        </div>
    );
};

export default WinterArrivalse;