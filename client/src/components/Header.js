import React, { Component } from 'react';
import UserContext from '../contex/user-context';

class Header extends Component {

    static contextType = UserContext;

  render() {
    return (
      <div>
      <nav>
    <div className="nav-wrapper container">
      <a href="/" className="brand-logo left">
        {this.context.login.displayName}
      </a>
      <ul id="nav-mobile" className="right">
        <li><a href="/auth/google">Login with <i className="fa fa-google-plus"></i> </a></li>
      </ul>
    </div>
        </nav>
      </div>
    )
  }
}

export default Header
