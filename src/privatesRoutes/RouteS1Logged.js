import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteS1Logged = ({children}) => {
    return localStorage.getItem('client') ? children : <Navigate replace to="/auth/signin"/>
}

export default RouteS1Logged;