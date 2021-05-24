import React, {useEffect, useState} from "react";
import {
    Router,
    Switch,
    Redirect,
    Route,
    BaseLocationHook,
} from "wouter";

import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Skills from "./Skills";

const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

const navigate = (to: string) => (window.location.hash = to);

const useHashLocation: BaseLocationHook = () => {
  const [loc, setLoc] = useState(currentLocation());

  useEffect(() => {
    // this function is called whenever the hash changes
    const handler = () => setLoc(currentLocation());

    // subscribe to hash changes
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return [loc, navigate];
};

export default function App() {
    return (
        <Router hook={useHashLocation}>
            <div className="flex flex-col w-2/3 h-full mx-auto">
                <Menu />
                <Switch>
                    <Route path="/">
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
