import axios from 'axios';
import appConfig from '../app.const';

class ServiceBase {
    constructor(props) {
        this.createURL = this.createURL.bind(this)
        this.getVideos = this.getVideos.bind(this)
        this.uploadVideoToServer = this.uploadVideoToServer.bind(this)
        this.sendEmailToRecepient = this.sendEmailToRecepient.bind(this)
    }

    createURL(currentURL) {
        return `${appConfig.SERVICE_BASE_PATH}${currentURL}`;
    }

    errorCallBack() {
        console.log('ERROR Call Back');
    }

    getVideos (data,onSuccess, onError = this.errorCallBack){
        axios.get(this.createURL(appConfig.SERVICE_GET_VIDEOS_LIST), {
            params: data
          })
          .then(function (response) {
            onSuccess(response);
          })
          .catch(onError);
    }

    uploadVideoToServer (data,onSuccess, onError = this.errorCallBack){
        axios.post(this.createURL(appConfig.SERVICE_PUSH_VIDEO_TO_SERVER), data)
          .then(function (response) {
            onSuccess(response);
          })
          .catch(onError);
    }

    sendEmailToRecepient (data,onSuccess, onError = this.errorCallBack) {
        axios.post(this.createURL(appConfig.SERVICE_SEND_EMAIL), data)
          .then(function (response) {
            onSuccess(response);
          })
          .catch(onError);
    }

    logoutFromApp(data,onSuccess, onError = this.errorCallBack) {
        axios.post(this.createURL(appConfig.SERVICE_LOGOUT), data)
          .then(function (response) {
            onSuccess(response);
          })
          .catch(onError);
    }

}

export default ServiceBase;