import React, { useContext, useState } from 'react';
import GoogleLogin from '../../components/shared/GoogleLogin';
import { MdOutlineLogin } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState("")
       const { register, handleSubmit, reset, formState: { errors } } = useForm();
       const onSubmit = async(data)=>{
        setError("")
        const email = data?.email;
        const password = data?.password;

        signIn(email, password)
        .then(()=>{
            navigate("/")
        })
        .catch(err=>{
            if(err?.message.slice(16,50) === "(auth/invalid-credential)."){
                setError("Email or password is incorrect")
            }
            // console.log(err.message.slice(16,50));
        })
       }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content w-11/12 flex-col lg:flex-row">
                <div className="text-center hidden lg:block lg:text-left">

                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:max-w-sm lg:max-w-md w-full mx-auto py-10 shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-xl text-center font-bold">Login now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <fieldset className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" {...register("email", {required: true})} className="input" placeholder="Email" />
                                {errors.email && <span className=' text-red-500'>This field is required</span>}
                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password"  {...register("password", {required: true})} className="input" placeholder="Password" />
                                {errors.password && <span className=' text-red-500'>This field is required</span>}
                                <div><a className="link link-hover ">Forgot password?</a></div>
                                <p className=' text-red-500'>{error}</p>
                                <button className="btn bg-teal-600 hover:bg-teal-700 text-white rounded-full mt-4"><MdOutlineLogin className='text-xl' />Login</button>
                                <p className='text-center my-2'>Have not any Account ? please <Link to={'/signup'} className='text-blue-600 '>Sign Up</Link></p>
                                <div><GoogleLogin></GoogleLogin></div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;