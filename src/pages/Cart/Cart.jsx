import React from 'react';
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

    // const singleSize = size.join(", ")
    // const singleColor = color.join(", ")

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
        <div className='grid grid-cols-12 gap-5 pb-16 px-20 pt-5'>
            <div className="overflow-x-auto lg:col-span-8 col-span-12">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Description</th>
                            <th>Job</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProdcuts.map(cartProdcut => {
                                return <tr key={cartProdcut?._id}>
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
                                    <td>{cartProdcut?.description}</td>
                                    <td>
                                      <span>color: {cartProdcut?.color?.join(", ")}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">size: {cartProdcut?.size?.join(", ")}</span>
                                    </td>
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
            <div className='lg:col-span-4 col-span-12  border h-screen rounded-xl'>
                <Feature></Feature>
            </div>
        </div>
    );
};

export default Cart;