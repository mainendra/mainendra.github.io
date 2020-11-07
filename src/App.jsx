import React from "react";
import {
    HashRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Skills from "./Skills";

import "./App.css";

export default function App() {
    return (
        <Router>
            <div className="container-sm main-container">
                <Menu />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/skills">
                        <Skills />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

