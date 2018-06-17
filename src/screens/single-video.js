import React, { Component } from 'react';

class SingleVideoComponent extends Component {
    constructor (props) {
        super(props);

    }
    
    render() {
      return (
                <div className="row">
                   <h2>Video Name: {this.props.first_name} </h2> 
                   
                   <ul className="nav nav-pills nav-stacked">
                    <li  > Feedback : {this.props.avatar}</li>
                    <li  > Feedback : {this.props.last_name}</li>
                    <li  > Feedback : {this.props.id}</li>
                </ul>
                      
                   
                </div>
            
      );
    }
  }
  
export default SingleVideoComponent;