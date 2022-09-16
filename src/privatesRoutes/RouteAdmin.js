import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteAdmin = ({children}) => {
    
    const adminLoggedLS = localStorage.getItem('client');

    if(adminLoggedLS && (JSON.parse(adminLoggedLS)).role === 'admin'){
        return children
    } else {
        return <Navigate replace to="/"/>
    }
}
 
export default RouteAdmin;