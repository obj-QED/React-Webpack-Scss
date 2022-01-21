import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="navigation hidden">
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
