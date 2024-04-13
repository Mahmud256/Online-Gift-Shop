import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegListAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { faShoppingCart, faHome, faListAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Logout from '../../page/Logout/Logout';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredList, setIsHoveredList] = useState(false);
  const [isHoveredOffer, setIsHoveredOffer] = useState(false);

  const handleMouseEnterHome = () => {
    setIsHoveredHome(true);
  };

  const handleMouseLeaveHome = () => {
    setIsHoveredHome(false);
  };

  const handleMouseEnterList = () => {
    setIsHoveredList(true);
  };

  const handleMouseLeaveList = () => {
    setIsHoveredList(false);
  };


  const handleMouseEnterOffer = () => {
    setIsHoveredOffer(true);
  };

  const handleMouseLeaveOffer = () => {
    setIsHoveredOffer(false);
  };


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

      <li>
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
      </li>

      <li>
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
      </li>
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
          <div className='max-w-[719px] w-1/2 relative'>
            <div className="flex w-full rounded-md overflow-hidden">
              <div className="relative flex-1">
                <input type="text" className="block w-full p-3 pl-4 outline-none bg-[#eaefef]" placeholder="Search in OGS" />
              </div>
              <button className="gap-2 p-2 px-5 text-lg font-medium text-white bg-gray-700">Search</button>
            </div>
          </div>

          {/* Sign in and Cart */}
          <div className="flex items-center space-x-4">
            <Link to="/offer">
              <div className="text-black hover:text-gray-300"><FontAwesomeIcon icon={faShoppingCart} size="lg" /></div>

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
        {navlink}
      </div>

    </nav>
  );
}

export default Navbar;
