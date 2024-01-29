import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {
    const userData = JSON.parse(localStorage.getItem('user'))

    // let location = useLocation();
    console.log(userData)

    if (!userData.isAuthenticated) {
        return <Navigate to="/login" />
    }

    return children
};

export default ProtectedRoutes;