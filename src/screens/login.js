import React, { Component } from 'react';

class LoginComponent extends Component {
    //  this.props.history.push('/dashboard');
    constructor(store) {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler (){
        this.props.successHandler();        
    }


    render() {
      return (
                <div className="row">
                    <div className="col-md-offset-5 col-md-3">
                        <div className="form-login">
                        <h4>Login</h4>
                        <input type="text" id="userName" className="form-control input-sm chat-input" placeholder="username" />
                        <br/>
                        <input type="text" id="userPassword" className="form-control input-sm chat-input" placeholder="password" />
                        <br/>
                        <div className="wrapper">
                        <span className="group-btn">     
                            <a  className="btn btn-primary btn-md" onClick={this.clickHandler} >login <i className="fa fa-sign-in"></i></a>
                        </span>
                        </div>
                        </div>
                    
                    </div>
                </div>
            
      );
    }
  }
  
  export default LoginComponent;
