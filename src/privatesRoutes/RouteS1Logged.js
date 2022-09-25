import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteS1Logged = ({children}) => {
    
    const userRedux = useSelector(state => state.user.u)

    return userRedux ? children : <Navigate replace to="/auth/signin"/>
}

export default RouteS1Logged;