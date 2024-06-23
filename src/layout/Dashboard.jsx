import useAdmin from '../hooks/useAdmin';
import { NavLink, Outlet } from 'react-router-dom';
import { MdAdminPanelSettings, MdOutlineAddBusiness } from 'react-icons/md';
import { FaHome, FaUsers } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faBox } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-stone-300">
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

                        </>
                        :
                        // Normal User
                        <>
                            <li>
                                <NavLink to="/profile/userHome">
                                    <FontAwesomeIcon icon={faUser} /> User Profile
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/shipping">
                                    <FontAwesomeIcon icon={faShoppingCart} /> Shipping Address
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