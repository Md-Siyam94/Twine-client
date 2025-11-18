import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
import useWishlistProducts from '../../../hooks/useWishlistProducts';

const Wishlist = () => {
    const [wishlistProducts, refetch] = useWishlistProducts()
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
                                                        className='w-20 h-20 object-cover'
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
                                            <button onClick={() => handleCancel(wishlistProduct._id)} className="py-2 px-5 rounded-xl bg-red-300 hover:bg-red-400 hover:text-white">Cancel</button>
                                        </motion.div>
                                    </th>
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