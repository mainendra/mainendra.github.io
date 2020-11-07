// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".technical-skills {\n    position: relative;\n    flex-direction: column;\n    align-self: center;\n    margin: 20px;\n    width: 100%;\n    max-width: 800px;\n}\n\n.technical-skills > h3 {\n    margin: 20px 0;\n}\n\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}