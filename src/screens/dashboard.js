import React, { Component } from 'react';
import SendNotificationComponent from './send-notification';
import UploadVideoComponent from './upload-video';
import VideoViewComponent from './video-view';
import LoaderComponent from './loader';
import ServiceBase from '../util/service';
import LoginComponent from './login';


class DashboardComponent extends Component {

    constructor(props) {
        super(props);
        
        this.handleSelection = this.handleSelection.bind(this);
        this.serviceInstance = new ServiceBase();
        this.logoutSuccessHandler = this.logoutSuccessHandler.bind(this);
        this.logoutErrorHandler = this.logoutErrorHandler.bind(this);
        this.loginSuccess = this.loginSuccess.bind(this);
        
    }

    componentDidMount() {
        this.setState({
            currentSelection : <LoginComponent successHandler={this.loginSuccess} />,
            showLoader: false,
            loggedIn: false,
            actionType:'login'
        });
    }

    loginSuccess () {
        this.setState({
            currentSelection : <VideoViewComponent/>,
            showLoader: false,
            loggedIn: true,
            actionType:'view_video'
        });
    }

    logoutErrorHandler () {
        this.setState({
            showLoader :false,
            currentSelection : <LoginComponent successHandler={this.loginSuccess} />,
            actionType:'login'
        });
        
    }
    
    logoutSuccessHandler () {
        this.setState({
            showLoader :false,
            currentSelection : <LoginComponent successHandler={this.loginSuccess} />,
            actionType:'login'
        });
        

    }
    handleSelection (e) {
        let actionType = e.target.getAttribute("action");
        let tempComponent = ''
        let showLoader = false;
        if (!this.state.loggedIn) {
            actionType = 'login'
        }
        if (actionType) {
            switch(actionType) {
                case 'view_video':
                tempComponent = <VideoViewComponent/>;
                break;
                case 'upload_video':
                tempComponent = <UploadVideoComponent/>;
                break;
                case 'send_email':
                tempComponent = <SendNotificationComponent/>;
                break;
                case 'logout':
                showLoader = true;
                this.serviceInstance.logoutFromApp({},this.logoutSuccessHandler,this.logoutErrorHandler)
                break;
                case 'login':
                tempComponent = <LoginComponent  successHandler={this.loginSuccess} />;
                break;

                default:
                    console.log('NO ACTION TYPE');
                break;
            }

        }
        this.setState({
            currentSelection : tempComponent,
            showLoader,
            actionType
        });
    }  
    
    isValidMenu (localAction) {
        return (this.state && this.state.actionType &&  localAction ===  this.state.actionType)
    }

    render() {
      return (
        <div className="row">
          <h1> Dashboard </h1>
          <div className="col-md-2 sidenav">
            <ul className="nav nav-pills nav-stacked">
            <li onClick={this.handleSelection} className= {this.isValidMenu('login') ? 'leftNav leftNavSelected' : 'leftNav'}   action="login" >Login</li>
                <li onClick={this.handleSelection} className={this.isValidMenu('view_video') ? 'leftNav leftNavSelected' : 'leftNav'}  action="view_video" >View Videos</li>
                <li onClick={this.handleSelection}  className={this.isValidMenu('upload_video') ? 'leftNav leftNavSelected' : 'leftNav'}  action="upload_video">Upload Videos</li>
                <li onClick={this.handleSelection}   className={this.isValidMenu('logout') ? 'leftNav leftNavSelected' : 'leftNav'} action="logout">Logout</li>
            </ul>
          </div>
          <div className="col-md-7" > 
          <LoaderComponent showLoader= {this.state && this.state.showLoader} />
          {this.state && this.state.currentSelection}
          </div>
        </div>
      );
    }
  }
  
  export default DashboardComponent;
