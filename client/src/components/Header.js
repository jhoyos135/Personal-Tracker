import React, { Component } from 'react';
import UserContext from '../contex/user-context';

class Header extends Component {

  static contextType = UserContext;

  
  renderContent() {
    switch(this.context.login._id) {
      case undefined:
        return(
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/auth/google">Login with  
              <i className="fa fa-google-plus" style={{marginLeft: '5px'}}></i> 
            </a>
          </li>
        </ul>
        )

        default:
        return (
          
          <div>
                  <a href="/" className="left brand-logo">
                      {this.context.login.displayName}
                  </a>
            <ul id="nav-mobile" className="right">
                <li>
                  <a href="/api/logout" onClick={this.logOut}>log out</a>
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
