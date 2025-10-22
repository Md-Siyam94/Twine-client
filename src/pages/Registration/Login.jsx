import React from 'react';
import GoogleLogin from '../../components/shared/GoogleLogin';
import { MdOutlineLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm py-10 shrink-0 shadow-2xl">
                    <div className="card-body">
<h1 className="text-xl text-center font-bold">Login now!</h1>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-green-400 hover:bg-green-500 hover:text-white rounded-full mt-4"><MdOutlineLogin className='text-xl' />Login</button>
                            <p className='text-center my-2'>Have not any Account ? please <Link to={'/signup'} className='text-blue-600 '>Sign Up</Link></p>
                            <div><GoogleLogin></GoogleLogin></div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;