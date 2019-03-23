import React, { Component } from 'react'
import UserContext from '../../contex/user-context';

import MyTextInput from './MyTextInput';

class customerForm extends Component {
    state = {
        firstname: '',
        lastname: '',
        email:''
      }

      static contextType = UserContext;
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.context.postUser(this.state);
      }
      handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
      }

  render() {
    return (
      <div className="container">
    <form onSubmit={this.handleSubmit}>

            <MyTextInput 
            value={this.state.firstname}
            name="firstname"
            onChange={this.handleChange}
            placeholder='First Name'
             />
            <MyTextInput 
            value={this.state.lastname}
            name="lastname"
            onChange={this.handleChange}
            placeholder='Last Name'
             />
            <MyTextInput 
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
            placeholder='Email'
             />



            <div className="fixed-action-btn">
            <input className="btn-large indigo" type="submit" />
            </div>
            
    </form>
      </div>
    )
  }
}

export default customerForm
