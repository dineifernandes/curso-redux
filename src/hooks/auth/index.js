// hooks/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const { success } = useSelector((state) => state.authReducer);
  if (!success) {
    return <Navigate to="/login" />;
  }
  return props.children;
};

export default PrivateRoute;
