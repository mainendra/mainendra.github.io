import React, {useState, useEffect} from "../web_modules/react.js";
function Sun({onClick}) {
  return /* @__PURE__ */ React.createElement("div", {
    tabIndex: "0",
    onClick,
    className: "cursor-pointer"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  })));
}
function Moon({onClick}) {
  return /* @__PURE__ */ React.createElement("div", {
    tabIndex: "0",
    onClick,
    className: "cursor-pointer"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  })));
}
export default function DarkToggle() {
  const [dark, setDark] = useState(false);
  const toggleDark = (dark2) => {
    localStorage.setItem("theme", dark2 ? "dark" : "light");
    setDark(dark2);
    updateThemeClass(dark2);
  };
  const updateThemeClass = (dark2) => {
    if (dark2) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  };
  useEffect(() => {
    const dark2 = localStorage.getItem("theme") === "dark";
    setDark(dark2);
    updateThemeClass(dark2);
  }, [setDark]);
  return /* @__PURE__ */ React.createElement("div", null, dark ? /* @__PURE__ */ React.createElement(Sun, {
    onClick: () => toggleDark(!dark)
  }) : /* @__PURE__ */ React.createElement(Moon, {
    onClick: () => toggleDark(!dark)
  }));
}
