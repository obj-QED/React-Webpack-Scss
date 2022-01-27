import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navigation hidden">
        <div className="logo">
          <Link to={{
            pathname: "/"
          }}>
            <p>Logo</p>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <NavLink className="item" to="/">
              <Link to="/404">
                404 Error
              </Link>
            </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}