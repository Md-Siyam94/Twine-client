import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { RiAdminLine } from 'react-icons/ri';

const AdminLogin = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const hanldeAdminLogin =()=>{
        const email = 'admin@gmail.com';
        const password = 'admin123456';

        signIn(email, password)
        .then(()=>{
            navigate("/")
        })
        .catch(err=>{
           console.log(err);
        })
    }
    return (
        <button onClick={hanldeAdminLogin} className="btn w-full flex gap-2 items-center hover:bg-sky-200  border bg-white text-black ">
               <RiAdminLine className='text-xl text-green-500'/>
                Admin Login
            </button>
    );
};

export default AdminLogin;