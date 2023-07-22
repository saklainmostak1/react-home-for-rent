import React, { useContext } from 'react';
import useSeller from '../../hooks/useSeller';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading/Loading';
import { AuthContext } from '../../Authentication/AuthProvider';

const SellerRoutes = ({children}) => {
    
        const {user, loading} = useContext(AuthContext)
        const [isSeller, isSellerLoading] = useSeller(user?.email)
        const location = useLocation()
        if(loading || isSellerLoading){
            return <Loading></Loading>
        }
    
        if(user && isSeller){
            return children
        }
        return <Navigate to='/login' state={{from: location }} replace ></Navigate>
};

export default SellerRoutes;