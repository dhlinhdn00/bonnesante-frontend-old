import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {
    const userData = JSON.parse(localStorage.getItem('user'))

    if (!userData.isAuthenticated) {
        return <Navigate to="/login" />
    }

    return children
};


export default ProtectedRoutes;