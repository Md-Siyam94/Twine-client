import React, { useContext } from 'react';
import GoogleLogin from '../../components/shared/GoogleLogin';
import { MdOutlineLogin } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, } from 'react-hook-form';
import AuthProvider, { AuthContext } from '../../provider/AuthProvider';

const Signup = () => {
    const { signUp, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const name = data?.name;
        const email = data?.email;
        const password = data?.password;
        const gender = data?.gender;

        signUp(email, password)
            .then(res => {
                if (gender === "Male" || gender === "Others") {
                    // if user is a male or others gender
                    updateUserProfile({ displayName: name, photoURL: "https://i.ibb.co.com/cMZJGjn/Screenshot-2025-11-27-184724.png" })
                    .then(()=>{
                        navigate("/")
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                } else {
                    // if user is a Female
                    updateUserProfile({ displayName: name, photoURL: "https://i.ibb.co.com/N2P0P4BD/Screenshot-2025-11-27-231315.png" })
                    .then(()=>{
                        navigate("/")
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                }

            })
            .catch(err => {
                console.log(err);
            })

    }
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
                        <h1 className="text-xl text-center font-bold">Sign up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <fieldset className="fieldset">
                                {/* name */}
                                <label className="label">Name</label>
                                <input type="text" className="input" placeholder="Name" {...register("name", { required: true })} />
                                {errors.name && <span className='font-semibold  text-red-500'>This field is required</span>}
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
                                {errors.email && <span className='font-semibold  text-red-500'>This field is required</span>}
                                {/* password */}
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" {...register("password", { required: true , minLength: 6})} />
                                {errors.password && <span className='font-semibold  text-red-500'>This field is required</span>}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                {/* gender */}
                                <label className="label">Gender</label>
                                <div className='flex justify-evenly'>
                                    <label className="">
                                        <input {...register("gender", { required: true })} type="radio" value={"Male"}
                                            className="radio mr-1.5 bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" />
                                        Male
                                    </label>
                                    <label className="">
                                        <input {...register("gender")} type="radio" value={"Female"}
                                            className="radio mr-1.5 bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" />
                                        Female
                                    </label>
                                    <label className="">
                                        <input {...register("gender")} type="radio" value={"Others"}
                                            className="radio mr-1.5 bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" />
                                        Others
                                    </label>
                                </div>
                                {errors.gender && <span className='font-semibold  text-red-500'>Select a gender</span>}
                                <button className="btn bg-teal-600 hover:bg-teal-700 text-white rounded-full mt-4"><MdOutlineLogin className='text-xl' />Sign up</button>
                                <p className='text-center my-2'>Already have an Account ? please <Link to={'/signup'} className='text-blue-600 '>Login</Link></p>
                                <div><GoogleLogin></GoogleLogin></div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;