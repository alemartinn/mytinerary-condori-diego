import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteN1Logged = ({children}) => {
    return localStorage.getItem('client') ? <Navigate replace to="/"/> : children
}

export default RouteN1Logged;