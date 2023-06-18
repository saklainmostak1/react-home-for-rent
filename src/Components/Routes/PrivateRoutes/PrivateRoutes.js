import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Loading from '../../Pages/Shared/Loading/Loading';
import { AuthContext } from '../../Authentication/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }

    if(user && user.uid){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;