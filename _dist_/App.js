import React from "../web_modules/react.js";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route
} from "../web_modules/react-router-dom.js";
import Home2 from "./Home.js";
import Menu2 from "./Menu.js";
import About2 from "./About.js";
import Skills2 from "./Skills.js";
export default function App() {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement("div", {
    className: "container-sm d-flex flex-column h-100 mt-3"
  }, /* @__PURE__ */ React.createElement(Menu2, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/"
  }, /* @__PURE__ */ React.createElement(Home2, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/about"
  }, /* @__PURE__ */ React.createElement(About2, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/skills"
  }, /* @__PURE__ */ React.createElement(Skills2, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "*"
  }, /* @__PURE__ */ React.createElement(Redirect, {
    to: "/"
  })))));
}
