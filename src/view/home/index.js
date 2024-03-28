import React, { useState, useEffect } from "react";
import Navbar from "../navbar";

const Home = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader && (
        <div className="preloader">
          <img src="./images/logo_effect.png" alt="logo" />
          <div className="preloader-icon"></div>
        </div>
      )}

      <div className="sidebar" id="notifications">
        <div className="sidebar-header d-block align-items-end">
          <div className="align-items-center d-flex justify-content-between py-4">
            Notifications
            <button data-sidebar-close>
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                className="nav-link active nav-link-notify"
                data-bs-toggle="tab"
                href="#activities"
              >
                Activities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#notes">
                Notes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#alerts">
                Alerts
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-content">
          <div className="tab-content">
            <div className="tab-pane active" id="activities">
              <div className="tab-pane-body">
                <ul className="list-group list-group-flush">
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-info me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-person"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-bold d-flex justify-content-between">
                          You joined a group
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> Today
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-warning me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-hdd"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-bold d-flex justify-content-between">
                          Storage is running low!
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> Today
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-secondary me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-file-text"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 d-flex justify-content-between">
                          1 person sent a file
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> Yesterday
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-success me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-download"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 d-flex justify-content-between">
                          Reports ready to download
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> Yesterday
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="px-0 list-group-item">
                    <a href="#" className="d-flex">
                      <div className="flex-shrink-0">
                        <figure className="avatar avatar-info me-3">
                          <span className="avatar-text rounded-circle">
                            <i className="bi bi-lock"></i>
                          </span>
                        </figure>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 d-flex justify-content-between">
                          2 steps verification
                        </p>
                        <span className="text-muted small">
                          <i className="bi bi-clock me-1"></i> 20 min ago
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-pane-footer">
                <a href="#" className="btn btn-success">
                  <i className="bi bi-check2 me-2"></i> Make All Read
                </a>
                <a href="#" className="btn btn-danger ms-2">
                  <i className="bi bi-trash me-2"></i> Delete all
                </a>
              </div>
            </div>
            <div className="tab-pane" id="notes">
              <div className="tab-pane-body">
                <ul className="list-group list-group-flush">
                  <li className="px-0 list-group-item">
                    <p className="mb-0 fw-bold text-success d-flex justify-content-between">
                      This month's report will be prepared.
                    </p>
                    <span className="text-muted small">
                      <i className="bi bi-clock me-1"></i> Today
                    </span>
                    <div className="mt-2">
                      <a href="#">Edit</a>
                      <a href="#" className="text-danger ms-2">
                        Delete
                      </a>
                    </div>
                  </li>
                  <li className="px-0 list-group-item">
                    <p className="mb-0 fw-bold text-success d-flex justify-content-between">
                      An email will be sent to the customer.
                    </p>
                    <span className="text-muted small">
                      <i className="bi bi-clock me-1"></i> Today
                    </span>
                    <div className="mt-2">
                      <a href="#">Edit</a>
                      <a href="#" className="text-danger ms-2">
                        Delete
                      </a>
                    </div>
                  </li>
                  <li className="px-0 list-group-item">
                    <p className="mb-0 d-flex justify-content-between">
                      The meeting will be held.
                    </p>
                    <span className="text-muted small">
                      <i className="bi bi-clock me-1"></i> Yesterday
                    </span>
                    <div className="mt-2">
                      <a href="#">Edit</a>
                      <a href="#" className="text-danger ms-2">
                        Delete
                      </a>
                    </div>
                  </li>
                  <li className="px-0 list-group-item">
                    <p className="mb-0 fw-bold text-success d-flex justify-content-between">
                      Conversation with users.
                    </p>
                    <span className="text-muted small">
                      <i className="bi bi-clock me-1"></i> Yesterday
                    </span>
                    <div className="mt-2">
                      <a href="#">Edit</a>
                      <a href="#" className="text-danger ms-2">
                        Delete
                      </a>
                    </div>
                  </li>
                  <li className="px-0 list-group-item">
                    <p className="mb-0 fw-bold text-warning d-flex justify-content-between">
                      Payment refund will be made to the customer.
                    </p>
                    <span className="text-muted small">
                      <i className="bi bi-clock me-1"></i> 20 min ago
                    </span>
                    <div className="mt-2">
                      <a href="#">Edit</a>
                      <a href="#" className="text-danger ms-2">
                        Delete
                      </a>
                    </div>
                  </li>
                  <li className="px-0 list-group-item">
                    <p className="mb-0 d-flex justify-content-between">
                      Payment form will be activated.
                    </p>
                    <span className="text-muted small">
                      <i className="bi bi-clock me-1"></i> 20 min ago
                    </span>
                    <div className="mt-2">
                      <a href="#">Edit</a>
                      <a href="#" className="text-danger ms-2">
                        Delete
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-pane-footer">
                <a href="#" className="btn btn-primary btn-block">
                  <i className="bi bi-plus me-2"></i> Add Notes
                </a>
              </div>
            </div>
            <div className="tab-pane" id="alerts">
              <div className="tab-pane-body">
                <ul className="list-group list-group-flush">
                  <li className="px-0 list-group-item d-flex">
                    <div className="flex-shrink-0">
                      <figure className="avatar avatar-warning me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-lock"></i>
                        </span>
                      </figure>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 fw-bold d-flex justify-content-between">
                        Signed in with a different device.
                      </p>
                      <span className="text-muted small">
                        <i className="bi bi-clock me-1"></i> Yesterday
                      </span>
                    </div>
                  </li>
                  <li className="px-0 list-group-item d-flex">
                    <div className="flex-shrink-0">
                      <figure className="avatar avatar-warning me-3">
                        <span className="avatar-text fw-bold rounded-circle">
                          <i className="bi bi-file-text"></i>
                        </span>
                      </figure>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 fw-bold d-flex justify-content-between">
                        Your billing information is not active.
                      </p>
                      <span className="text-muted small">
                        <i className="bi bi-clock me-1"></i> Yesterday
                      </span>
                    </div>
                  </li>
                  <li className="px-0 list-group-item d-flex">
                    <div className="flex-shrink-0">
                      <figure className="avatar avatar-warning me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-person"></i>
                        </span>
                      </figure>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 d-flex justify-content-between">
                        Your subscription has expired.
                      </p>
                      <span className="text-muted small">
                        <i className="bi bi-clock me-1"></i> Today
                      </span>
                    </div>
                  </li>
                  <li className="px-0 list-group-item d-flex">
                    <div className="flex-shrink-0">
                      <figure className="avatar avatar-warning me-3">
                        <span className="avatar-text rounded-circle">
                          <i className="bi bi-hdd"></i>
                        </span>
                      </figure>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 d-flex justify-content-between">
                        Your storage space is running low
                      </p>
                      <span className="text-muted small">
                        <i className="bi bi-clock me-1"></i> Today
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-pane-footer">
                <a href="#" className="btn btn-success">
                  <i className="bi bi-check2 me-2"></i> Make All Read
                </a>
                <a href="#" className="btn btn-danger ms-2">
                  <i className="bi bi-trash me-2"></i> Delete all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar" id="settings">
        <div className="sidebar-header">
          <div>
            <i className="bi bi-gear me-2"></i>
            Settings
          </div>
          <button data-sidebar-close>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="sidebar-content">
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-0 border-0">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault1"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                  Remember next visits
                </label>
              </div>
            </li>
            <li className="list-group-item px-0 border-0">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault2">
                  Enable report generation.
                </label>
              </div>
            </li>
            <li className="list-group-item px-0 border-0">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault3"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault3">
                  Allow notifications.
                </label>
              </div>
            </li>
            <li className="list-group-item px-0 border-0">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault4"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault4">
                  Hide user requests
                </label>
              </div>
            </li>
            <li className="list-group-item px-0 border-0">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault5"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault5">
                  Speed up demands
                </label>
              </div>
            </li>
            <li className="list-group-item px-0 border-0">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Hide menus
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="sidebar-action">
          <a href="#" className="btn btn-primary">
            All Settings
          </a>
        </div>
      </div>
      <div className="sidebar" id="search">
        <div className="sidebar-header">
          Search
          <button data-sidebar-close>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
        <div className="sidebar-content">
          <form className="mb-4">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-describedby="button-search-addon"
              />
              <button
                className="btn btn-outline-light"
                type="button"
                id="button-search-addon"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
          <h6 className="mb-3">Last searched</h6>
          <div className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <a href="#" className="avatar avatar-sm me-3">
                <span className="avatar-text rounded-circle">
                  <i className="bi bi-search"></i>
                </span>
              </a>
              <a href="#" className="flex-fill">
                Reports for 2021
              </a>
              <a
                href="#"
                className="btn text-danger btn-sm"
                data-bs-toggle="tooltip"
                title="Remove"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <a href="#" className="avatar avatar-sm me-3">
                <span className="avatar-text rounded-circle">
                  <i className="bi bi-search"></i>
                </span>
              </a>
              <a href="#" className="flex-fill">
                Current users
              </a>
              <a
                href="#"
                className="btn"
                data-bs-toggle="tooltip"
                title="Remove"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <a href="#" className="avatar avatar-sm me-3">
                <span className="avatar-text rounded-circle">
                  <i className="bi bi-search"></i>
                </span>
              </a>
              <a href="#" className="flex-fill">
                Meeting notes
              </a>
              <a
                href="#"
                className="btn"
                data-bs-toggle="tooltip"
                title="Remove"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
          </div>
          <h6 className="mb-3">Recently viewed</h6>
          <div className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <a href="#" className="avatar avatar-secondary avatar-sm me-3">
                <span className="avatar-text rounded-circle">
                  <i className="bi bi-check-circle"></i>
                </span>
              </a>
              <a href="#" className="flex-fill">
                Todo list
              </a>
              <a
                href="#"
                className="btn"
                data-bs-toggle="tooltip"
                title="Remove"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <a href="#" className="avatar avatar-warning avatar-sm me-3">
                <span className="avatar-text rounded-circle">
                  <i className="bi bi-wallet2"></i>
                </span>
              </a>
              <a href="#" className="flex-fill">
                Pricing table
              </a>
              <a
                href="#"
                className="btn"
                data-bs-toggle="tooltip"
                title="Remove"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <a href="#" className="avatar avatar-info avatar-sm me-3">
                <span className="avatar-text rounded-circle">
                  <i className="bi bi-gear"></i>
                </span>
              </a>
              <a href="#" className="flex-fill">
                Settings
              </a>
              <a
                href="#"
                className="btn"
                data-bs-toggle="tooltip"
                title="Remove"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <a href="#" className="avatar avatar-success avatar-sm me-3">
                <span className="avatar-text rounded-circle">
                  <i className="bi bi-person-circle"></i>
                </span>
              </a>
              <a href="#" className="flex-fill">
                Users
              </a>
              <a
                href="#"
                className="btn"
                data-bs-toggle="tooltip"
                title="Remove"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar-action">
          <a href="#" className="btn btn-danger">
            All Clear
          </a>
        </div>
      </div>
      {/* menu aqui */}
      <Navbar />
      <div className="layout-wrapper">
        <div className="header">
          <div className="menu-toggle-btn">
            <a href="#">
              <i className="bi bi-list"></i>
            </a>
          </div>

          <a href="./dashboard.html" className="logo">
            <img width="100" src="../logo.png" alt="logo" />
          </a>

          <div className="page-title">Dashboard</div>
          <form className="search-form">
            <div className="input-group">
              <button
                className="btn btn-outline-light"
                type="button"
                id="button-addon1"
              >
                <i className="bi bi-search"></i>
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <a
                href="#"
                className="btn btn-outline-light close-header-search-bar"
              >
                <i className="bi bi-x"></i>
              </a>
            </div>
          </form>
          <div className="header-bar ms-auto">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link nav-link-notify"
                  data-count="2"
                  data-sidebar-target="#notifications"
                >
                  <i className="bi bi-bell icon-lg"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link nav-link-notify"
                  data-count="3"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-cart2 icon-lg"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                  <h6 className="m-0 px-4 py-3 border-bottom">Shopping Cart</h6>
                  <div className="dropdown-menu-body">
                    <div className="list-group list-group-flush">
                      <div className="list-group-item d-flex align-items-center">
                        <a href="#" className="text-danger me-3" title="Remove">
                          <i className="bi bi-trash"></i>
                        </a>
                        <a href="#" className="me-3 flex-shrink-0 ">
                          <img
                            src="../images/products/3.jpg"
                            className="rounded"
                            width="60"
                            alt="..."
                          />
                        </a>
                        <div>
                          <h6>Digital clock</h6>
                          <div>1 x $1.190,90</div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group list-group-flush">
                      <div className="list-group-item d-flex align-items-center">
                        <a href="#" className="text-danger me-3" title="Remove">
                          <i className="bi bi-trash"></i>
                        </a>
                        <a href="#" className="me-3 flex-shrink-0 ">
                          <img
                            src="../images/products/4.jpg"
                            className="rounded"
                            width="60"
                            alt="..."
                          />
                        </a>
                        <div>
                          <h6>Toy Car</h6>
                          <div>1 x $139.58</div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group list-group-flush">
                      <div className="list-group-item d-flex align-items-center">
                        <a href="#" className="text-danger me-3" title="Remove">
                          <i className="bi bi-trash"></i>
                        </a>
                        <a href="#" className="me-3 flex-shrink-0 ">
                          <img
                            src="../images/products/5.jpg"
                            className="rounded"
                            width="60"
                            alt="..."
                          />
                        </a>
                        <div>
                          <h6>Sunglasses</h6>
                          <div>2 x $50,90</div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group list-group-flush">
                      <div className="list-group-item d-flex align-items-center">
                        <a href="#" className="text-danger me-3" title="Remove">
                          <i className="bi bi-trash"></i>
                        </a>
                        <a href="#" className="me-3 flex-shrink-0 ">
                          <img
                            src="../images/products/6.jpg"
                            className="rounded"
                            width="60"
                            alt="..."
                          />
                        </a>
                        <div>
                          <h6>Cake</h6>
                          <div>1 x $10,50</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="m-0 px-4 py-3 border-top small">
                    Sub Total :{" "}
                    <strong className="text-primary">$1.442,78</strong>
                  </h6>
                </div>
              </li>
              <li className="nav-item ms-3">
                <button className="btn btn-primary btn-icon">
                  <i className="bi bi-plus-circle"></i> Create Report
                </button>
              </li>
            </ul>
          </div>

          <div className="header-mobile-buttons">
            <a href="#" className="search-bar-btn">
              <i className="bi bi-search"></i>
            </a>
            <a href="#" className="actions-btn">
              <i className="bi bi-three-dots"></i>
            </a>
          </div>
        </div>

        <div className="content ">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col-lg-7 col-md-12">
              <div className="card widget h-100">
                <div className="card-header d-flex">
                  <h6 className="card-title">
                    Sales Chart
                    <a
                      href="#"
                      className="bi bi-question-circle ms-1 small"
                      data-bs-toggle="tooltip"
                      title="Daily orders and sales"
                    ></a>
                  </h6>
                  <div className="d-flex gap-3 align-items-center ms-auto">
                    <div className="dropdown">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        className="btn btn-sm"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          View Detail
                        </a>
                        <a href="#" className="dropdown-item">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-md-flex align-items-center mb-3">
                    <div className="d-flex align-items-center">
                      <div className="display-7 me-3">
                        <i className="bi bi-bag-check me-2 text-success"></i>{" "}
                        $10.552,40
                      </div>
                      <span className="text-success">
                        <i className="bi bi-arrow-up me-1 small"></i>8.30%
                      </span>
                    </div>
                    <div className="d-flex gap-4 align-items-center ms-auto mt-3 mt-lg-0">
                      <select className="form-select">
                        <optgroup label="2020">
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                        </optgroup>
                        <optgroup label="2021">
                          <option value="January">January</option>
                          <option value="February">February</option>
                          <option value="March">March</option>
                          <option value="April">April</option>
                          <option value="May">May</option>
                          <option value="June">June</option>
                          <option value="July">July</option>
                          <option value="August">August</option>
                          <option value="September">September</option>
                          <option value="October">October</option>
                          <option value="November">November</option>
                          <option value="December">December</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div id="sales-chart"></div>
                  <div className="d-flex justify-content-center gap-4 align-items-center ms-auto mt-3 mt-lg-0">
                    <div>
                      <i className="bi bi-circle-fill mr-2 text-primary me-1 small"></i>
                      <span>Sales</span>
                    </div>
                    <div>
                      <i className="bi bi-circle-fill mr-2 text-success me-1 small"></i>
                      <span>Order</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="card widget h-100">
                <div className="card-header d-flex">
                  <h6 className="card-title">
                    Channels
                    <a
                      href="#"
                      className="bi bi-question-circle ms-1 small"
                      data-bs-toggle="tooltip"
                      title="Channels where your products are sold"
                    ></a>
                  </h6>
                  <div className="d-flex gap-3 align-items-center ms-auto">
                    <div className="dropdown">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        className="btn btn-sm"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          View Detail
                        </a>
                        <a href="#" className="dropdown-item">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="sales-channels"></div>
                  <div className="row text-center mb-5 mt-4">
                    <div className="col-4">
                      <div className="display-7">48%</div>
                      <div className="text-success my-2 small">
                        <i className="bi bi-arrow-up me-1 small"></i>30.50%
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <i className="bi bi-circle-fill text-orange me-2 small"></i>
                        <span className="text-muted">Social Media</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="display-7">30%</div>
                      <div className="text-danger my-2 small">
                        <i className="bi bi-arrow-down me-1 small"></i>15.20%
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <i className="bi bi-circle-fill text-cyan me-2 small"></i>
                        <span className="text-muted">Google</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="display-7">22%</div>
                      <div className="text-success my-2 small">
                        <i className="bi bi-arrow-up me-1 small"></i>1.80%
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <i className="bi bi-circle-fill text-indigo me-2 small"></i>
                        <span className="text-muted">Email</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-outline-primary btn-icon">
                      <i className="bi bi-download"></i> Download Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex mb-3">
                    <div className="display-7">
                      <i className="bi bi-basket"></i>
                    </div>
                    <div className="dropdown ms-auto">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        className="btn btn-sm"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          View Detail
                        </a>
                        <a href="#" className="dropdown-item">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <h4 className="mb-3">Orders</h4>
                  <div className="d-flex mb-3">
                    <div className="display-7">310</div>
                    <div className="ms-auto" id="total-orders"></div>
                  </div>
                  <div className="text-success">
                    Over last month 1.4%{" "}
                    <i className="small bi bi-arrow-up"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex mb-3">
                    <div className="display-7">
                      <i className="bi bi-credit-card-2-front"></i>
                    </div>
                    <div className="dropdown ms-auto">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        className="btn btn-sm"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          View Detail
                        </a>
                        <a href="#" className="dropdown-item">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <h4 className="mb-3">Sales</h4>
                  <div className="d-flex mb-3">
                    <div className="display-7">$3.759,00</div>
                    <div className="ms-auto" id="total-sales"></div>
                  </div>
                  <div className="text-danger">
                    Over last month 2.4%{" "}
                    <i className="small bi bi-arrow-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <h6 className="card-title">Recent Reviews</h6>
                    <div className="dropdown ms-auto">
                      <a href="#">View All</a>
                    </div>
                  </div>
                  <div className="summary-cards">
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <div className="avatar me-3">
                          <img
                            src="../images/user/women_avatar5.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div>
                          <h5 className="mb-1">Amara Keel</h5>
                          <ul className="list-inline ms-auto mb-0">
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-muted"></i>
                            </li>
                            <li className="list-inline-item mb-0">(4)</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        I love your products. It is very easy and fun to use
                        this panel.
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <div className="avatar me-3">
                          <span className="avatar-text bg-indigo rounded-circle">
                            J
                          </span>
                        </div>
                        <div>
                          <h5 className="mb-1">Johnath Siddeley</h5>
                          <ul className="list-inline ms-auto mb-0">
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">(5)</li>
                          </ul>
                        </div>
                      </div>
                      <div>Very nice glasses. I ordered for my friend.</div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center mb-3">
                        <div className="avatar me-3">
                          <span className="avatar-text bg-yellow rounded-circle">
                            D
                          </span>
                        </div>
                        <div>
                          <h5 className="mb-1">David Berks</h5>
                          <ul className="list-inline ms-auto mb-0">
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">
                              <i className="bi bi-star-fill text-warning"></i>
                            </li>
                            <li className="list-inline-item mb-0">(5)</li>
                          </ul>
                        </div>
                      </div>
                      <div>I am very satisfied with this product.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex mb-4">
                    <h6 className="card-title mb-0">Customer Rating</h6>
                    <div className="dropdown ms-auto">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        className="btn btn-sm"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          View Detail
                        </a>
                        <a href="#" className="dropdown-item">
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="display-6">3.0</div>
                    <div className="d-flex justify-content-center gap-3 my-3">
                      <i className="bi bi-star-fill icon-lg text-warning"></i>
                      <i className="bi bi-star-fill icon-lg text-warning"></i>
                      <i className="bi bi-star-fill icon-lg text-warning"></i>
                      <i className="bi bi-star-fill icon-lg text-muted"></i>
                      <i className="bi bi-star-fill icon-lg text-muted"></i>
                      <span>(318)</span>
                    </div>
                  </div>
                  <div className="text-muted d-flex align-items-center justify-content-center">
                    <span className="text-success me-3 d-block">
                      <i className="bi bi-arrow-up me-1 small"></i>+35
                    </span>{" "}
                    Point from last month
                  </div>
                  <div className="row my-4">
                    <div className="col-md-6 m-auto">
                      <div id="customer-rating"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-outline-primary btn-icon">
                      <i className="bi bi-download"></i> Download Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 bg-purple">
                <div className="card-body text-center">
                  <div className="text-white-50">
                    <div className="bi bi-box-seam display-6 mb-3"></div>
                    <div className="display-8 mb-2">Products Sold</div>
                    <h5>89 Sold</h5>
                  </div>
                  <div id="products-sold"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card widget h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title">
                    Your Top Countries
                    <a
                      href="#"
                      className="bi bi-question-circle ms-1 small"
                      data-bs-toggle="tooltip"
                      title="Sales performance revenue based by country"
                    ></a>
                  </h5>
                  <a href="#">View All</a>
                </div>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="d-flex flex-grow-1 align-items-center">
                        <img
                          width="45"
                          className="me-3"
                          src="../images/flags/united-states-of-america.svg"
                          alt="..."
                        />
                        <span>United States</span>
                      </div>
                      <span>$1.671,10</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="d-flex flex-grow-1 align-items-center">
                        <img
                          width="45"
                          className="me-3"
                          src="../images/flags/venezuela.svg"
                          alt="..."
                        />
                        <span>Venezuela</span>
                      </div>
                      <span>$1.064,75</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="d-flex flex-grow-1 align-items-center">
                        <img
                          width="45"
                          className="me-3"
                          src="../images/flags/salvador.svg"
                          alt="..."
                        />
                        <span>Salvador</span>
                      </div>
                      <span>$1.055,98</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <div className="d-flex flex-grow-1 align-items-center">
                        <img
                          width="45"
                          className="me-3"
                          src="../images/flags/russia.svg"
                          alt="..."
                        />
                        <span>Russia</span>
                      </div>
                      <span>$1.042,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="card widget">
                <div className="card-header">
                  <h5 className="card-title">Activity Overview</h5>
                </div>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card border-0">
                      <div className="card-body text-center">
                        <div className="display-5">
                          <i className="bi bi-truck text-secondary"></i>
                        </div>
                        <h5 className="my-3">Delivered</h5>
                        <div className="text-muted">15 New Packages</div>
                        <div
                          className="progress mt-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-secondary"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0">
                      <div className="card-body text-center">
                        <div className="display-5">
                          <i className="bi bi-receipt text-warning"></i>
                        </div>
                        <h5 className="my-3">Ordered</h5>
                        <div className="text-muted">72 New Items</div>
                        <div
                          className="progress mt-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "67%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0">
                      <div className="card-body text-center">
                        <div className="display-5">
                          <i className="bi bi-bar-chart text-info"></i>
                        </div>
                        <h5 className="my-3">Reported</h5>
                        <div className="text-muted">50 Support New Cases</div>
                        <div
                          className="progress mt-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card border-0">
                      <div className="card-body text-center">
                        <div className="display-5">
                          <i className="bi bi-cursor text-success"></i>
                        </div>
                        <h5 className="my-3">Arrived</h5>
                        <div className="text-muted">34 Upgraded Boxed</div>
                        <div
                          className="progress mt-3"
                          style={{ height: "5px" }}
                        >
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="card widget">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="card-title">Recent Products</h5>
                  <div className="dropdown ms-auto">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      className="btn btn-sm btn-floating"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="#" className="dropdown-item">
                        Action
                      </a>
                      <a href="#" className="dropdown-item">
                        Another action
                      </a>
                      <a href="#" className="dropdown-item">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-muted">
                    Products added today. Click <a href="#">here</a> for more
                    details
                  </p>
                  <div className="table-responsive">
                    <table
                      className="table table-custom mb-0"
                      id="recent-products"
                    >
                      <thead>
                        <tr>
                          <th>
                            <input
                              className="form-check-input select-all"
                              type="checkbox"
                              data-select-all-target="#recent-products"
                              id="defaultCheck1"
                            />
                          </th>
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Stock</th>
                          <th>Price</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">
                              <img
                                src="../images/products/10.jpg"
                                className="rounded"
                                width="40"
                                alt="..."
                              />
                            </a>
                          </td>
                          <td>Cookie</td>
                          <td>
                            <span className="text-danger">Out of Stock</span>
                          </td>
                          <td>$10,50</td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Action
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Another action
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">
                              <img
                                src="../images/products/7.jpg"
                                className="rounded"
                                width="40"
                                alt="..."
                              />
                            </a>
                          </td>
                          <td>Glass</td>
                          <td>
                            <span className="text-success">In Stock</span>
                          </td>
                          <td>$70,20</td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Action
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Another action
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">
                              <img
                                src="../images/products/8.jpg"
                                className="rounded"
                                width="40"
                                alt="..."
                              />
                            </a>
                          </td>
                          <td>Headphone</td>
                          <td>
                            <span className="text-success">In Stock</span>
                          </td>
                          <td>$870,50</td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Action
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Another action
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">
                              <img
                                src="../images/products/9.jpg"
                                className="rounded"
                                width="40"
                                alt="..."
                              />
                            </a>
                          </td>
                          <td>Perfume</td>
                          <td>
                            <span className="text-success">In Stock</span>
                          </td>
                          <td>$170,50</td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Action
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Another action
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="content-footer">
          <div>
            <a href="https://cakeadmin.com" target="_blank">
              CakeAdmin
            </a>{" "}
            © 2023
          </div>
          <div>
            <nav className="nav gap-4">
              <a
                href="https://themeforest.net/licenses/standard"
                className="nav-link"
              >
                Licenses
              </a>
              <a href="#" className="nav-link">
                Change Log
              </a>
              <a href="#" className="nav-link">
                Get Help
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
