import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
import useWishlistProducts from '../../../hooks/useWishlistProducts';
import { AiTwotoneDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Wishlist = () => {
    const [wishlistProducts, refetch] = useWishlistProducts()
    const axiosPublic = useAxiosPublic()
     // delete product from cart
        const handleDelete = (id) => {
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
                    axiosPublic.delete(`/wishlist/${id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data?.deletedCount) {
                                refetch()
    
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "product has been Deleted",
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
        <div>
            <div className="overflow-x-auto col-span-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Description</th>
                            <th>Job</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlistProducts.map(wishlistProduct => {
                                return <tr key={wishlistProduct?._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <Link to={wishlistProduct?.productImage} >
                                                    <img
                                                        className='w-24  object-cover'
                                                        src={wishlistProduct?.productImage}
                                                        alt="product Image" />
                                                </Link>
                                            </div>
                                            <div>
                                                <div className="font-bold">{wishlistProduct?.productName}</div>
                                                <div className="text-sm opacity-50">{wishlistProduct?.brand}</div>
                                                <div className='font-semibold'>price: {wishlistProduct?.price} Tk</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{wishlistProduct?.description}</td>
                                    <td>
                                      <span>color: {wishlistProduct?.color?.join(", ")}</span>
                                        <br />
                                        <span className="badge badge-ghost badge-sm">size: {wishlistProduct?.size?.join(", ")}</span>
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
                                            <button onClick={() => handleDelete(wishlistProduct._id)} className=""><AiTwotoneDelete className=' text-red-300 hover:text-red-400 cursor-pointer text-2xl'/></button>
                                        </motion.div>
                                    </th>
                                    <td className='w-32 '>
                                        <button type='button' className='py-2 px-3 cursor-pointer rounded-xl w-32 bg-teal-700 text-white hover:bg-teal-800 '>Add To Cart</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;