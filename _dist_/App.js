import React from "../web_modules/react.js";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "../web_modules/react-router-dom.js";
import me2 from "../me.png.proxy.js";
export default function App() {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    style: {listStyle: "none", display: "flex", justifyContent: "space-between", width: 200, margin: 20}
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "M")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/about"
  }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/blogs"
  }, "Tech Blogs"))), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/"
  }, /* @__PURE__ */ React.createElement(Home, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/about"
  }, /* @__PURE__ */ React.createElement(About, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/blogs"
  }, /* @__PURE__ */ React.createElement(Blogs, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "*"
  }, /* @__PURE__ */ React.createElement(Redirect, {
    to: "/"
  })))));
}
function Home() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /* @__PURE__ */ React.createElement("img", {
    src: me2,
    style: {
      borderRadius: 100,
      height: 200,
      width: 200,
      marginBottom: 20
    }
  }), /* @__PURE__ */ React.createElement("h3", {
    style: {fontWeight: "bold"}
  }, "Mainendra Patel"), /* @__PURE__ */ React.createElement("h4", null, "JavaScript developer / Coding enthusiast"));
}
function About() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {display: "flex", flexDirection: "column", alignItems: "center", margin: 20}
  }, /* @__PURE__ */ React.createElement("h2", null, "Bio"), /* @__PURE__ */ React.createElement("p", {
    style: {display: "flex", width: 800, textAlign: "justify"}
  }, "12+ years of experience in software development using JavaScript in Video development. Design and develop various navigator applications (to consume video) on set- top-box, mobile, Chromecast, Samsung TV and desktop platforms. 4+ years of experience in A11y on navigator web application for desktops. 2+ years of experience in UI test automation. While working some same domain for long duration, I\u2019ve acquired distinct debugging skill to debug various applications."), /* @__PURE__ */ React.createElement("h3", null, "Work Experience"), /* @__PURE__ */ React.createElement("p", {
    style: {display: "flex", flexDirection: "column", width: 800, alignItems: "flex-start"}
  }, /* @__PURE__ */ React.createElement("span", null, "Cognizant (USA) - Technical Lead / Dec-2015 till now"), /* @__PURE__ */ React.createElement("span", null, "itaas \u2013 a Cognizant Company (India) - Technical Lead / Dec-2007 to Dec-2015"), /* @__PURE__ */ React.createElement("span", null, "Spartan Labs Pvt. Ltd. (India) - Associate Software Engineer / Apr-2007 to Dec-2007")));
}
function Blogs() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Blogs"));
}
