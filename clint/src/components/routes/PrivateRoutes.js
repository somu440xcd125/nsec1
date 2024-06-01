import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/hooks/auth/useAuth';

export const PrivateRoutes = () => {
    const auth=useAuth();
    console.log(auth)
  return auth.isAuth?<Outlet/>:<Navigate to="/login" replace/>
}
