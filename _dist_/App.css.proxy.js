// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".main-container {\n     display: flex;\n     flex-direction: column;\n     height: inherit;\n}\n\n.contact {\n    display: flex;\n    justify-content: center;\n    margin-top: 50px;\n}\n\n.icon {\n    margin: 0 10px;\n}\n\n.icon svg {\n    height: 40px;\n    width: 40px;\n}\n\n.menu-icon svg {\n    height: 20px;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}