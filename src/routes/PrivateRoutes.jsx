import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { propTypes } from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading)
    {
        return <span className="loading loading-spinner text-primary"></span>; 
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace />; // Use "replace" to avoid adding a new entry in the browser history.

};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: propTypes.node,
}