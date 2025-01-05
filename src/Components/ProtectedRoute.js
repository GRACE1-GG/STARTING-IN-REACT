// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
//import {  Navigate } from 'react-router-dom';

import { UserContext } from '../Context/UserContext';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user && allowedRoles.includes(user.role) ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
