import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./hooks/auth";

import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("./Home"));
const Auth = lazy(() => import("./view/auth"));
const Register = lazy(() => import("./view/register"));

const AppRoutes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="d-flex justify-content-center mt-t pt-5">
          <CircularProgress />
        </div>
      }
    >
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Auth />} />

        <Route
          exact
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
