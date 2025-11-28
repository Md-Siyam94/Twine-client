import React, { useContext, useEffect, useState } from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
import useWishlistProducts from '../../../hooks/useWishlistProducts';
import { AiTwotoneDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { AuthContext } from '../../../provider/AuthProvider';
import Lottie from 'lottie-react';
import noData from "../../../../public/noData.json"
// import useGetSingleProduct from '../../../hooks/useGetSingleProduct';

const Wishlist = () => {
    const [wishlistProducts, refetch] = useWishlistProducts()
    const axiosPublic = useAxiosPublic()
    // const [productId, setProductId] = useState("")
    const { user } = useContext(AuthContext)
    const [singleProduct, setSingleProduct] = useState({})


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
                        // console.log(res.data);
                        if (res?.data?.deletedCount) {
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


    // post product to cart
    const handleAddToCart = async (id, wishlistId) => {
        //  console.log(id, wishlistId);
        //  setProductId(id)
        const res = await axiosPublic.get(`/products/${id}`)
            .then(res => {

                return res?.data
            })
            .catch(err => {
                console.log(err);
            })

        setSingleProduct(res)

        const productInfo = {
            userEmail: user?.email,
            userName: user?.displayName,
            productName: singleProduct?.name,
            productId: singleProduct?._id,
            productImage: singleProduct?.image,
            description: singleProduct?.description,
            material: singleProduct?.material,
            brand: singleProduct?.brand,
            price: singleProduct?.price,
            size: singleProduct?.size,
            color: singleProduct?.color,

        }
        console.log(productInfo);

        await axiosPublic.post("/cart_products", productInfo)
            .then(res => {
                // console.log(res?.data);
                if (res?.data?.success) {
                    // ToDo: fix bugs
                    axiosPublic.delete(`/wishlist/${wishlistId}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data?.deletedCount) {
                                refetch()
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Product has been added to cart",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })

                } else {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: `${res?.data?.message}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log("error msg", err);
            })
    }

    return (
        <div>
            <div className="overflow-x-auto ">
                {
                    wishlistProducts.length === 0 ? <div className='h-screen'>

                        <Lottie className='h-72 w-full ' animationData={noData} loop></Lottie>
                        <h1 className='text-xl font-semibold text-center'>You haven't added any products to your wishlist.</h1>
                        <div className='my-3 grid justify-center '>
                            <Link to={"/products"} className='py-2 px-5 w-full mx-auto  rounded-full bg-teal-600 text-white hover:bg-teal-700'>Let's Shoping</Link>
                        </div>


                    </div> :
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Details</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody className=''>

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
                                                    <button onClick={() => handleDelete(wishlistProduct?._id)} className=""><AiTwotoneDelete className=' text-red-300 hover:text-red-400  cursor-pointer text-2xl' /></button>
                                                </motion.div>
                                            </th>
                                            <td className='w-32 '>
                                                <button onClick={() => handleAddToCart(wishlistProduct?.productId, wishlistProduct?._id)} type='button' className='py-2 px-3 cursor-pointer rounded-xl w-32 bg-teal-700 text-white hover:bg-teal-800 '>Add To Cart</button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default Wishlist;