import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const axiosPublic = useAxiosPublic();
    const [image, setImage] = useState(null);
    const product = useLoaderData();
    const { _id } = product || {};

    const handleUpdateProduct = event => {
        event.preventDefault();

        // Upload image
        const formData = new FormData();
        formData.append('image', image);

        axiosPublic.post(image_hosting_api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        .then(response => {
            const imageUrl = response.data.data.url;

            // Get form data

        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const description = form.description.value;
  
        const updatedProduct = { name, price, brand, category, description, photos: imageUrl };

        // Send data to the server
        axiosPublic.put(`product/${_id}`, updatedProduct)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Product Update to the database',
                    });
                }
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });

        })

        
        
        .catch(error => {
            console.error('Error uploading image:', error);
        });
    };

    const handleImageChange = event => {
        setImage(event.target.files[0]);
    }

    return (
        <div>
            <div className='p-4'>
                <div className="max-w-lg mx-auto p-4 border border-slate-950 rounded-lg">
                    <div className=''>
                        <h2 className='text-2xl font-extrabold text-center'>Update Product</h2>
                    </div>
                    <form onSubmit={handleUpdateProduct}>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Photo URL:</label>
                            {/* <input type="url" id="photo" name="photo" defaultValue={product.photos} className="w-full px-3 py-2 border rounded-lg" placeholder="Enter Photo URL" /> */}
                            <input type="file" onChange={handleImageChange} className="w-full px-3 py-2 border rounded-lg" accept="image/jpeg, image/png" />
                       
                        </div>
                        <div className='flex gap-5'>
                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Product Name:</label>
                                    <input type="text" name="name" defaultValue={product.name} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Name" />
                                </div>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Brand Name:</label>
                                    <input type="text" id="brand" name="brand" defaultValue={product.brand} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Brand Name" />
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Price:</label>
                                    <input type="number" id="price" name="price" defaultValue={product.price} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Price" />
                                </div>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Category:</label>
                                    <input type="text" id="category" name="category" defaultValue={product.category} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Category Name" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Description:</label>
                            <textarea id="description" name="description" defaultValue={product.description} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Short Description"></textarea>
                        </div>
                        <input type="submit" value="Update Product" className="btn btn-block bg-stone-700 hover:bg-black text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
