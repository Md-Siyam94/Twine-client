import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CategoryProducts from "../../components/CategoryProducts";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const params = useParams()
    const product = useLoaderData()
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { name, description, price, _id, currency, size, color, inStock, material, brand, image, category } = product || {}

    const singleSize = size.join(", ")
    const singleColor = color.join(", ")


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
                console.log(res?.data);
                if (res?.data?.success) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product has been added to cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }else{
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
        <div className="w-10/12 py-14  mx-auto mt-5 rounded-2xl shadow grid grid-cols-12 ">
            <div className="flex  bg-base-100 col-span-9 py-4 shadow-sm">
                <figure className="px-10 ">
                    <img
                        className="h-96  p-7 "
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
                    <p className="flex  gap-2"> Size: {singleSize}
                    </p>
                    <p className="flex gap-2 my-4">color: {singleColor}
                    </p>
                    <p>TK. <span className="text-lg font-semibold">{price} {currency}</span></p>
                    <div className="my-6 flex gap-4">
                        <button onClick={() => handleAddToCart(_id)} type="button" className="py-3 px-10 rounded-lg bg-teal-400 hover:bg-teal-500 hover:text-white flex gap-2">Add to Cart<RiShoppingCartLine className='text-2xl' /></button>
                        <button type="button" className="py-3 px-10 rounded-lg bg-teal-400 hover:bg-teal-500 hover:text-white flex gap-2">Add to Wishlist<FaRegHeart className="text-2xl" /></button>
                    </div>
                </div>
            </div>
            <div className="col-span-3 ">
                {/* <CategoryProducts category={category}></CategoryProducts> */}
            </div>
        </div>
    );
};

export default ProductDetails;