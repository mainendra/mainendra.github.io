import React from "../web_modules/react.js";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "../web_modules/react-router-dom.js";
import me2 from "../me.png.proxy.js";
import resume from "../Resume2020.pdf.proxy.js";
import "./App.css.proxy.js";
export default function App2() {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement("div", {
    className: "container-md",
    style: {display: "flex", flexDirection: "column", height: "inherit"}
  }, /* @__PURE__ */ React.createElement("ul", {
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
  }))))), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/"
  }, /* @__PURE__ */ React.createElement(Home, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/about"
  }, /* @__PURE__ */ React.createElement(About, null)), /* @__PURE__ */ React.createElement(Route, {
    path: "/skills"
  }, /* @__PURE__ */ React.createElement(TechnicalSkills, null)), /* @__PURE__ */ React.createElement(Route, {
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
      alignItems: "center",
      justifyContent: "center",
      flex: 1
    }
  }, /* @__PURE__ */ React.createElement("img", {
    src: me2,
    style: {
      borderRadius: 100,
      height: 200,
      width: 200,
      marginBottom: 50
    }
  }), /* @__PURE__ */ React.createElement("h3", {
    style: {fontWeight: "bold"}
  }, "Mainendra Patel"), /* @__PURE__ */ React.createElement("h4", null, "JavaScript developer / Coding enthusiast"), /* @__PURE__ */ React.createElement("div", {
    className: "contact"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "icon",
    href: "mailto:mainendra@gmail.com",
    "aria-label": "mail"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
  }))), /* @__PURE__ */ React.createElement("a", {
    className: "icon",
    href: "https://github.com/mainendra",
    "aria-label": "github"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  }))), /* @__PURE__ */ React.createElement("a", {
    className: "icon",
    href: "https://dev.to/mainendra",
    "aria-label": "dev.to"
  }, /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 50 40",
    fill: "#000000",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: "50",
    height: "40",
    rx: "3"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19.099 23.508c0 1.31-.423 2.388-1.27 3.234-.838.839-1.942 1.258-3.312 1.258h-4.403V12.277h4.492c1.31 0 2.385.423 3.224 1.27.846.838 1.269 1.912 1.269 3.223v6.738zm-2.808 0V16.77c0-.562-.187-.981-.562-1.258-.374-.285-.748-.427-1.122-.427h-1.685v10.107h1.684c.375 0 .75-.138 1.123-.415.375-.285.562-.708.562-1.27zM28.185 28h-5.896c-.562 0-1.03-.187-1.404-.561-.375-.375-.562-.843-.562-1.404V14.243c0-.562.187-1.03.562-1.404.374-.375.842-.562 1.404-.562h5.896v2.808H23.13v3.65h3.088v2.808h-3.088v3.65h5.054V28zm7.12 0c-.936 0-1.684-.655-2.246-1.965l-3.65-13.758h3.089l2.807 10.804 2.808-10.804H41.2l-3.65 13.758C36.99 27.345 36.241 28 35.305 28z",
    fill: "#ffffffff"
  }))), /* @__PURE__ */ React.createElement("a", {
    className: "icon",
    href: "https://www.linkedin.com/in/mainendra",
    "aria-label": "linkedin"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  }))), /* @__PURE__ */ React.createElement("a", {
    className: "icon",
    href: "https://twitter.com/mainendrap",
    "aria-label": "twitter"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
  })))));
}
function About() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {display: "flex", flexDirection: "column", alignSelf: "center", margin: 20, width: "100%", maxWidth: 800}
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-weight-bold"
  }, "Bio"), /* @__PURE__ */ React.createElement("p", {
    style: {display: "flex", textAlign: "justify"}
  }, "12+ years of experience in software development using JavaScript in Video development. Design and develop various navigator applications (to consume video) on set- top-box, mobile, Chromecast, Samsung TV and desktop platforms. 4+ years of experience in A11y on navigator web application for desktops. 2+ years of experience in UI test automation. While working some same domain for long duration, I\u2019ve acquired distinct debugging skill to debug various applications."), /* @__PURE__ */ React.createElement("h3", {
    className: "font-weight-bold"
  }, "Work Experience"), /* @__PURE__ */ React.createElement("p", {
    style: {display: "flex", flexDirection: "column", alignItems: "flex-start"}
  }, /* @__PURE__ */ React.createElement("span", null, "Cognizant (USA) - Technical Lead / Dec-2015 till now"), /* @__PURE__ */ React.createElement("span", null, "itaas \u2013 a Cognizant Company (India) - Technical Lead / Dec-2007 to Dec-2015"), /* @__PURE__ */ React.createElement("span", null, "Spartan Labs Pvt. Ltd. (India) - Associate Software Engineer / Apr-2007 to Dec-2007")), /* @__PURE__ */ React.createElement("h3", {
    className: "font-weight-bold"
  }, "Education"), /* @__PURE__ */ React.createElement("p", {
    style: {display: "flex", flexDirection: "column", alignItems: "flex-start"}
  }, /* @__PURE__ */ React.createElement("span", null, "MS program in Advanced Information Technology / Advanced software technologies \u2013 International Institute of information technology, Pune, Maharashtra, India"), /* @__PURE__ */ React.createElement("span", null, "Bachelor of Engineering / Information Technology \u2013 Dharmsinh Desai Institute of Technology, Nadiad, Gujarat, India")));
}
function TechnicalSkills() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "technical-skills",
    style: {position: "relative", display: "flex", flexDirection: "column", alignSelf: "center", margin: 20, width: "100%", maxWidth: 800}
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-weight-bold"
  }, "Technical Skills"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("h3", {
    className: "font-weight-bold"
  }, "Languages"), /* @__PURE__ */ React.createElement("span", null, "JavaScript, TypeScript, HTML5, CSS3, Python*, Ruby*, Java*"), /* @__PURE__ */ React.createElement("h3", {
    className: "font-weight-bold"
  }, "Frameworks"), /* @__PURE__ */ React.createElement("span", null, "ReactJS, AngularJS, BackboneJS, Vue3*, WPE-Lightning*"), /* @__PURE__ */ React.createElement("h3", {
    className: "font-weight-bold"
  }, "Tools"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "font-weight-bold"
  }, "Version Control: "), "Git, GitHub, Gitlab"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "font-weight-bold"
  }, "Task & Project Management: "), "Chalk Pages, Jira"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "font-weight-bold"
  }, "CI/CD: "), "GitlabCI, GitHub Actions"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "font-weight-bold"
  }, "IDE/Editor: "), "Vim, Visual Studio Code"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "font-weight-bold"
  }, "Web Debugger: "), "Chrome and Firefox Developer Tools"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "font-weight-bold"
  }, "Analytics: "), "Kibana, Tableau"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "font-weight-bold"
  }, "A11y: "), "NVDA, Jaws, Speech Synthesis")), /* @__PURE__ */ React.createElement("h3", {
    className: "font-weight-bold"
  }, "Paradigms"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Accessiblity"), /* @__PURE__ */ React.createElement("li", null, "Agile Software Development"), /* @__PURE__ */ React.createElement("li", null, "CI/CD"), /* @__PURE__ */ React.createElement("li", null, "Automated Testing"), /* @__PURE__ */ React.createElement("li", null, "RESTful API"), /* @__PURE__ */ React.createElement("li", null, "Asynchronous Programming"), /* @__PURE__ */ React.createElement("li", null, "Event-driven Programming")), /* @__PURE__ */ React.createElement("div", {
    className: "position-absolute top-100 left-100",
    style: {display: "flex", width: 100}
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-weight-bold"
  }, "*"), " familiar with"));
}
