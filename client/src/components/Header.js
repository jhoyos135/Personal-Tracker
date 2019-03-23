import React, { Component } from 'react';
import UserContext from '../contex/user-context';
import { Redirect , Link, Route} from 'react-router-dom';


class Header extends Component {

  static contextType = UserContext;

  
  renderContent() {
    switch(this.context.login._id) {
      case undefined:
        return(
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/auth/google"> Login with<i className="fa fa-google-plus" style={{marginLeft: '5px'}}></i>
            </a>
          </li>
          {/* <Redirect to="/"/> */}
        </ul>
        )

        default:
        return (
          
          <div>
              <Link to="/" className="left brand-logo">
                  {this.context.login.displayName}
              </Link>
            <ul id="nav-mobile" className="right">
                <li>
                  <a href="/api/logout" onClick={this.logOut}>log out</a>
                </li>
                <li>
                  <Link to="/database">Database</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
          </div>
          
        )
    };
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            
              {this.renderContent()}

          </div>
        </nav>
      </div>
    )
  };
};

export default Header
