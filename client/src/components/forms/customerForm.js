import React, { Component } from 'react'
import UserContext from '../../contex/user-context';
import MyTextInput from './MyTextInput';
import Alert from './Alert';
import classNames from 'classnames';


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class customerForm extends Component {
    state = {
        firstname: null,
        lastname: null,
        email: null,

        formErrors: {
          firstName: "",
          lastName: "",
          Email: ""
        },
        alert: false
        }

      static contextType = UserContext;
    
      handleSubmit = (e) => {
        e.preventDefault()
        if(formValid(this.state)) {
          this.context.postUser(this.state);
        }
        if(!formValid(this.state)) {
          this.setState({
            alert: true
          })
        }
        
      }

      handleChange = (evt) => {
        evt.preventDefault();
        const { name, value } = evt.target;
        let formErrors = { ...this.state.formErrors };
        
        switch (name) {
          case "firstname":
            formErrors.firstName =
              value === '' ? "Please add a value" 
              : (value.length < 3) ? 'Add a minimun of 3 letters'
              : ''
            break;
          case "lastname":
            formErrors.lastName =
              value === '' ? "Please add a value" 
              : (value.length < 3) ? 'Add a minimun of 3 letters'
              : ''
            break;
          case "email":
            formErrors.Email =
              value === '' ? "Please add a value" 
              : (!emailRegex.test(value)) ? 'Invalid Email Address'
              : ''
            break;
          default:
            break;
        }
        this.setState({ [evt.target.name]: evt.target.value });
        this.setState({ formErrors, [name]: value });
        this.setState({ alert: false })

      }

  render() {
    const { formErrors, alert } = this.state;

    return (
      <div className="container">

      { alert === true ?
      <Alert msg="There was an Error" alertState = {this.state.alert} 
       /> 
      : '' }

        <h1>Add Customer</h1>

    <form id="main_form" onSubmit={this.handleSubmit} noValidate>

      <div className="firstName">
          <MyTextInput
              className={formErrors.firstName.length > 0 ? "error" : null} 
              value={this.state.firstname}
              name="firstname"
              type="text"
              onChange={this.handleChange}
              placeholder='First Name'
              
              />
          { formErrors.firstName.length > 0 && (
          <span className="errorMessage">{formErrors.firstName}</span>
        )}
      </div>
      <div className="lastName">
          <MyTextInput
              className={formErrors.lastName.length > 0 ? "error" : null} 
              value={this.state.lastname}
              name="lastname"
              type="text"
              onChange={this.handleChange}
              placeholder='Last Name'
              
              />
          {formErrors.lastName.length > 0 && (
          <span className="errorMessage">{formErrors.lastName}</span>
        )}
      </div>
      <div className="email">
          <MyTextInput
              className={formErrors.Email.length > 0 ? "error" : null} 
              value={this.state.email}
              name="email"
              type="email"
              onChange={this.handleChange}
              placeholder='Email'
              
              />
          {formErrors.Email.length > 0 && (
          <span className="errorMessage">{formErrors.Email}</span>
        )}
      </div>

              <div className="fixed-action-btn">
              <input className="btn-large teal " type="submit"
              />
              </div>
              
    </form>
      </div>
    )
  }
}

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export default customerForm
