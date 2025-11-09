import { useState } from "react";
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const [uploading, setUploading] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <div className="border grid grid-cols-12 gap-12">
            <form onSubmit={handleSubmit(onSubmit)} className="border rounded-2xl p-10 col-span-7 ">
                <fieldset className="fieldset">
                    {/* <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" /> */}

                    {/* product name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label><br />
                        <input type="text" {...register("name")} placeholder="Product Name" className="input input-bordered w-full" />
                        <div>
                            {errors.name?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* product category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Category</span>
                        </label><br />
                        <input type="text" {...register("category")} placeholder="Product category" className="input input-bordered w-full" />
                        <div>
                            {errors.category?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* brand */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Brand</span>
                        </label><br />
                        <input type="text" {...register("brand")} placeholder="Brand name" className="input input-bordered w-full" />
                        <div>
                            {errors.brand?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* metarial */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product metarial</span>
                        </label><br />
                        <input type="text" {...register("metarial")} placeholder="metarial name" className="input input-bordered w-full" />
                        <div>
                            {errors.metarial?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </div>
                    {/* price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label><br />
                        <input type="number" {...register("price")} placeholder="Product price" className="input input-bordered w-full" />
                        <div>
                            {errors.price?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This filed is required !</p>}
                        </div>
                    </div>
                    {/* description */}
                    <label className="form-control my-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div><br />
                        <textarea {...register("description")} className="textarea textarea-bordered h-24 w-full" placeholder="Write about product" ></textarea>
                        <div>
                            {errors.description?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>This field is required !</p>}
                        </div>
                    </label>
                    {/* image */}
                    {/* <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Add image</span>
                    </div>
                    <input multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    <div>
                        {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select an Image for package</p>}
                    </div>
                </label> */}

                    <div>
                        <button className="btn btn-info text-white mt-8">
                            {
                                uploading ? "Posting..." : "Post story"
                            }
                        </button>
                    </div>
                </fieldset>
            </form>
            <form onSubmit={handleSubmit(onSubmit)} className="border rounded-2xl p-10 col-span-5">
                <fieldset className="fieldset">

                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Add image</span>
                        </div>
                        <input multiple type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        <div>
                            {errors.image?.type === 'required' && <p role="alert" className='text-red-600 mt-2'>Please select an Image for package</p>}
                        </div>
                    </label>
                </fieldset>
            </form>
        </div>
    );
};

export default AddProduct;