import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { BsCart4 } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import Logout from '../../page/Logout/Logout';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useFilteredProduct from '../../hooks/useFilterProduct';

const Navbar = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  const [hovered, setHovered] = useState({ cart: false });
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  // Get all products
  const { filteredProduct } = useFilteredProduct();

  // Filter suggestions
  useEffect(() => {
    if (!Array.isArray(filteredProduct)) return;

    if (searchTerm.trim() === '') {
      if (suggestions.length > 0) {
        setSuggestions([]);
      }
      setShowDropdown(false);
      return;
    }

    const matches = filteredProduct.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const newSuggestions = matches.slice(0, 5);

    // Only update if actually different
    if (JSON.stringify(newSuggestions) !== JSON.stringify(suggestions)) {
      setSuggestions(newSuggestions);
    }
    setShowDropdown(true);
  }, [searchTerm, filteredProduct, suggestions]); // dependencies remain

  const handleHover = (key, value) => {
    setHovered((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearchSubmit = () => {
    if (suggestions.length > 0) {
      navigate(`/details/${suggestions[0]._id}`);
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (productId, productName) => {
    setSearchTerm(productName);
    navigate(`/details/${productId}`);
    setShowDropdown(false);
  };

  return (
    <nav className="p-4 bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg lg:text-5xl font-bold">
            <a href="/">OGS</a>
          </h2>

          {/* Search Box */}
          <div className="relative w-1/2">
            <div className="flex w-full rounded-md overflow-hidden">
              <input
                type="text"
                className="block w-full p-3 pl-4 outline-none bg-[#eaefef]"
                placeholder="Search in OGS"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => {
                  if (searchTerm.trim()) setShowDropdown(true);
                }}
              />
              <button
                className="p-2 px-5 text-lg font-medium text-white bg-gray-700"
                onClick={handleSearchSubmit}
              >
                Search
              </button>
            </div>

            {/* Suggestions */}
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white w-full border mt-1 rounded shadow-md max-h-60 overflow-y-auto">
                {suggestions.map((item) => (
                  <li
                    key={item._id}
                    onClick={() => handleSuggestionClick(item._id, item.name)}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Cart & Profile */}
          <div className="flex items-center space-x-4">
            <a href="/profile/cart">
              <div
                className="flex items-center text-gray-700 hover:font-bold"
                onMouseEnter={() => handleHover('cart', true)}
                onMouseLeave={() => handleHover('cart', false)}
              >
                {hovered.cart ? (
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                ) : (
                  <BsCart4 size={25} />
                )}
                :{cart.length}
              </div>
            </a>

            <div className="dropdown dropdown-hover dropdown-end">
              <a tabIndex={0}>
                <FaRegUser size={23} />
              </a>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <Logout />
                ) : (
                  <a href="/login">
                    <li>
                      <h1>Login</h1>
                    </li>
                  </a>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
