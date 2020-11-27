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

export default function App() {
    return (
        <Router>
            <div className="flex flex-col w-2/3 h-full mx-auto">
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

