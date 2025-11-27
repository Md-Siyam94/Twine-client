import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { div } from 'motion/react-client';
import { useNavigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {loading, user}= useContext(AuthContext)
    const navigate = useNavigate()
    if(loading){
        <div>Loading...</div>
    }
    if(!user){
        return navigate("/login")
    }
    return children
};

export default PrivetRoute;