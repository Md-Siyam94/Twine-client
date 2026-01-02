import React from 'react';
import { Link } from 'react-router-dom';

const Button1 = ({title, style,navigate }) => {
    return (
        <Link to={navigate} className='rounded-full bg-linear-80 w-full cursor-pointer bg-black/80 text-white font-semibold lg:py-4 py-3 hover:bg-black/90  transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl'>{title}</Link>
    );
};

export default Button1;