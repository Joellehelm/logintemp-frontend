import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

class home extends Component {
    render() {
        return (
            <div>
                <h1>What would you like to do?</h1><br/>

                <Link to="/login">Login</Link><br/><br/>
                <Link to="/signup">SignUp</Link>

                {/* <a href="/signup">SignUp</a><br/><br/>
                <a href="/login">Login</a> */}
            </div>
        );
    }
}

export default home;