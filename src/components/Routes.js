import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Tracker from './covid_tracker';
// import Header from "./header";
import Stock from "./stockmarket";
import News from "./news";
import History from './history';
import Commodity from "./commodity";

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/" exact component={Tracker} />
                    <Route path="/commodity" component={Commodity} />
                    <Route path="/news" component={News} />
                    <Route path="/stock" component={Stock} />
                </Switch>
            </Router>
            
        )
    }
}