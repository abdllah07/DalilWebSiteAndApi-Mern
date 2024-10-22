import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
    const location = useLocation();

    if (location.pathname === '/') {
        if (!isAuthenticated) {
            return <Navigate to='/auth/login' />
        } else {
            if (user?.role === "admin") {
                return <Navigate to='/admin/dashboard' />
            } else {
                return <Navigate to='/user/home' />
            }
        }
    }

    if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        return <Navigate to='/auth/login' />
    }

    if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
        if (user?.role === "admin") {
            return <Navigate to='/admin/dashboard' />
        } else {
            return <Navigate to='/user/home' />
        }
    }

    if (isAuthenticated && user?.role !== "admin" && location.pathname.includes('admin')) {
        return <Navigate to='/unAuth-page' />
    }

    if (isAuthenticated && user?.role === "admin" && location.pathname.includes('user')) {
        return <Navigate to='/admin/dashboard' />
    }

    return <>{children}</>;
}

// Add prop types validation
CheckAuth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        role: PropTypes.string
    }),
    children: PropTypes.node
};

export default CheckAuth;
