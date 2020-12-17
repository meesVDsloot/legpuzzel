import React, { Component } from "react";
import { Router, Switch, Route, useRouteMatch, Link, useParams } from "react-router-dom";
import { App } from './components/App'
import { HomePage } from './components/HomePage'
import { Puzzel } from './components/Puzzel'
import { PuzzelSnapfit} from './components/PuzzelSnapfit'
import history from './history'
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/home" exact component={HomePage}/>
                    <Route path="/puzzels/" exact component={App} />
                    <Route path="/gekozenPuzzel/puzzelName=:name" exact component={Puzzel} />
                    <Route path="/puzzelSnapfit" exact component={PuzzelSnapfit} />
                </Switch>
            </Router>
        )
    }
}
