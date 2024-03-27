import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Home = lazy(() => import("./Home"));
const Cadastro = lazy(() => import("./Cadastro"));
const Auth = lazy(() => import("./view/auth"));

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
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
