import React from 'react'
import { Navigate, useLocation } from "react-router-dom"
import useUserContext from '../hooks/useUserContext'

const ProtectedRoutes = ({ children }) => {
    const { user, saveUser } = useUserContext();
    console.log('user', user)
    if (!user) {
        return <Navigate to="/login" />
    }

    return children
};


export default ProtectedRoutes;