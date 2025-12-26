import React, { useContext, useState } from 'react';
import useCartProducts from '../../hooks/useCartProducts';
import { motion } from "motion/react"
import Feature from '../../components/Feature';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { div } from 'motion/react-client';
import Lottie from 'lottie-react';
import noData from '../../../public/noData.json'
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { FaArrowLeft, FaCheckCircle, FaOpencart } from 'react-icons/fa';

const Cart = () => {
    const [cartProdcuts, refetch] = useCartProducts()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [selected, setSelected] = useState([]);
    const { user } = useContext(AuthContext)
    const [isSubmitting, setSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [submitSuccess, setSubmitSuccess] = useState(true)


    // total price
    const totalPrice = selected?.reduce((sum, pro) => sum + pro?.price, 0)
    const isDisabled = selected.length === 0


    // get product form checkbox
    const handleChange = (e) => {
        const product = JSON.parse(e.target.value);
        if (e.target.checked) {
            setSelected([...selected, product]);
        } else {
            setSelected(selected.filter(item => item?._id !== product?._id));
        }
    };

    // order products
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;

        const phone = form.phone.value;
        const address = form.address.value;
        const special_instructions = form.special_instructions.value;
        console.log(phone, address, special_instructions);

        const orderInfo = {
            email: user?.email,
            userName: user?.displayName,
            transactionId: "",
            phone: phone,
            address: address,
            special_instructions: special_instructions,
            items: selected,
            totalPrice: totalPrice,
            status: "pending"
        }
        if(selected.length === 0){
            return document.getElementById("my_modal_1").close()  &&  Swal.fire({
                position: "top-end",
                icon: "error",
                title: "select products to buy!",
                showConfirmButton: false,
                timer: 1500
              });
           
        }
        axiosSecure.post("/payments/create-ssl-payment", orderInfo)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }

    // delete product from cart
    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/cart_products/${id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data?.deletedCount) {
                            refetch()

                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "product has been canceled",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });

    }
    // close modal
    const hanldeModalclose = () => {
        document.getElementById("my_modal_1").close();
    }
    return (
        <div className='grid grid-cols-12 gap-5 max-h-screen[calc(100vh-100px)] overflow-y-scroll pb-16 px-20 pt-5'>
            {/* cart product section */}
            <div className="overflow-x-auto lg:col-span-8 col-span-12">
                {
                    cartProdcuts.length > 0 ?
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Image</th>
                                    <th>Details</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartProdcuts.map(cartProdcut => {
                                        return <tr key={cartProdcut?._id}>
                                            <td>
                                                <input type="checkbox" onClick={handleChange} value={JSON.stringify(cartProdcut)}
                                                    className="checkbox checkbox-md" />
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <Link to={cartProdcut?.productImage} >
                                                            <img
                                                                className='w-20 h-20 object-cover'
                                                                src={cartProdcut?.productImage}
                                                                alt="product Image" />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{cartProdcut?.productName}</div>
                                                        <div className="text-sm opacity-50">{cartProdcut?.brand}</div>
                                                        <div className='font-semibold'>price: {cartProdcut?.price} Tk</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>color: {cartProdcut?.color?.join(", ")}</span>
                                                <br />
                                                <span className="badge badge-ghost badge-sm">size: {cartProdcut?.size?.join(", ")}</span>
                                            </td>
                                            <td className='text-lg'>-  1  +</td>
                                            <th>
                                                <motion.div

                                                    whileHover={{
                                                        scale: [null, 1, 1.05],
                                                        transition: {
                                                            duration: 0.1,
                                                            times: [0, 0.6, 1],
                                                            ease: ["easeInOut", "easeOut"],
                                                        },
                                                    }}
                                                    transition={{
                                                        duration: 0.1,
                                                        ease: "easeOut",
                                                    }}
                                                >
                                                    <button onClick={() => handleCancel(cartProdcut._id)} className="py-2 px-5 rounded-xl bg-red-300 hover:bg-red-400 hover:text-white">Cancel</button>
                                                </motion.div>
                                            </th>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table> : <div >

                            <Lottie className='h-72 w-full ' animationData={noData} loop></Lottie>
                            <h1 className='text-xl font-semibold text-center'>You haven't added any products to your cart.</h1>
                            <div className='my-3 grid justify-center '>
                                <Link to={"/products"} className='py-2 px-5 w-full mx-auto  rounded-full bg-teal-600 text-white hover:bg-teal-700'>Let's Shoping</Link>
                            </div>
                        </div>
                }
            </div>
            {/* payment section */}
            <div className='lg:col-span-4 col-span-12 w-full grid shadow max-h-[calc(100vh-150px)] p-5 rounded-xl'>
                <h1 className='text-2xl font-semibold'>Payment Info</h1>
                {/* todo: use strip for payment */}
                <div className='mt-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Payment with</legend>
                        <select defaultValue="SSL Commerze" className="select">
                            <option disabled={true}>SSL Commerze</option>
                        </select>
                    </fieldset>
                </div>
                <div className='flex w-full justify-between mt-8'>
                    <h2 className='font-semibold opacity-80'>Total products</h2>
                    <p className=' font-semibold'>{selected?.length}</p>
                </div>
                <div className='flex w-full justify-between mb-8 mt-2'>
                    <h2 className=' font-semibold opacity-80'>Total price</h2>
                    <p className=' font-semibold'>{totalPrice} Tk</p>
                </div>
                {
                    isDisabled && <p className='font-semibold text-red-500 text-sm mb-2'>Selecte atleast 1 product to continue buying</p>
                }
                <button disabled={isDisabled} type='button' onClick={() => document.getElementById('my_modal_1').showModal()} className={isDisabled ? "bg-gray-300 cursor-not-allowed text-lg font-semibold py-2 w-full rounded-lg" : ' text-xl font-semibold py-2 w-full rounded-lg hover:cursor-pointer bg-teal-700 text-white hover:bg-teal-800'}>Buy Products</button>
            </div>

            {/* Open the modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box lg:w-6/12 lg:max-w-4xl ">
                    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 px-4 sm:px-6 lg:px-4">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-10">
                                <div className="flex items-center justify-center mb-4">
                                    <FaOpencart className="h-12 w-12 text-white" />
                                </div>
                                <h1 className="text-3xl font-bold text-center text-white mb-2">
                                    Place Your Order
                                </h1>
                                <p className="text-center text-teal-100">
                                    Fill out the form below and we'll process your order right away
                                </p>
                            </div>

                            {submitSuccess && (
                                <div className="mx-8 mt-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                                    <FaCheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-green-900 font-semibold">Order submitted successfully!</h3>
                                        <p className="text-green-700 text-sm mt-1">
                                            We've received your order and will contact you shortly.
                                        </p>
                                        <button onClick={hanldeModalclose} type='button' className=" flex cursor-pointer gap-2  items-center py-3  font-semibold rounded-full" ><FaArrowLeft />
                                            Go Back</button>
                                    </div>

                                </div>

                            )}

                            {/* form */}
                            <form onSubmit={handleSubmit} className="px-8 py-10 space-y-6">
                                {/* name */}
                                <div>
                                    <label htmlFor="customer_name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        readOnly
                                        type="text"
                                        id="customer_name"
                                        name='name'
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        defaultValue={user?.displayName}
                                    />

                                </div>
                                {/* email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email <span className='text-red-500'>*</span>
                                        </label>
                                        <input
                                            readOnly
                                            type="email"
                                            id="email"
                                            name='email'
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                            defaultValue={user?.email}
                                        />

                                    </div>
                                    {/* phone number */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number <span className='text-red-500'>*</span>
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            id="phone"
                                            name='phone'
                                            pattern="[0-9]*"
                                            minLength="11"
                                            maxLength="11"
                                            className="input validator w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                            placeholder=" 017********"
                                        />
                                        <p className="validator-hint">Must be 11 digits</p>

                                    </div>
                                </div>
                                {/* deliver address */}
                                <div>
                                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Delivery Address <span className='text-red-500'>*</span>
                                    </label>
                                    <textarea
                                        required
                                        id="address"
                                        name='address'
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                                        placeholder="Road/vill, distric, postal code"
                                    />

                                </div>
                                {/* Instructions */}
                                <div>
                                    <label htmlFor="special_instructions" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Special Instructions
                                    </label>
                                    <textarea
                                        id="special_instructions"
                                        name='special_instructions'
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                                        placeholder="Any special requests or delivery instructions..."
                                    />
                                </div>
                                <button onClick={hanldeModalclose} className=" w-full cursor-pointer bg-black/80 text-white font-semibold py-3 px-6 rounded-lg  hover:bg-black/90  transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">Cancel</button>
                                <button
                                    disabled={isSubmitting}
                                    className="w-full cursor-pointer bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-700 hover:to-teal-800   transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        'Confirm Order'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Cart;