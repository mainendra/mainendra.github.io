import React from "react";
import {
    HashRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
} from "react-router-dom";
import me from "../public/me.png";

export default function App() {
    return (
        <Router>
            <div>
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', width: 200, margin: 20 }}>
                    <li>
                        <Link to="/">M</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Tech Blogs</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
            <img src={me} style={{
                borderRadius: 100,
                height: 200,
                width: 200,
                marginBottom: 20,
            }}/>
            <h3 style={{ fontWeight: 'bold' }}>Mainendra Patel</h3>
            <h4>JavaScript developer / Coding enthusiast</h4>
        </div>
    );
}

function About() {
    return (
        <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 20 }}>
            <h2>Bio</h2>
            <p style={{ display: 'flex', width: 800, textAlign: 'justify' }}>12+ years of experience in software development using JavaScript in Video development. Design and develop various navigator applications (to consume video) on set- top-box, mobile, Chromecast, Samsung TV and desktop platforms. 4+ years of experience in A11y on navigator web application for desktops. 2+ years of experience in UI test automation. While working some same domain for long duration, I’ve acquired distinct debugging skill to debug various applications.</p>
            <h3>Work Experience</h3>
            <p style={{ display: 'flex', flexDirection: 'column', width: 800, alignItems: 'flex-start'}}>
                <span>Cognizant (USA) - Technical Lead / Dec-2015 till now</span>
                <span>itaas – a Cognizant Company (India) - Technical Lead / Dec-2007 to Dec-2015</span>
                <span>Spartan Labs Pvt. Ltd. (India) - Associate Software Engineer / Apr-2007 to Dec-2007</span>
            </p>
        </div>
    );
}

function Blogs() {
    return (
        <div>
            <h2>Blogs</h2>
        </div>
    );
}
