import React from "react";
import Perfil from "./Perfil";
import MenuHeader from "./MenuHeader";

const Navbar = () => {
  return (
    <div className="menu">
      <MenuHeader />
      <div className="menu-body">
        {/* perfil aqui */}
        <Perfil />
        <ul>
          <li className="menu-divider">Dashboard</li>
          <li>
            <a className="active" href="./dashboard.html">
              <span className="nav-link-icon">
                <i className="bi bi-bar-chart"></i>
              </span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="nav-link-icon">
                <i className="bi bi-receipt"></i>
              </span>
              <span>Orders</span>
            </a>
            <ul>
              <li>
                <a href="./orders.html">List</a>
              </li>
              <li>
                <a href="./order-detail.html">Detail</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span className="nav-link-icon">
                <i className="bi bi-truck"></i>
              </span>
              <span>Products</span>
            </a>
            <ul>
              <li>
                <a href="./product-list.html">List View</a>
              </li>
              <li>
                <a href="./product-grid.html">Grid View</a>
              </li>
              <li>
                <a href="./product-detail.html">Product Detail</a>
              </li>
              <li>
                <a href="./shopping-cart.html">Shopping Cart</a>
              </li>
              <li>
                <a href="./checkout.html">Checkout</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span className="nav-link-icon">
                <i className="bi bi-wallet2"></i>
              </span>
              <span>Buyer</span>
            </a>
            <ul>
              <li>
                <a href="./buyer-dashboard.html">Dashboard</a>
              </li>
              <li>
                <a href="./buyer-orders.html">Orders</a>
              </li>
              <li>
                <a href="./buyer-addresses.html">Addresses</a>
              </li>
              <li>
                <a href="./buyer-wishlist.html">Wishlist</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./customers.html">
              <span className="nav-link-icon">
                <i className="bi bi-person-badge"></i>
              </span>
              <span>Customers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="nav-link-icon">
                <i className="bi bi-receipt"></i>
              </span>
              <span>Invoices</span>
            </a>
            <ul>
              <li>
                <a href="./invoices.html">List</a>
              </li>
              <li>
                <a href="./invoice-detail.html">Detail</a>
              </li>
            </ul>
          </li>
          <li className="menu-divider">Apps</li>
          <li>
            <a href="./chats.html">
              <span className="nav-link-icon">
                <i className="bi bi-chat-square"></i>
              </span>
              <span>Chats</span>
              <span className="badge bg-success rounded-circle ms-auto">2</span>
            </a>
          </li>
          <li>
            <a href="./email.html">
              <span className="nav-link-icon">
                <i className="bi bi-envelope"></i>
              </span>
              <span>Email App</span>
            </a>
            <ul>
              <li>
                <a href="./email.html">
                  <span>Inbox</span>
                </a>
              </li>
              <li>
                <a href="./email.html-detail">
                  <span>Detail</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./todo-list.html">
              <span className="nav-link-icon">
                <i className="bi bi-check-circle"></i>
              </span>
              <span>Todo App</span>
            </a>
            <ul>
              <li>
                <a href="./todo-list.html">
                  <span>List</span>
                </a>
              </li>
              <li>
                <a href="./todo-detail.html">
                  <span>Details</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-divider">Pages</li>
          <li>
            <a href="#">
              <span className="nav-link-icon">
                <i className="bi bi-person"></i>
              </span>
              <span>Profile</span>
            </a>
            <ul>
              <li>
                <a href="./profile-posts.html">Post</a>
              </li>
              <li>
                <a href="./profile-connections.html">Connections</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span className="nav-link-icon">
                <i className="bi bi-person-circle"></i>
              </span>
              <span>Users</span>
            </a>
            <ul>
              <li>
                <a href="./user-list.html">List View</a>
              </li>
              <li>
                <a href="./user-grid.html">Grid View</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span className="nav-link-icon">
                <i className="bi bi-lock"></i>
              </span>
              <span>Authentication</span>
            </a>
            <ul>
              <li>
                <a href="./login.html" target="_blank">
                  Login
                </a>
              </li>
              <li>
                <a href="./register.html" target="_blank">
                  Register
                </a>
              </li>
              <li>
                <a href="./reset-password.html" target="_blank">
                  Reset Password
                </a>
              </li>
              <li>
                <a href="./lock-screen.html" target="_blank">
                  Lock Screen
                </a>
              </li>
              <li>
                <a href="./account-verified.html" target="_blank">
                  Account Verified
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <span className="nav-link-icon">
                <i className="bi bi-exclamation-octagon"></i>
              </span>
              <span>Error Pages</span>
            </a>
            <ul>
              <li>
                <a href="./404.html" target="_blank">
                  404
                </a>
              </li>
              <li>
                <a href="./access-denied.html">Access Denied</a>
              </li>
              <li>
                <a href="./under-construction.html" target="_blank">
                  Under Construction
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="./settings.html">
              <span className="nav-link-icon">
                <i className="bi bi-gear"></i>
              </span>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="./pricing-table.html">
              <span className="nav-link-icon">
                <i className="bi bi-wallet2"></i>
              </span>
              <span>Pricing Table</span>
              <span className="badge bg-success ms-auto">New</span>
            </a>
          </li>
          <li>
            <a href="./search-page.html">
              <span className="nav-link-icon">
                <i className="bi bi-search"></i>
              </span>
              <span>Search Page</span>
            </a>
          </li>
          <li>
            <a href="./faq.html">
              <span className="nav-link-icon">
                <i className="bi bi-question-circle"></i>
              </span>
              <span>FAQ</span>
            </a>
          </li>
          <li className="menu-divider">Other</li>
          <li>
            <a
              target="_blank"
              href="https://cakeadmin.com/bootstrap-docs/introduction"
            >
              <span className="nav-link-icon">
                <i className="bi bi-file-earmark-medical"></i>
              </span>
              <span>Documentation</span>
            </a>
            <a target="_blank" href="https://github.com/bundui/cakeadmin">
              <span className="nav-link-icon">
                <i className="bi bi-github"></i>
              </span>
              <span>CakeAdmin Github</span>
            </a>
            <a target="_blank" href="https://cakeadmin.com">
              <span className="nav-link-icon">
                <i className="bi bi-file-person"></i>
              </span>
              <span>CakeAdmin About</span>
            </a>
            <a target="_blank" href="https://cakeadmin.com/contact">
              <span className="nav-link-icon">
                <i className="bi bi-person-raised-hand"></i>
              </span>
              <span>Support</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
