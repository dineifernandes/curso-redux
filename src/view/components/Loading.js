import React from "react";
import { Typography, Modal, CircularProgress } from "@mui/material";
import { changeLoading } from "../../store/actions/loading.action";
import { useSelector, useDispatch } from "react-redux";

const Loading = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingReducer);

  return (
    <Modal
      open={loading.open}
      onClose={() => dispatch(changeLoading({ open: false }))}
      className="d-flex justify-content-center align-items-center h-100"
    >
      <div className="bg-white d-flex align-items-center rounded p-3 outline-none">
        <CircularProgress size={20} className="mr-md-4" />
        <Typography variant="subtitle1">{loading.msg}</Typography>
      </div>
    </Modal>
  );
};

export default Loading;
