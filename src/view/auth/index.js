import React from "react";

import { change, login } from "../../store/actions/auth.action";

import { Typography, TextField, Button, withStyles } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";

const RegisterButton = withStyles({
  root: {
    color: "#fff",
    backgroundColor: "#28a745",
    "&:hover": {
      backgroundColor: "#218838",
    },
  },
});

export default function Auth() {
  const dispatch = useDispatch();

  const { credentials, success } = useSelector((state) => state.authReducer);

  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo-horizontal.png" alt="effect.rocks" height="48" />
              <Typography className="mt-3" variant="h6" component="h1">
                Edificar pessoas através da educação
              </Typography>

              <TextField
                label="E-mail"
                type="email"
                autoComplete="email"
                value={credentials.email}
                margin="normal"
                onChange={(text) =>
                  dispatch(change({ email: text.target.value }))
                }
              />

              <TextField
                label="Password"
                type="password"
                value={credentials.password}
                margin="normal"
                onChange={(text) =>
                  dispatch(change({ password: text.target.value }))
                }
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                className="mt-4 mb-4"
                onClick={() => dispatch(login(credentials))}
              >
                Entrar
              </Button>

              {success && <Navigate to="/home" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
