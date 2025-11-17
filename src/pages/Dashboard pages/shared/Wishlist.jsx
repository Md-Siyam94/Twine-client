import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

const Wishlist = () => {
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
        </div>
    );
};

export default Wishlist;