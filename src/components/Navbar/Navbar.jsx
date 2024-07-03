import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegListAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { faShoppingCart, faHome, faListAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../../page/Logout/Logout';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { BsCart4 } from 'react-icons/bs';
// import useFilteredProduct from '../../hooks/useFilterProduct';
// import ProductsCard from '../../page/Products/ProductsCard';
// import ProductSearch from '../../page/ProductSearch/ProductSearch';

const Navbar = () => {
  const { user } = useAuth();
  const [cart] = useCart();

  const [isHoveredHome, setIsHoveredHome] = useState(false);
  // const [isHoveredList, setIsHoveredList] = useState(false);
  const [isHoveredOffer, setIsHoveredOffer] = useState(false);
  const [isHoveredCart, setIsHoveredCart] = useState(false);

  // const { filteredProduct } = useFilteredProduct();
  // const [searchTerm, setSearchTerm] = useState('');
  // const [showResults, setShowResults] = useState(false);


  const handleMouseEnterHome = () => {
    setIsHoveredHome(true);
  };

  const handleMouseLeaveHome = () => {
    setIsHoveredHome(false);
  };

  // const handleMouseEnterList = () => {
  //   setIsHoveredList(true);
  // };

  // const handleMouseLeaveList = () => {
  //   setIsHoveredList(false);
  // };


  const handleMouseEnterOffer = () => {
    setIsHoveredOffer(true);
  };

  const handleMouseLeaveOffer = () => {
    setIsHoveredOffer(false);
  };

  const handleMouseEnterCart = () => {
    setIsHoveredCart(true);
  };

  const handleMouseLeaveCart = () => {
    setIsHoveredCart(false);
  };

  // const handleSearch = (show) => {
  //   setShowResults(show);
  // };

  // const filteredProducts = filteredProduct.filter(product =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const navlink = <>
    <ul className="flex text-lg justify-center space-x-4 my-4">
      <li>
        <NavLink to="/">
          <div
            className={`flex items-center text-gray-700`}
            onMouseEnter={handleMouseEnterHome}
            onMouseLeave={handleMouseLeaveHome}
          >
            {isHoveredHome ? (
              <FontAwesomeIcon icon={faHome} size="lg" className="mr-2" />
            ) : (
              <BiHomeAlt2 className="mr-2" />
            )}

            <p className='text-base font-bold m-2'>Home</p>
          </div>
        </NavLink>
      </li>

      {/* <li>
        <NavLink to="/category">
          <div
            className={`flex items-center text-gray-700`}
            onMouseEnter={handleMouseEnterList}
            onMouseLeave={handleMouseLeaveList}
          >
            <span>
              {isHoveredList ? (
                <FontAwesomeIcon icon={faListAlt} size="lg" className="mr-2" />
              ) : (
                <FaRegListAlt className="mr-2" />
              )}
            </span>
            <p className='text-base font-bold m-2'>Shop By Category</p>
          </div>
        </NavLink>
      </li> */}

      {/* <li>
        <NavLink to="/offer">
          <div
            className={`flex items-center text-gray-700`}
            onMouseEnter={handleMouseEnterOffer}
            onMouseLeave={handleMouseLeaveOffer}
          >
            <span>
              {isHoveredOffer ? (
                <FontAwesomeIcon icon={faTags} size="lg" className="mr-2" />
              ) : (
                <MdOutlineLocalOffer className="mr-2" />
              )}
            </span>
            <p className='text-base font-bold m-2'>Special Offers</p>
          </div>
        </NavLink>
      </li> */}
    </ul>
  </>

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-fff flex justify-between items-center">
          {/* Logo */}

          <Link to="/" className="flex-shrink-0">
            <h2 className='text-lg lg:text-5xl font-bold'>OGS</h2>
          </Link>
          {/* Search bar */}
          {/* <div className='max-w-[719px] w-1/2 relative'>
            <ProductSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
          </div> */}

          {navlink}

          {/* Sign in and Cart */}
          <div className="flex items-center space-x-4">
            <Link to="/profile/cart">
              {/* <div className="text-black hover:text-gray-300"><FontAwesomeIcon icon={faShoppingCart} size="lg" />{cart.length}</div> */}
              <div
                className={`flex items-center text-gray-700 hover:font-bold`}
                onMouseEnter={handleMouseEnterCart}
                onMouseLeave={handleMouseLeaveCart}
              >
                <span>
                  {isHoveredCart ? (
                    // <FontAwesomeIcon icon={faTags} size="lg" className="mr-2" />
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                  ) : (
                    <BsCart4 size={25} />
                  )}
                </span>
                :{cart.length}
              </div>
            </Link>
            <div className="dropdown dropdown-hover dropdown-end">
              <a tabIndex={0}><FaRegUser size={23} /></a>
              <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-52">
                {user ? (
                  <Logout />
                ) : (<>
                  <Link to="/login">
                    <li>
                      <h1>Login</h1>
                    </li>
                  </Link></>)
                }
              </ul>
            </div>
          </div>
        </div>
        {/* Navbar links */}
      </div>

      {/* {showResults && filteredProducts.length > 0 && (
        <div className="Allserv flex justify-around py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <ProductsCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      )} */}

    </nav>
  );
}

export default Navbar;
