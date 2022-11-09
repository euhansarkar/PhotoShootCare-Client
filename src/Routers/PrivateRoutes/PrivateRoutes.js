import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

 const PrivateRoutes = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(!user){
        return <Navigate to={`/login`} state={{from: location}} replace></Navigate>
    }
 }

export default PrivateRoutes;