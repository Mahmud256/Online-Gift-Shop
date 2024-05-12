import Swal from 'sweetalert2';
import useProduct from '../../../hooks/useProduct';
import AdminProductsCard from './AdminProductsCard';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const AdminProduct = () => {
    const [product, refetch] = useProduct();

    const axiosSecure = useAxiosSecure();

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
            <h1 className='text-3xl text-red-700 font-bold text-center pt-12' data-aos="fade-up">Our Services</h1>
            <div className="Allserv flex justify-around py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {product.map((product) => (
                        <AdminProductsCard
                            key={product._id}
                            product={product}
                            handleRemove={handleRemove}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminProduct;
