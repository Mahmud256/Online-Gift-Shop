/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-16 h-16 border-4 border-red-400 border-dashed rounded-full animate-spin"></div>
                <p className="mt-4 text-lg font-medium text-red-500 animate-pulse">
                    Loading, please wait...
                </p>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace />; // Use "replace" to avoid adding a new entry in the browser history.

};

export default PrivateRoutes;

// PrivateRoutes.propTypes = {
//     children: propTypes.node,
// }