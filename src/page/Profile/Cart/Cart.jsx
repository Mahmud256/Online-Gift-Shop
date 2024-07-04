import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useLocation from '../../../hooks/useLocation';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0); // Parse price to float
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [location] = useLocation();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    const handleOrder = async () => {
        const orderDetails = {
            amount: totalPrice,
            currency: 'BDT',
            customer_name: location[0].name, // Dynamic customer name
            customer_email: location[0].email, // Dynamic customer email
            customer_phone: location[0].phone, // Dynamic customer phone
            customer_city: location[0].city,
            customer_area: location[0].area,
            customer_address: location[0].address,

            cart: cart.map(product => ({
                product_name: product.name,
                brand: product.brand,
                category: product.category,
                description: product.description,
                photos: product.photos
            }))
        };

        try {
            await axiosSecure.post('/manageorder', orderDetails);
        } catch (error) {
            console.error('Error managing order:', error);
        }
    };

    const handlePayment = async () => {
        const paymentDetails = {
            amount: totalPrice,
            currency: 'BDT',
            product_name: 'Your Products',
            customer_name: 'John Doe', // Replace with dynamic customer name
            customer_email: 'john@example.com', // Replace with dynamic customer email
            customer_phone: '0123456789', // Replace with dynamic customer phon
        };

        try {
            // Manage order first
            await handleOrder();

            // Initiate payment
            const response = await axiosSecure.post('/initiate-payment', paymentDetails);
            const data = response.data;
            if (data.url) {
                // Clear the cart after initiating the payment
                cart.forEach(async product => {
                    await axiosPublic.delete(`/cart/${product._id}`);
                });
                refetch();

                // Redirect to the payment gateway
                window.location.href = data.url;
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Products: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>
                <button onClick={handlePayment} className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product, index) => (
                            <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex products-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.photos} alt="Product" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600" />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
