import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link, useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const params = useParams()
    const product = useLoaderData()
    // console.log(product);
    const { name, description, price, _id, currency, size, color, inStock, material, brand, image, category } = product || {}

    const singleSize = size.join(", ")
    const singleColor = color.join(", ")
    return (
        <div className="w-10/12 mx-auto mt-5 rounded-2xl shadow-md grid grid-cols-12 ">
            <div className="flex  bg-base-100 col-span-9 py-4 shadow-sm">
                <figure className="px-10 ">
                    <img
                        className="h-80 border p-7 "
                        src={image}
                        alt={category} />
                </figure>
                <div className="">
                    <h2 className="card-title">
                        {name}
                        <div className="badge">({material})</div>
                    </h2>
                    <p className="opacity-60 my-4">Brand: <span className="opacity-100">{brand}</span></p>
                    <p>{description}</p>
                    <p className="my-4">{inStock ? <div className="text-green-500">In Stock</div> : <div className="text-red-500">Not available</div>}</p>
                    <p className="flex gap-2"> Size:
                        {
                            singleSize
                        }
                    </p>
                    <p className="flex gap-2 my-4">color:
                        {
                            singleColor
                        }
                    </p>
                    <p>TK. <span className="text-lg">{price} {currency}</span></p>
                    <div className="my-6 flex gap-4">
                       <button type="button"  className="py-3 px-10 rounded-lg bg-teal-400 hover:bg-teal-500 hover:text-white flex gap-2">Add to Cart<RiShoppingCartLine className='text-2xl' /></button>
                       <button type="button"  className="py-3 px-10 rounded-lg bg-teal-400 hover:bg-teal-500 hover:text-white flex gap-2">Add to Wishlist<FaRegHeart className="text-2xl" /></button>
                    </div>
                </div>
            </div>
            <div className="col-span-3">

            </div>
        </div>
    );
};

export default ProductDetails;