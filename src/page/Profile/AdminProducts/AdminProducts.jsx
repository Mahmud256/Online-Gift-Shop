// eslint-disable-next-line no-unused-vars
import Swal from 'sweetalert2';
import useProduct from '../../../hooks/useProduct';
import AdminProductsCard from './AdminProductsCard';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useFilteredProduct from '../../../hooks/useFilterProduct';


const AdminProduct = () => {
    const [product, refetch] = useProduct();

    const axiosSecure = useAxiosSecure();

    const { selectedCategory, handleCategoryChange, filteredProduct } = useFilteredProduct();

    const handleRemove = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/product/${_id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            );
                        }
                    })
                // .catch((error) => {
                //     Swal.fire('Access Denied', 'You do not have permission to delete this product.', 'error');
                //     console.error("Error deleting user:", error);
                //     // Handle error as needed
                // });
            }
        });
    }

   

    return (
        <div>
            <h1 className='text-3xl text-red-700 font-bold text-center pt-12' data-aos="fade-up">Our Products</h1>
            <div className="text-center mt-4 flex flex-col items-center">
                <label htmlFor="categorySelect" className="block text-gray-700 text-sm font-bold mb-2">
                    Select Category:
                </label>
                <select
                    id="categorySelect"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="w-40 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
                >
                    <option value="all">All</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Earbuds">Earbuds</option>
                    <option value="Office Equipment">Office Equipment</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Wardrobe">Wardrobe</option>
                    <option value="TV">TV</option>
                </select>
            </div>
            {filteredProduct.length > 0 ?
                <div className="Allserv flex justify-around py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredProduct.map((product) => ( // Changed 'product' to 'filteredProduct'
                            <AdminProductsCard
                                key={product._id}
                                product={product}
                                handleRemove={handleRemove}
                            />
                        ))}
                    </div>
                </div>
                : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}
        </div>
    );
};

export default AdminProduct;