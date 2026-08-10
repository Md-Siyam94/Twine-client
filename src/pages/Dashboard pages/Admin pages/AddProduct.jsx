import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import axios from "axios";
import ImageUploader from "../../../components/ImageUploader";
import { Tag } from "lucide-react";



const img_hosting_key = import.meta.env.VITE_img_hosting_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const AddProduct = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [uploading, setUploading] = useState(false)
    const [images, setImages] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        setUploading(true)
        //   console.log(images);
        
           const uploadImages = images.map(async (file) => {
                const imageFile = { image: file?.file}
                console.log(file?.file);
                // const formData = new FormData()

                // formData.append("image", file)
                const res = await axios.post(img_hosting_api, imageFile, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });
               
                return res?.data?.data.url
            })
        
const imageUrls = await Promise.all(uploadImages);
console.log(imageUrls.length);

        // console.log(res?.data?.data?.display_url);
        if (imageUrls.length > 0) {
            const productInfo = {
                name: data?.name,
                brand: data?.brand,
                price: data?.price,
                category: data?.category,
                images: imageUrls,
                sizes: data.size ? data.size.split(",") : [],
                colors: data?.color ? data?.color.split(",") : [],
                material: data?.material,
                targetAudience: data?.targetAudience,
                description: data?.description,


            }
            // console.log(productInfo);
            axiosSecure.post('/products', productInfo)
                .then(res => {
                    // console.log(res.data);
                    if (res?.data?.success) {
                        setUploading(false)
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Product has been uploaded",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(err => {
                    console.log('error from add product', err);
                })
        }

        // console.log(data);

    }
    return (
        <div className=" grid grid-cols-12 gap-8">
            <form onSubmit={handleSubmit(onSubmit)} className=" rounded-xl p-4 col-span-7 bg-base-100 ">
                <fieldset className="fieldset">
                    {/* <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" /> */}

                    {/* product name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-sm mb-1">Product Name<span className="text-red-500 text-lg">*</span></span>
                        </label><br />
                        <input type="text" {...register("name")}  placeholder="e.g. Designer Georgette Saree" className="input input-bordered w-full" />
                        <div>
                            {errors.name?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* product category */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-sm mb-1">Product Category<span className="text-red-500 text-lg">*</span></span>
                            </label><br />
                            <input type="text" {...register("category")} placeholder="e.g. T-shirt" className="input input-bordered w-full" />
                            <div>
                                {errors.category?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                            </div>
                        </div>
                        {/* brand */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-sm mb-1">Product Brand</span>
                            </label><br />
                            <input type="text" {...register("brand")} placeholder="Brand name" className="input input-bordered w-full" />
                            <div>
                                {errors.brand?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                            </div>
                        </div>
                    </div>
                    {/* material */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-sm mb-1">Product metarial</span>
                        </label><br />
                        <input type="text" {...register("material")} placeholder="e.g. cotton or silk " className="input input-bordered w-full" />
                        <div>
                            {errors.material?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* sizes */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-sm mb-1">Product sizes</span>
                        </label><br />
                        <input type="text" {...register("size")} placeholder="e.g. L, M, XL" className="input input-bordered w-full" />
                        <div>
                            {errors.size?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>

                    {/* colors */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-sm mb-1">Product colors</span>
                        </label><br />
                        <input type="text" {...register("color")} placeholder="e.g. Red, Blue, Orange " className="input input-bordered w-full" />
                        <div>
                            {errors.color?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* Price and Discount Price */}
                    <div className="grid grid-cols-2 gap-4 justify-evenly items-center ">
                        {/* price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-sm mb-1">Price</span>
                            </label><br />
                            <input type="number" {...register("price")} placeholder="Product price" className="input input-bordered w-full" />
                            <div>
                                {errors.price?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This filed is required !</p>}
                            </div>
                        </div>
                        {/* discount price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-sm mb-1">Discount price</span>
                            </label><br />
                            <input type="number" {...register("discountPrice")} placeholder="Product price" className="input input-bordered w-full" />
                            <div>
                                {errors.discountPrice?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This filed is required !</p>}
                            </div>
                        </div>
                    </div>
                    {/* price & audiance */}
                    <div className="grid grid-cols-2 gap-4 justify-evenly items-center ">
                        {/* In stock */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-sm mb-1">In Stock</span>
                            </label><br />
                            <input type="number" {...register("inStock")} placeholder="Stock number" className="input input-bordered w-full" />
                            <div>
                                {errors.inStock?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This filed is required !</p>}
                            </div>
                        </div>
                        {/* audiance */}
                        <div>
                            <label className="label">
                                <span className="label-text text-black text-sm mb-1">Audience</span>
                            </label><br />
                            <select {...register("targetAudience", { required: true })} defaultValue="choose a audience" className="select select-success">
                                <option disabled={true}>choose a audience</option>
                                <option value={"Men"}>Men</option>
                                <option value={"Women"}>Women</option>
                                <option value={"Kids"}>Kids</option>
                            </select>
                        </div>
                    </div>
                    {/* Tags */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black text-sm mb-1">Product tags</span>
                        </label><br />
                        <input type="text" {...register("tags", { required: true })} placeholder="e.g. Daily were " className="input input-bordered w-full" />
                        <div>
                            {errors.tasg?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>

                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text text-black text-sm mb-1">Description</span>
                        </div><br />
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24 w-full" placeholder="Write about product" ></textarea>
                        <div>
                            {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </label>
                    <div>
                        <button className="bg-teal-600 w-48 text-md py-3 rounded-full text-white bg-linear-80 from-teal-500 to-gray-500
                         mt-8">
                            {
                                uploading ? "Uploading..." : "Uploade product"
                            }
                        </button>
                    </div>
                </fieldset>
            </form>
            <form onSubmit={handleSubmit(onSubmit)} className=" bg-base-100 rounded-xl col-span-5">
                <fieldset className="fieldset">

                    {/* <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black text-sm mb-1">Add image</span>
                        </div>
                        <input multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        <div>
                            {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select an Image for package</p>}
                        </div>
                    </label> */}

                    {/* Image uploader — takes the wider column */}
                    <section className="lg:col-span-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-5 flex items-center gap-2">

                                <h2 className="text-base font-semibold">Product images</h2>
                            </div>
                            <ImageUploader images={images} onChange={setImages} />
                        </div>
                    </section>
                </fieldset>
            </form>
        </div>
    );
};

export default AddProduct;