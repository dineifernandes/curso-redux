import React from "react";

const MenuHeader = () => {
  return (
    <div className="menu-header">
      <a href="./dashboard.html" className="menu-header-logo">
        <span className="text-bold">effect.rocks</span>
      </a>
      <a href="#" className="btn btn-sm menu-close-btn">
        <i className="bi bi-x"></i>
      </a>
    </div>
  );
};

export default MenuHeader;
