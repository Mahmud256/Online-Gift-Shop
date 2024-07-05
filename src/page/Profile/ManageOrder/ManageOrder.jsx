import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axiosSecure.get('/manageorder');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [axiosSecure]);


    return (
        <div className="flex flex-wrap gap-4">
            {orders.map((order, orderIndex) => (
                order.cart.map((product, productIndex) => (
                    <div key={`${order._id}-${productIndex}`} className="card w-96 bg-white shadow-lg rounded-lg p-4 mb-4">
                        <div className="mb-2">
                            <span className="font-bold">SL: </span>{orderIndex + 1}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Product Photos: </span>
                            <img src={product.photos} alt="Product" className="w-12 h-12 inline-block" />
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Order Date: </span>{order.date}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Product Name: </span>{product.product_name}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Product Brand: </span>{product.brand}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Product Category: </span>{product.category}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Product Price: </span>{product.price} <span className="text-lg font-black">৳ </span>
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Customer Name: </span>{order.customer_name}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Customer Email: </span>{order.customer_email}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Customer Phone: </span>{order.customer_phone}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Customer City: </span>{order.customer_city}
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">Customer Area: </span>{order.customer_area}
                        </div>
                        <div>
                            <span className="font-bold">Customer Address: </span>{order.customer_address}
                        </div>
                    </div>
                ))
            ))}
        </div>
    );
};


export default ManageOrder;
