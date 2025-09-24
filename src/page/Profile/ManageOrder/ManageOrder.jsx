import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const axiosSecure = useAxiosSecure();

  const fetchOrders = async () => {
    try {
      const response = await axiosSecure.get("/manageorder");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ Handle product status change
  const handleProductStatusChange = async (orderId, productId, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Completed" : "Pending";

    try {
      await axiosSecure.patch(`/manageorder/${orderId}/product/${productId}`, {
        status: newStatus,
      });

      // ✅ Update state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? {
                ...order,
                cart: order.cart.map((product) =>
                  product._id === productId
                    ? { ...product, status: newStatus }
                    : product
                ),
              }
            : order
        )
      );
    } catch (error) {
      console.error("Error updating product status:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {orders.map((order, orderIndex) =>
        order.cart.map((product, productIndex) => (
          <div
            key={`${order._id}-${product._id}`}
            className="bg-white shadow-lg rounded-2xl p-5 border hover:shadow-xl transition-all duration-300"
          >
            {/* Order Info */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-500">
                <span className="font-semibold">SL:</span> {orderIndex + 1}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  product.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {product.status}
              </span>
            </div>

            {/* Product Section */}
            <div className="mb-4">
              <img
                src={product.photos}
                alt="Product"
                className="w-32 h-32 object-cover rounded-lg mx-auto mb-3 border"
              />
              <h2 className="text-lg font-bold">{product.product_name}</h2>
              <p className="text-gray-600">{product.brand}</p>
              <p className="text-gray-600 capitalize">{product.category}</p>
              <p className="text-xl font-bold text-green-600 mt-2">
                {product.price} <span className="text-lg">৳</span>
              </p>
            </div>

            {/* Customer Section */}
            <div className="border-t pt-3 text-sm text-gray-700 space-y-1 mb-3">
              <h3 className="font-semibold text-gray-900 mb-1">Customer Info</h3>
              <p><span className="font-medium">Name:</span> {order.customer_name}</p>
              <p><span className="font-medium">Email:</span> {order.customer_email}</p>
              <p><span className="font-medium">Phone:</span> {order.customer_phone}</p>
              <p><span className="font-medium">City:</span> {order.customer_city}</p>
              <p><span className="font-medium">Area:</span> {order.customer_area}</p>
              <p><span className="font-medium">Address:</span> {order.customer_address}</p>
            </div>

            {/* Action Button */}
            <button
              onClick={() =>
                handleProductStatusChange(order._id, product._id, product.status)
              }
              className={`w-full py-2 rounded-lg font-semibold ${
                product.status === "Pending"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {product.status === "Pending"
                ? "Mark as Completed"
                : "Mark as Pending"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ManageOrder;
