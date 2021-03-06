import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';



import Home from '../pages/home';
import Destination from '../pages/destination';
import Find from '../pages/find';
// 这个路由没用，点击弹出一个遮罩层即可
import Member from '../pages/member';
import Mine from '../pages/mine';
import Tour from '../pages/tour';
import Card from '../pages/card';

import App from '../App'

export default class RouteConfig extends Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/home" component={Home}/>
                        <Route path="/destination" component={Destination}/>
                        <Route path="/find" component={Find}/>
                        <Route path="/member" component={Member}/>
                        <Route path="/mine" component={Mine}/>
                        <Route path="/tour" component={Tour}/>
                        <Route path="/card" component={Card}/>
                        <Redirect from="/" to="/home"/>
                    </Switch>
                </App>
                
            </HashRouter>
        )
    }
}


