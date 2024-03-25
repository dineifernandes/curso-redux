import React from "react";
import { changeAlert } from "../../store/actions/alert.action";
import { Modal, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { MdError, MdCheckCircle } from "react-icons/md";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alertReducer);

  const handleClose = () => {
    dispatch(changeAlert({ open: false }));
  };

  if (alert.open) {
    setTimeout(() => dispatch(changeAlert({ open: false })), alert.time);
  }

  return (
    <Modal
      open={alert.open}
      onClose={handleClose}
      className="d-flex flex-column align-items-center justify-content-center h-100"
    >
      <div className="bg-white rounded d-flex align-items-center outline-none p-4">
        {alert.class === "success" && (
          <MdCheckCircle
            style={{ fontSize: "2.5rem" }}
            className="mr-3 text-success"
          />
        )}
        {alert.class === "error" && (
          <MdError
            style={{ fontSize: "2.5rem" }}
            className="mr-3 text-danger"
          />
        )}
        <Typography className="font-weight-bold" variant="subtitle2">
          {alert.msg}
        </Typography>
      </div>
    </Modal>
  );
};

export default Alert;
