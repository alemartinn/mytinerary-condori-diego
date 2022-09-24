import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteAdmin = ({children}) => {
    
    const userRedux = useSelector(state => state.user.u)

    if(userRedux && userRedux.role === 'admin'){
        return children
    } else {
        return <Navigate replace to="/"/>
    }
}
 
export default RouteAdmin;