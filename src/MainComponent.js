import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardComponent from './screens/dashboard';

export default class MainContentComponent extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler (){
        console.log('YES ')
    }

    render() {

       return  (
        <div>
            <DashboardComponent />
            </div>
       );
    }
}