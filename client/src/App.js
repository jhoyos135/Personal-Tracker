import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './contex/user-context';

import Header from './components/Header';

import './App.css';

class App extends Component {

  static contextType = UserContext;


  componentWillMount() {
    this.context.getUser();
    console.log(this.context.login)
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>

        <Header />

        </BrowserRouter>
        <h4><em>App in development</em></h4>
      </div>
    );
  }
}

export default App;
