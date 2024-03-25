import React from "react";
import { changeNotify } from "../../store/actions/notify.action";
import { Snackbar, SnackbarContent } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { green, red } from "@mui/material/colors";

const Notify = () => {
  const dispatch = useDispatch();
  const notify = useSelector((state) => state.notifyReducer);

  const handleClose = () => {
    dispatch(changeNotify({ open: false }));
  };

  return (
    <Snackbar
      anchorOrigin={{
        horizontal: notify.horizontal,
        vertical: notify.vertical,
      }}
      open={notify.open}
      autoHideDuration={notify.time}
      onClose={handleClose}
    >
      <SnackbarContent
        style={{
          backgroundColor: notify.class === "success" ? green[500] : red[600],
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
        message={
          <span style={{ display: "flex", alignItems: "center" }}>
            {notify.msg}
          </span>
        }
      />
    </Snackbar>
  );
};

export default Notify;
