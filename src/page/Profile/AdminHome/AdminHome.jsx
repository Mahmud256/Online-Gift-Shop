import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const [orders, setOrders] = useState([]);
  const axiosSecure = useAxiosSecure();

  // Fetch orders
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

  // ✅ Calculate stats per product
  const allProducts = orders.flatMap(order =>
    order.cart.map(product => ({ ...product, customer: order.customer_name, email: order.customer_email, date: order.date }))
  );


  const totalOrders = allProducts.length;
  const totalRevenue = allProducts.reduce(
    (sum, product) => sum + Number(product.price || 0),
    0
  );
  const pendingOrders = allProducts.filter(p => p.status === "Pending").length;
  const completedOrders = allProducts.filter(p => p.status === "Completed").length;

  return (
    <div className="p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all">
          <h3 className="text-lg font-semibold text-gray-600">Total Products</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{totalOrders}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all">
          <h3 className="text-lg font-semibold text-gray-600">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {totalRevenue} <span className="text-xl">৳</span>
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all">
          <h3 className="text-lg font-semibold text-gray-600">Pending Products</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">{pendingOrders}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all">
          <h3 className="text-lg font-semibold text-gray-600">Completed Products</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">{completedOrders}</p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4">Orders Information</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">SL</th>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border">Customer</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((product, index) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td> {/* ✅ Serial number works now */}
                  <td className="px-4 py-2 border">{product.product_name}</td>
                  <td className="px-4 py-2 border">{product.customer}</td>
                  <td className="px-4 py-2 border">{product.email}</td>
                  <td className="px-4 py-2 border">{product.date}</td>
                  <td className="px-4 py-2 border">{product.price} ৳</td>
                  <td className="px-4 py-2 border">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${product.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                        }`}
                    >
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
