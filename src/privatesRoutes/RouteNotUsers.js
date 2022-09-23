import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteNotUsers = ({children}) => {

    const userLoggedLS = localStorage.getItem('client');

    if(userLoggedLS && (JSON.parse(userLoggedLS)).role === 'user'){
        return <Navigate replace to="/"/>
    } else {
        return children
    }
}

export default RouteNotUsers;