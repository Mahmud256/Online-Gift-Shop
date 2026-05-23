import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetailsCard = ({ product }) => {
  const {
    _id,
    name,
    brand,
    price,
    category,
    photos,
    description,
  } = product || {};

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartProduct = {
        productId: _id,
        email: user.email,
        name,
        brand,
        category,
        description,
        photos,
        price,
      };

      axiosSecure.post("cart", cartProduct).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });

          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add products to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2563eb",
        cancelButtonColor: "#ef4444",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {
            state: { from: location },
          });
        }
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10">

        {/* Product Image */}
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-8 relative group">
          <img
            src={photos}
            alt={name}
            className="w-full max-w-md object-contain transition duration-500 group-hover:scale-105"
          />

          {/* Category Badge */}
          <span className="absolute top-5 left-5 bg-blue-600 text-white text-xs px-4 py-2 rounded-full shadow">
            {category}
          </span>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          {/* Brand */}
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
            {brand}
          </p>

          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
            {name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-400 mb-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="text-gray-500 text-sm ml-2">
              (5.0 Reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {description}
          </p>

          {/* Price */}
          <div className="mb-8">
            <span className="text-gray-500 text-lg">
              Price
            </span>

            <h2 className="text-4xl font-extrabold text-blue-600">
              ৳ {price}
            </h2>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Brand
              </p>
              <h4 className="font-bold text-gray-800">
                {brand}
              </h4>
            </div>

            <div className="bg-gray-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Category
              </p>
              <h4 className="font-bold text-gray-800">
                {category}
              </h4>
            </div>
          </div>

          {/* Buttons */}
          <button
            onClick={handleAddToCart}
            className="border-2 flex items-center justify-center gap-3 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition duration-300">

            <FaShoppingCart />
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCard;