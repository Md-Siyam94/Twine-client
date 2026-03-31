import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import AOS from 'aos'
import * as motion from "motion/react-client"
import useIsAdmin from '../hooks/useIsAdmin';
import { TbEdit, TbTrash } from 'react-icons/tb';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { AuthContext } from '../provider/AuthProvider';
import useCartProducts from '../hooks/useCartProducts';

const ProductCard = ({ product, refetch }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const isAdmin = useIsAdmin()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    // Edit product
    const handleEdit = (id) => {
        console.log(id);
    }

    // Delete product
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/products/${id}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "This product has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    // product add to card
    const handleAddToCart = (id) => {

        if (!user) {
            navigate('/login')
        }
        // const product = products.filter(singleProduct=> singleProduct?._id === id)
        const productInfo = {
            userEmail: user?.email,
            userName: user?.displayName,
            productName: product?.name,
            productId: product?._id,
            productImage: product?.image,
            description: product?.description,
            material: product?.material,
            brand: product?.brand,
            price: product?.price,
            size: product?.size,
            color: product?.color,

        }
        // console.log(productInfo);
        axiosPublic.post("/cart_products", productInfo)
            .then(res => {
                if (res?.data?.success) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product has been added to cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
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

    useEffect(() => {
        AOS.init({
            duration: 600,
            delay: 20,

        })
    }, [])
    return (
        <SwiperSlide data-aos="fade-up" data-aos-easing="ease-in-out"
            data-aos-mirror="true" className='aos-animate aos-init'>
            <motion.div whileHover={{ scale: 1.03 }} className="card bg-base-100 h-full shadow-sm   ">
                <div className='right-0 text-end'>
                    {
                        isAdmin && location.pathname !== "/" ? <div className='flex gap-3 items-center justify-end'>
                            <button onClick={() => handleEdit(product?._id)} className='text-lg font-semibold  cursor-pointer'><TbEdit className="text-2xl text-green-600" /></button>
                            <button onClick={() => handleDelete(product?._id)} className='text-lg font-semibold  cursor-pointer'><TbTrash className="text-2xl text-red-600" /></button>
                        </div> : <></>
                    }
                </div>
                <Link to={`/product-details/${product?._id}`}>
                    <figure>
                        <img
                            className='lg:h-44 object-contain w-full h-32 '
                            src={product?.image}
                            alt={product?.category} />
                    </figure>
                </Link>
                <div className="px-3 pb-4 ">
                    <h2 className="card-title ">
                        {product?.name}
                    </h2>
                    {/* <p className=" text-sm">Price: <span className='text-md font-semibold'>{product?.price} {product?.currency}</span></p> */}
                    <Link to={`/product-details/${product?._id}`}>
                        <p className='text-sm opacity-60'>{product?.description?.slice(0, 40)}...more</p>
                    </Link>
                    {
                        product?.descountPrice ? <p className='text-lg text-amber-600 font-semibold'><span className='line-through'>{product?.price}</span> <span>{product?.descountPrice}</span> ৳ </p> : <p className='text-lg text-amber-600 font-semibold'><span>{product?.price}</span> ৳ </p>
                    }
                    <div className="card-actions  justify-center">
                        <button onClick={() => handleAddToCart(product?._id)} className="border  border-teal-600 text-teal-600 cursor-pointer hover:text-white hover:bg-teal-700 py-2 font-semibold px-8 rounded-full   ">Add to Cart</button>
                    </div>
                </div>
            </motion.div>
        </SwiperSlide>
    );
};

export default ProductCard;