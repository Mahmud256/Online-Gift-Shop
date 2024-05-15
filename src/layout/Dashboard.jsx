import useAdmin from '../hooks/useAdmin';
import { NavLink, Outlet } from 'react-router-dom';
import { MdAdminPanelSettings, MdOutlineAddBusiness } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

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

                            <div className="divider"></div>
                            <li>
                                <NavLink to="/profile/addProduct">
                                    <MdOutlineAddBusiness />
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/adminProducts">
                                    Product
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
                            <NavLink to="/profile/userHome">
                                User Profile
                            </NavLink>
                            <NavLink to="/profile/cart">
                                Cart
                            </NavLink>
                        </>
                    }

                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;