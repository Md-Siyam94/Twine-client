import React, { useState } from 'react';
import useCartProducts from '../../hooks/useCartProducts';
import { motion } from "motion/react"
import Feature from '../../components/Feature';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { div } from 'motion/react-client';

const Cart = () => {
    const [cartProdcuts, refetch] = useCartProducts()
    const axiosPublic = useAxiosPublic()
    const [selected, setSelected] = useState([]);

    // total price
    const totalPrice = selected.reduce((sum, pro) => sum + pro?.price, 0)
    // console.log(totalPrice);

    // get product form checkbox
    const handleChange = (e) => {
        const product = JSON.parse(e.target.value);
        if (e.target.checked) {
            setSelected([...selected, product]);
        } else {
            setSelected(selected.filter(item => item?._id !== product?._id));
        }
    };
    console.log(selected);

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
                        console.log(res.data);
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
    return (
        <div className='grid grid-cols-12 gap-5 h-screen overflow-y-scroll pb-16 px-20 pt-5'>
            <div className="overflow-x-auto lg:col-span-8 col-span-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Image</th>
                            <th>Details</th>
                            <th>Quantity</th>
                            <th></th>
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
                </table>
            </div>
            {/* payment section */}
            <div className='lg:col-span-4 col-span-12 w-full grid shadow max-h-[calc(100vh-150px)] p-5 rounded-xl'>
                <h1 className='text-2xl font-semibold'>Payment Info</h1>
                {/* todo: use strip for payment */}
                <div className=' '>
                    <div className='flex w-full justify-between my-8'>
                        <h2 className='text-lg font-semibold'>Total products</h2>
                        <p className='text-lg font-semibold'>{selected?.length}</p>
                    </div>
                    <div className='flex w-full justify-between my-8'>
                        <h2 className='text-lg font-semibold'>Total price</h2>
                        <p className='text-lg font-semibold'>{totalPrice} Tk</p>
                    </div>
                    <button className='text-xl font-semibold py-2 w-full rounded-lg hover:cursor-pointer bg-teal-700 text-white hover:bg-teal-800'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;