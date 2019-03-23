import React, { Component } from 'react';
import axios from 'axios';
import UserContext from './user-context';

class GlobalState extends Component {

    state = {
        login: []
    }
    
    getUser = async () => {
        const res = await axios.get('/api/current-user');
        const data = res.data
        this.setState({
            login: data
        });
        
    };
    postUser = async (values) => {
        await axios.post('/api/customers', values);
    }

    // componentWillUpdate(...nextState) {
    //     console.log(nextState[1])
    // }

  render() {
    return (
        <UserContext.Provider 
            value={{
                getUser: this.getUser,
                postUser: this.postUser,
                newCustomer: this.state.newCustomer,
                login: this.state.login,
                loginStat: this.state.loginStat,
                storedata: this.storedata
            }}
        >
            {this.props.children}
        </UserContext.Provider>
    )
  }
}

export default GlobalState
