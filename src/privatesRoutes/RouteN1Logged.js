import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteN1Logged = ({children}) => {

    const userRedux = useSelector(state => state.user.u)

    return userRedux ? <Navigate replace to="/"/> : children
}

export default RouteN1Logged;