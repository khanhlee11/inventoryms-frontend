import React from 'react';
import { NavLink } from 'react-router-dom';
import ApiService from '../service/ApiService';

import './Sidebar.css';


const logout = () => {
  ApiService.logout();
};

const SideBar = () => {
  const isAuth = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();

  return (
    <div className="sidebar">
      <h1 className="smartbuy">Smart Buy</h1>
      <ul className="nav-links">
        {isAuth && (
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        )}

        {isAuth && (
          <li>
            <NavLink to="/transaction">Transaction</NavLink>
          </li>
        )}

        {isAdmin && (
          <li>
            <NavLink to="/category">Category</NavLink>
          </li>
        )}

        {isAdmin && (
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
        )}

        {isAdmin && (
          <li>
            <NavLink to="/supplier">Supplier</NavLink>
          </li>
        )}

        {isAuth && (
          <li>
            <NavLink to="/purchase">Purchase</NavLink>
          </li>
        )}

        {isAuth && (
          <li>
            <NavLink to="/sell">Sell</NavLink>
          </li>
        )}

        {isAuth && (
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        )}

        {isAuth && (
          <li>
            <NavLink onClick={logout} to="/login">
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
