import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Database extends Component {

  handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    console.log(text)
    // this.context.success(text)
  }

  render() {
    return (
      <div className="container">

          <h1>Database</h1>

          <div id="customer-container">
        <form id="search" name="contact-form" className="col s12" onSubmit={this.context.handleSubmit} >

            <div className="input-field">
            <input type="text" className="name" id="full_name" onChange={this.handleChange} value={this.props.value} placeholder="Search by Name..." />
            </div>

            <button className="submit btn right" type="submit" value="Search" disabled
            > 
            Search
            </button>
        </form>
            </div>
     
          {/* DISPLAY INFORMATION COMPONENT HERE */}

          <div className="fixed-action-btn">
           <Link to="database/newcustomer" className="btn-large red">
               <i className="material-icons">
                   add customer
               </i>
           </Link>
       </div>
      </div>
    )
  }
};

export default Database
