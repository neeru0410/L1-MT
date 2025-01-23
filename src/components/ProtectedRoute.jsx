import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('authenticated'); // Check if the user is authenticated

    if (!isAuthenticated) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/" replace />;
    }

    return children; // Render the children if authenticated
};

export default ProtectedRoute;
