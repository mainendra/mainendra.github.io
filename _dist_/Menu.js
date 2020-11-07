import React from "../web_modules/react.js";
import {Link} from "../web_modules/react-router-dom.js";
import resume from "../Resume2020.pdf.proxy.js";
export default function Menu() {
  return /* @__PURE__ */ React.createElement("ul", {
    className: "navbar navbar-expand-lg navbar-light"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "navbar-item nav-link mr-auto mb-2 mb-lg-0"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "M")), /* @__PURE__ */ React.createElement("li", {
    className: "navbar-item nav-link mb-2 mb-lg-0"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/about"
  }, "About")), /* @__PURE__ */ React.createElement("li", {
    className: "navbar-item nav-link mb-2 mb-lg-0"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/skills"
  }, "Technical Skills")), /* @__PURE__ */ React.createElement("li", {
    className: "navbar-item nav-link mb-2 mb-lg-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: resume,
    download: "mainendra",
    className: "menu-icon"
  }, /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 16 16",
    className: "bi bi-download",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
  })))));
}
