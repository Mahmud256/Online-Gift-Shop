import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiHomeAlt2 } from "react-icons/bi";
import { faShoppingCart, faHome} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../../page/Logout/Logout';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { BsCart4 } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
const Navbar = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  const [hovered, setHovered] = useState({ home: false, cart: false });

  const handleHover = (key, value) => {
    setHovered((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-fff flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <h2 className="text-lg lg:text-5xl font-bold">OGS</h2>
          </Link>
          <ul className="flex text-lg justify-center space-x-4 my-4">
            <li>
              <NavLink to="/">
                <div
                  className="flex items-center text-gray-700"
                  onMouseEnter={() => handleHover('home', true)}
                  onMouseLeave={() => handleHover('home', false)}
                >
                  {hovered.home ? (
                    <FontAwesomeIcon icon={faHome} size="lg" className="mr-2" />
                  ) : (
                    <BiHomeAlt2 className="mr-2" />
                  )}
                  <p className="text-base font-bold m-2">Home</p>
                </div>
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link to="/profile/cart">
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
            </Link>
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
                  <Link to="/login">
                    <li>
                      <h1>Login</h1>
                    </li>
                  </Link>
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