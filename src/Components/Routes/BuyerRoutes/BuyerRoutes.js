import React, { useContext } from 'react';
import useBuyers from '../../hooks/useBuyers';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Pages/Shared/Loading/Loading';
import { AuthContext } from '../../Authentication/AuthProvider';

const BuyerRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = useBuyers(user?.email)
    const location = useLocation()
    if(loading || isBuyerLoading){
        return <Loading></Loading>
    }

    if(user && isBuyer){
        return children
    }
    return <Navigate to='/login' state={{from: location }} replace ></Navigate>
};

export default BuyerRoutes;