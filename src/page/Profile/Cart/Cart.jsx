import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';



const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0); // Parse price to float

    const axiosPublic = useAxiosPublic();

    // const [quantity, setQuantity] = useState(1);

    // const increaseQuantity = () => {
    //     setQuantity(quantity + 1);
    // };

    // const decreaseQuantity = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // };

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
                console.log(result);
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
                    })

            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">products: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice}</h2>

                {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn btn-primary">Pay</button>
                </Link> :
                    <button disabled className="btn btn-primary">Pay</button>
                }

            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((product, index) => <tr key={product._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex products-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.photos} alt="Avatar Tailwind CSS Component" />
                                            </div>

                                            {/* Quantity Controls */}
                                            {/* <div className="flex items-center mb-4">
                                                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded" onClick={decreaseQuantity}>-</button>
                                                <span className="mx-2">{quantity}</span>
                                                <button className="px-2 py-1 bg-gray-200 text-gray-700 rounded" onClick={increaseQuantity}>+</button>
                                            </div> */}

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>${product.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;