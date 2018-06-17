import React, { Component } from 'react';

class UploadVideoComponent extends Component {

    handleSubmit () {
      const IDs  = document.getElementById('emailId').value;
     console.log('SUBMIT',IDs); 
    }
    render() {
      return (
                <div className="row">
                   <h2> UploadVideoComponent View </h2> 
                   <br/>
                   <div className="legend"> Select File </div>
                   <input type="file" />
                  <br/>
                  <br/>
                  
                  <div className="form-group">
                  <label htmlFor="emailId">Add Email Recepients:</label>
                  <textarea className="form-control" rows="5" id="emailId"></textarea>
                </div>
                

                  <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
            
      );
    }
  }
  
  export default UploadVideoComponent;