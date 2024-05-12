import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from 'sweetalert2';

const AddProduct = () => {
    const axiosPublic = useAxiosPublic();

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const description = form.description.value;
        const photos = form.photo.value;

        const newProduct = { name, price, brand, category, description, photos };
        console.log(newProduct);

        // Send data to the server
        axiosPublic.post('/product', newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Product added to the database',
                    });
                    // Reset form here if needed
                }
            })
            .catch(error => {
                console.error('Error adding product:', error);
            });
    }

    return (
        <div>
            <div className='p-4'>
                <div className="max-w-lg mx-auto p-4 border border-slate-950 rounded-lg">
                    <div className=''>
                        <h2 className='text-2xl fint-font-extrabold text-center'>Add New Product</h2>
                    </div>
                    <form onSubmit={handleAddProduct}>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Photo URL:</label>
                            <input type="url" id="photo" name="photo" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter Photo URL" />
                            {/* <input type="file" id="photo" name="photo" accept="image/jpeg, image/png" className="w-full px-3 py-2 border rounded-lg" /> */}
                            {/* <input type="file" className="w-full px-3 py-2 border rounded-lg" name="profileImage" id="photo"></input> */}

                        </div>
                        <div className='flex gap-5'>
                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Product Name:</label>
                                    <input type="text" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Name" />

                                </div>

                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Brand Name:</label>
                                    <input type="text" id="brand" name="brand" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Brand Name" />
                                </div>
                            </div>

                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Price:</label>
                                    <input type="number" id="price" name="price" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Price" />
                                </div>

                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Category:</label>
                                    <input type="text" id="category" name="category" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Category Name" />

                                </div>
                            </div>
                        </div>

                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Description:</label>
                            <textarea id="description" name="description" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Short Description"></textarea>
                        </div>


                        <input type="submit" value="Add Product" className="btn btn-block bg-stone-700 hover:bg-black text-white" />

                    </form >
                </div >
            </div>
        </div >
    );
};

export default AddProduct;
