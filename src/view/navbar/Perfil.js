import React from "react";

const Perfil = () => {
  return (
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center"
        data-bs-toggle="dropdown"
      >
        <div className="avatar me-3">
          <img
            src="../images/user/man_avatar5.jpg"
            className="rounded-circle"
            alt="image"
          />
        </div>
        <div>
          <div className="fw-bold">Timotheus Bendan</div>
          <small className="text-muted">Admin</small>
        </div>
      </a>
      <div className="dropdown-menu dropdown-menu-end">
        <a href="#" className="dropdown-item d-flex align-items-center">
          <i className="bi bi-person dropdown-item-icon"></i> Profile
        </a>
        <a href="#" className="dropdown-item d-flex align-items-center">
          <i className="bi bi-envelope dropdown-item-icon"></i> Inbox
        </a>
        <a
          href="#"
          className="dropdown-item d-flex align-items-center"
          data-sidebar-target="#settings"
        >
          <i className="bi bi-gear dropdown-item-icon"></i> Settings
        </a>
        <a
          href="./login.html"
          className="dropdown-item d-flex align-items-center text-danger"
          target="_blank"
        >
          <i className="bi bi-box-arrow-right dropdown-item-icon"></i> Logout
        </a>
      </div>
    </div>
  );
};

export default Perfil;
