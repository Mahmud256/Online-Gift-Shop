import useAdmin from '../hooks/useAdmin';
import { NavLink, Outlet } from 'react-router-dom';
import { MdAdminPanelSettings, MdOutlineAddBusiness } from 'react-icons/md';
import { FaHome, FaUsers } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faBox, faPlus, faLocationDot, faWallet } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-72 min-h-screen bg-stone-300">
                <ul className="menu p-4 text-lg font-medium">
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            HOME
                        </NavLink>
                    </li>


                    {isAdmin ?
                        <>
                            <li>
                                <NavLink to="/profile/adminHome">
                                    <MdAdminPanelSettings />
                                    Admin Profile
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile/users">
                                    <FaUsers></FaUsers>
                                    All Users
                                </NavLink>
                            </li>

                            <div className="divider"></div>
                            <li>
                                <NavLink to="/profile/addProduct">
                                    <MdOutlineAddBusiness />
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/adminProducts">
                                    <FontAwesomeIcon icon={faBox} /> Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/manageOrder">
                                    <FontAwesomeIcon icon={faBox} />Manage Order
                                </NavLink>
                            </li>

                        </>
                        :
                        // Normal User
                        <>
                            <li>
                                <NavLink to="/profile/userHome">
                                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                                    User Profile
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile/paymentHistory">
                                    <FontAwesomeIcon icon={faWallet} className="mr-2" />
                                    Payment History
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                    Cart
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile/location">
                                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                                    Add Shipping Location
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile/mylocation">
                                    <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                                    My Location
                                </NavLink>
                            </li>


                        </>
                    }

                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;