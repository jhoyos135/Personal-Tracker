import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserContext from './contex/user-context';

import Header from './components/Header';
import Database from './components/Database'
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import NewCustomer from './components/forms/customerForm';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.context.getUser();
  }

  static contextType = UserContext;

  isLoggedIn(){
    if(this.context.login._id === undefined) {
      return (
        <BrowserRouter>
        <div>

        <Header />
        <Route exact path='/' 
        component={Landing} 
        />
        
        </div>
        </BrowserRouter>
      )
    } else {
      return (
        <BrowserRouter>
        <div>

        <Header />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/database" component={Database} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/database/newcustomer" component={NewCustomer} />

        </div>
        </BrowserRouter>
      )
    }
  }
  
  render() {

    return (
      <div className="App">
          {this.isLoggedIn()}
          
      </div>
    );
  }
}

export default App;
