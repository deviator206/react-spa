import React, { Component } from 'react';

class LoaderComponent extends Component {
    constructor(props) {
        super(props);
    }
    
    render(props) {
        if(!this.props.showLoader) {
            return '';
        }
      return (
                <div className="loader">
                   
                </div>
            
      );
    }
  }
  
  export default LoaderComponent;