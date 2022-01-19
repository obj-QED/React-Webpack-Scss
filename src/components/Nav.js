import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {

  render() {
    return (
      <div className="navigation">
        <div className="logo">
          <Link to="/">
            <p>Logo</p>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <NavLink className="item" to="/">
              <li>Home</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
