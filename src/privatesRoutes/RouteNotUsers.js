import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteNotUsers = ({children}) => {

    const userRedux = useSelector(state => state.user.u)
    if(userRedux && userRedux.role === 'user'){
        return <Navigate replace to="/"/>
    } else {
        return children
    }
}

export default RouteNotUsers;