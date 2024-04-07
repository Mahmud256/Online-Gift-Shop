import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegListAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { faShoppingCart, faHome, faListAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
    <div className="flex text-lg justify-center space-x-4 my-4">
      <NavLink to="/">
        <a
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
        </a>
      </NavLink>

      <NavLink to="/category">
        <a
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
        </a>
      </NavLink>

      <NavLink to="/offer">
        <a
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
        </a>
      </NavLink>
    </div>
  </>

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-fff flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-black font-bold text-xl">OGS</a>
          </div>
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
            <a href="#" className="text-black hover:text-gray-300"><FontAwesomeIcon icon={faShoppingCart} size="lg" /></a>
            {/* <a href="#" className="text-black dropdown dropdown-hover">
              <FaRegUser size={23} />
            </a> */}
            <a href="#" className="dropdown dropdown-hover dropdown-end">
              <a tabIndex={0}><FaRegUser size={23} /></a>
              <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-52">
                <NavLink to="/login">
                  <li>
                    <a>Login</a>
                  </li>
                </NavLink>
              </ul>
            </a>
          </div>
        </div>
        {/* Navbar links */}
        {navlink}
      </div>

    </nav>
  );
}

export default Navbar;
