import React, { Component } from 'react';
import ServiceBase from '../util/service';
import LoaderComponent from './loader';
import SingleVideoComponent from './single-video';

class VideoViewComponent extends Component {
    constructor(props) {
      super(props);
      this.serviceInstance = new ServiceBase();
      this.onListSuccessHandler = this.onListSuccessHandler.bind(this);
      this.onListFailureHandler = this.onListFailureHandler.bind(this);
    }

    onListSuccessHandler (response) {
      const resp = response.data;
      this.setState({
        videList:resp.data,
        showLoader :false
      });
    }

    onListFailureHandler () {
      this.setState({
        videList:[],
        showLoader :false
      });

    }

    getFinalVideList () {
      const listVideos = (this.state && this.state.videList) ? this.state.videList : [];
      let finalList =[];
      
      listVideos.forEach(element => {
        const randomnumber = Math.floor(Math.random()*100) + 1
        const key = `svc_${randomnumber}`;
        console.log(key);
        finalList.push(
          <SingleVideoComponent 
          {...element}
          key
          
          />
        )
      });
      return finalList;
    }

    componentDidMount (){
      this.setState({
        videList:[],
        showLoader :true
      });
      this.serviceInstance.getVideos({},this.onListSuccessHandler,this.onListFailureHandler);
    }
    render() {
      return (
                <div className="row">
                  <LoaderComponent showLoader= {this.state && this.state.showLoader} />
                   <h2> Video View </h2> 
                    {this.getFinalVideList() }
                </div>
            
      );
    }
  }
  
  export default VideoViewComponent;
