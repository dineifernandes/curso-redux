import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("./Home"));
const Cadastro = lazy(() => import("./Cadastro"));
const Login = lazy(() => import("./Login"));

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
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
