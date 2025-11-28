import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CategoryProducts from "../../components/CategoryProducts";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const params = useParams()
    const product = useLoaderData({})
    const [products, setProducts] = useState([])
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { name, description, price, _id, currency, size, color, inStock, material, brand, image, category } = product || {}

    // getting products by category 
    useEffect(() => {
        fetch(`${import.meta.env.VITE_baseAPI}/products/category-products/${category}`)
            .then(res => res.json())
            .then(data => {
                const products = data.filter(p => p._id !== _id)
                setProducts(products)
            })
    }, [category])

    // product add to card
    const handleAddToCart = (id) => {
        const productInfo = {
            userEmail: user?.email,
            userName: user?.displayName,
            productName: name,
            productId: _id,
            productImage: image,
            description: description,
            material: material,
            brand: brand,
            price: price,
            size: size,
            color: color,

        }
        console.log(productInfo);
        axiosPublic.post("/cart_products", productInfo)
            .then(res => {
                if (res?.data?.success) {
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


    // add product in wishlist
    const handleAddToWishlist = (id) => {
        const productInfo = {
            userEmail: user?.email,
            userName: user?.displayName,
            productName: name,
            productId: _id,
            productImage: image,
            description: description,
            material: material,
            category: category,
            inStock: inStock,
            brand: brand,
            price: price,
            size: size,
            color: color,

        }
        console.log(productInfo);
        axiosPublic.post("/wishlist", productInfo)
            .then(res => {
                console.log(res?.data);
                if (res?.data?.success) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product has been added to wishlist",
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
    return (
        <div className="w-10/12 py-14  mx-auto mt-5 rounded-2xl grid grid-cols-12 ">
            <div className="flex  bg-base-100 col-span-9 py-4 shadow-sm">
                <figure className="px-10 ">
                    <img
                        className="h-96 w-96 p-7 "
                        src={image}
                        alt={category} />
                </figure>
                <div className="">
                    <h2 className="card-title">
                        {name}
                        <div className="badge">({material})</div>
                    </h2>
                    <p className=" my-4 text-gray-500">Brand: <span className="text-blue-500  ">{brand}</span></p>
                    <p className=" my-4 text-gray-500">Category: <span className="text-blue-500  ">{category}</span></p>

                    <p className="my-4">{inStock ? <div className="text-green-500">In Stock</div> : <div className="text-red-500">Not available</div>}</p>
                    <p className="flex  gap-2"> Size: {size?.join(", ")}
                    </p>
                    <p className="flex gap-2 my-4">color: {color?.join(", ")}
                    </p>
                    <p>TK. <span className="text-lg font-semibold">{price} {currency}</span></p>
                    <div className="my-6 flex gap-4">
                        <button  onClick={() => handleAddToCart(_id)} type="button" className="py-3 px-10  rounded-lg bg-teal-400 hover:bg-teal-500 hover:cursor-pointer hover:text-white flex gap-2">Add to Cart<RiShoppingCartLine className='text-2xl' /></button>
                        <button onClick={() => handleAddToWishlist(_id)} type="button" className="py-3 px-10 rounded-lg bg-teal-400 hover:bg-teal-500 hover:cursor-pointer hover:text-white flex gap-2">Add to Wishlist<FaRegHeart className="text-2xl" /></button>
                    </div>
                </div>
            </div>
            <div className="col-span-3 px-4 lg:max-h-[calc(100vh-130px)] overflow-y-scroll">
                <h1 className="text-xl font-semibold ">More products</h1>
                <div>

                    {
                        products.map((signleProduct) => <Link to={`/product-details/${signleProduct?._id}`} key={signleProduct?._id} className="py-2 my-2  flex gap-4 border-b border-b-gray-400 ">
                            <img className="h-16 w-16 object-cover" src={signleProduct?.image} alt="product image" />
                            <div>
                                <h2>{signleProduct?.name}</h2>
                                <p className="text-sm">Brand: {signleProduct?.brand}</p>
                            </div>

                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;