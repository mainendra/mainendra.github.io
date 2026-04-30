import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

const themes = {
  'Tokyo Night': {
    css: { bg: '#1a1b26', bgOuter: '#13141c', bgHint: '#16161e', fg: '#c0caf5', fgDim: '#565f89', accent: '#7aa2f7', border: '#33467c', green: '#9ece6a' },
    xterm: { background: '#1a1b26', foreground: '#c0caf5', cursor: '#c0caf5', selectionBackground: '#33467c', black: '#15161e', red: '#f7768e', green: '#9ece6a', yellow: '#e0af68', blue: '#7aa2f7', magenta: '#bb9af7', cyan: '#7dcfff', white: '#a9b1d6' },
  },
  'Dracula': {
    css: { bg: '#282a36', bgOuter: '#1e1f29', bgHint: '#21222c', fg: '#f8f8f2', fgDim: '#6272a4', accent: '#bd93f9', border: '#44475a', green: '#50fa7b' },
    xterm: { background: '#282a36', foreground: '#f8f8f2', cursor: '#f8f8f2', selectionBackground: '#44475a', black: '#21222c', red: '#ff5555', green: '#50fa7b', yellow: '#f1fa8c', blue: '#bd93f9', magenta: '#ff79c6', cyan: '#8be9fd', white: '#f8f8f2' },
  },
  'Gruvbox': {
    css: { bg: '#282828', bgOuter: '#1d2021', bgHint: '#1d2021', fg: '#ebdbb2', fgDim: '#928374', accent: '#fe8019', border: '#504945', green: '#b8bb26' },
    xterm: { background: '#282828', foreground: '#ebdbb2', cursor: '#ebdbb2', selectionBackground: '#504945', black: '#1d2021', red: '#fb4934', green: '#b8bb26', yellow: '#fabd2f', blue: '#83a598', magenta: '#d3869b', cyan: '#8ec07c', white: '#ebdbb2' },
  },
  'Solarized Light': {
    css: { bg: '#fdf6e3', bgOuter: '#eee8d5', bgHint: '#eee8d5', fg: '#657b83', fgDim: '#93a1a1', accent: '#268bd2', border: '#d3cbb7', green: '#859900' },
    xterm: { background: '#fdf6e3', foreground: '#657b83', cursor: '#657b83', selectionBackground: '#eee8d5', black: '#073642', red: '#dc322f', green: '#859900', yellow: '#b58900', blue: '#268bd2', magenta: '#d33682', cyan: '#2aa198', white: '#eee8d5' },
  },
  'GitHub Light': {
    css: { bg: '#ffffff', bgOuter: '#f0f0f0', bgHint: '#f6f8fa', fg: '#24292e', fgDim: '#6a737d', accent: '#0366d6', border: '#e1e4e8', green: '#22863a' },
    xterm: { background: '#ffffff', foreground: '#24292e', cursor: '#24292e', selectionBackground: '#e1e4e8', black: '#24292e', red: '#d73a49', green: '#22863a', yellow: '#e36209', blue: '#0366d6', magenta: '#6f42c1', cyan: '#1b7c83', white: '#f6f8fa' },
  },
};

const themeNames = Object.keys(themes);
let themeIdx = parseInt(localStorage.getItem('themeIdx') || '2', 10) % themeNames.length;

function applyTheme(t) {
  const root = document.documentElement;
  Object.entries(t.css).forEach(([k, v]) => {
    const prop = '--' + k.replace(/([A-Z])/g, '-$1').toLowerCase();
    root.style.setProperty(prop, v);
  });
}

applyTheme(themes[themeNames[themeIdx]]);

const PROMPT = '\x1b[32m❯\x1b[0m ';
const CYAN = '\x1b[36m';
const YELLOW = '\x1b[33m';
const GREEN = '\x1b[32m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const R = '\x1b[0m';

const commands = {
  help: () => [
    `${BOLD}Available commands:${R}`,
    `  ${CYAN}about${R}       Bio & background`,
    `  ${CYAN}experience${R}  Work history`,
    `  ${CYAN}education${R}   Academic background`,
    `  ${CYAN}skills${R}      Technical skills`,
    `  ${CYAN}highlights${R}  Key highlights`,
    `  ${CYAN}projects${R}    Project details`,
    `  ${CYAN}contact${R}     Get in touch`,
    `  ${CYAN}resume${R}      Download resume`,
    `  ${CYAN}clear${R}       Clear terminal`,
  ],

  about: () => [
    `${BOLD}${CYAN}About Me${R}`,
    ``,
    `Passionate developer with deep expertise in JavaScript, TypeScript and`,
    `modern web technologies. Skilled in creating scalable, user-friendly, and`,
    `accessible applications across platforms such as desktop, mobile, browsers,`,
    `smart TVs, and cloud environments. Strong problem-solving, debugging, and`,
    `collaboration skills with a focus on quality, performance, and user experience.`,
  ],

  experience: () => [
    `${BOLD}${CYAN}Work Experience${R}`,
    ``,
    `  ${GREEN}●${R} ${BOLD}Cognizant${R} - Technical Lead`,
    `    ${DIM}Nov 2015 – Present${R}`,
    `  ${GREEN}●${R} ${BOLD}itaas – a Cognizant Company${R} - Technical Lead`,
    `    ${DIM}Dec 2007 – Nov 2015${R}`,
    `  ${GREEN}●${R} ${BOLD}Spartan Labs Pvt. Ltd.${R} - Associate Software Engineer`,
    `    ${DIM}Apr 2007 – Dec 2007${R}`,
  ],

  education: () => [
    `${BOLD}${CYAN}Education${R}`,
    ``,
    `  ${GREEN}●${R} ${BOLD}MS - Advanced Information Technology${R}`,
    `    I2IT Pune, Maharashtra, India`,
    `  ${GREEN}●${R} ${BOLD}BE - Information Technology${R}`,
    `    DDIT Nadiad, Gujarat, India`,
  ],

  skills: () => [
    `${BOLD}${CYAN}Technical Skills${R}`,
    ``,
    `  ${YELLOW}Languages${R}       JavaScript, TypeScript, HTML5, CSS3, Python*, Ruby*, Java*`,
    `  ${YELLOW}Frameworks${R}      React, Angular, BackboneJS, SolidJS*, Svelte*, LightningJS`,
    `  ${YELLOW}Runtime/API${R}     Node.js, REST APIs, GraphQL*`,
    `  ${YELLOW}Build Tools${R}     Webpack, Gulp, Vite`,
    `  ${YELLOW}Version Ctrl${R}    Git, GitHub, GitLab`,
    `  ${YELLOW}CI/CD${R}           GitLab CI, GitHub Actions`,
    `  ${YELLOW}Containers${R}      Docker`,
    `  ${YELLOW}IDE${R}             Vim, VS Code`,
    `  ${YELLOW}Debugging${R}       Chrome & Firefox DevTools`,
    `  ${YELLOW}Analytics${R}       Kibana, Tableau`,
    `  ${YELLOW}Project Mgmt${R}    Jira`,
    `  ${YELLOW}A11y${R}            WCAG, NVDA, JAWS, Speech Synthesis`,
    ``,
    `  ${YELLOW}Practices${R}       Agile, Scrum, CI/CD, TDD/BDD, Event-driven &`,
    `                  Async Programming, Debugging, Problem Solving`,
    ``,
    `  ${DIM}* familiar with${R}`,
  ],

  highlights: () => [
    `${BOLD}${CYAN}Key Highlights${R}`,
    ``,
    `  ${GREEN}●${R} ${BOLD}JavaScript & TypeScript:${R} 15+ years building applications`,
    `    using modern frameworks and libraries`,
    `  ${GREEN}●${R} ${BOLD}Cross-Platform:${R} Delivered apps for web, mobile, smart TVs`,
    `    (Samsung, LG, Fire TV, Android TV), Chromecast, Xbox, desktop`,
    `  ${GREEN}●${R} ${BOLD}Accessibility:${R} 7+ years improving inclusivity and WCAG`,
    `    compliance using NVDA, JAWS, and screen readers`,
    `  ${GREEN}●${R} ${BOLD}Automation:${R} 4+ years implementing UI test automation`,
    `  ${GREEN}●${R} ${BOLD}Debugging:${R} Strong ability to troubleshoot, profile, and`,
    `    enhance performance in complex environments`,
    `  ${GREEN}●${R} ${BOLD}Leadership:${R} Agile workflows, code reviews, mentoring,`,
    `    and CI/CD best practices`,
  ],

  projects: () => [
    `${BOLD}${CYAN}Projects${R}`,
    ``,
    `  ${GREEN}●${R} ${BOLD}Video Navigator${R} - Cross-Platform Streaming Application`,
    ``,
    `    Navigator application to consume video on interactive TVs (Samsung,`,
    `    LG, Vizio, GoogleTV), game consoles (Xbox), and streaming devices`,
    `    (Chromecast, FireTV). Features include Live TV, OnDemand Movies,`,
    `    Cloud DVR, program recording, and in-app purchases.`,
    ``,
    `    Supports Dynamic Ad Insertion, trick modes (play/pause, seek,`,
    `    restart), parental controls, and transactional OnDemand.`,
    ``,
    `    Accessibility via Speech Synthesis API, NVDA, JAWS (Windows),`,
    `    and VoiceOver (Mac).`,
    ``,
    `    ${DIM}Role: Architecting, designing, development with accessibility`,
    `    support across platforms. Code reviews, mentoring, CI/CD, and`,
    `    maintaining design documentation.${R}`,
  ],

  contact: () => [
    `${BOLD}${CYAN}Contact${R}`,
    ``,
    `  ${YELLOW}Location${R}   Colorado, US`,
    `  ${YELLOW}Email${R}      mainendra@gmail.com`,
    `  ${YELLOW}Website${R}    https://mainendra.github.io`,
    `  ${YELLOW}GitHub${R}     https://github.com/mainendra`,
    `  ${YELLOW}LinkedIn${R}   https://linkedin.com/in/mainendra`,
    `  ${YELLOW}Dev.to${R}     https://dev.to/mainendra`,
    `  ${YELLOW}X${R}          https://twitter.com/mainendrap`,
  ],

  resume: () => {
    window.open('/Resume.pdf', '_blank');
    return [`${GREEN}Opening resume...${R}`];
  },
};

const term = new Terminal({
  fontFamily: 'JetBrainsMonoNerdFont, monospace',
  fontSize: 14,
  theme: themes[themeNames[themeIdx]].xterm,
  cursorBlink: true,
  allowProposedApi: true,
});

const fitAddon = new FitAddon();
term.loadAddon(fitAddon);
term.open(document.getElementById('terminal'));
fitAddon.fit();

window.addEventListener('resize', () => fitAddon.fit());

document.getElementById('theme-btn').addEventListener('click', () => {
  themeIdx = (themeIdx + 1) % themeNames.length;
  localStorage.setItem('themeIdx', themeIdx);
  const t = themes[themeNames[themeIdx]];
  applyTheme(t);
  term.options.theme = t.xterm;
});

term.write(PROMPT + 'help');
term.writeln('');
exec('help');
term.write(PROMPT + 'about');
term.writeln('');
exec('about');
term.write(PROMPT);
term.focus();

let input = '';
let cursorPos = 0;
const history = [];
let historyIdx = -1;

function clearLine() {
  term.write(`\x1b[2K\r${PROMPT}`);
}

function refreshLine() {
  clearLine();
  term.write(input);
  // move cursor to correct position
  const diff = input.length - cursorPos;
  if (diff > 0) term.write(`\x1b[${diff}D`);
}

function exec(cmd) {
  const trimmed = cmd.trim().toLowerCase();
  if (!trimmed) return;
  if (trimmed === 'clear') {
    term.clear();
    return;
  }
  const fn = commands[trimmed];
  if (fn) {
    const lines = fn();
    for (const line of lines) term.writeln(line);
  } else {
    term.writeln(`${DIM}Command not found: ${trimmed}. Type ${GREEN}help${R}${DIM} for available commands.${R}`);
  }
}

term.onKey(({ key, domEvent }) => {
  const ev = domEvent;
  const code = ev.keyCode;

  if (code === 13) { // Enter
    term.writeln('');
    if (input.trim()) {
      history.unshift(input);
    }
    exec(input);
    input = '';
    cursorPos = 0;
    historyIdx = -1;
    term.write(PROMPT);
  } else if (code === 8) { // Backspace
    if (cursorPos > 0) {
      input = input.slice(0, cursorPos - 1) + input.slice(cursorPos);
      cursorPos--;
      refreshLine();
    }
  } else if (code === 37) { // Left
    if (cursorPos > 0) {
      cursorPos--;
      term.write(key);
    }
  } else if (code === 39) { // Right
    if (cursorPos < input.length) {
      cursorPos++;
      term.write(key);
    }
  } else if (code === 38) { // Up - history
    if (historyIdx < history.length - 1) {
      historyIdx++;
      input = history[historyIdx];
      cursorPos = input.length;
      refreshLine();
    }
  } else if (code === 40) { // Down - history
    if (historyIdx > 0) {
      historyIdx--;
      input = history[historyIdx];
      cursorPos = input.length;
      refreshLine();
    } else if (historyIdx === 0) {
      historyIdx = -1;
      input = '';
      cursorPos = 0;
      refreshLine();
    }
  } else if (code === 9) { // Tab - autocomplete
    ev.preventDefault();
    const partial = input.slice(0, cursorPos).toLowerCase();
    const matches = Object.keys(commands).concat(['clear']).filter(c => c.startsWith(partial));
    if (matches.length === 1) {
      input = matches[0];
      cursorPos = input.length;
      refreshLine();
    }
  } else if (ev.key === 'l' && ev.ctrlKey) { // Ctrl+L
    term.clear();
    term.write(PROMPT);
    input = '';
    cursorPos = 0;
  } else if (!ev.ctrlKey && !ev.altKey && !ev.metaKey && key.length === 1) {
    input = input.slice(0, cursorPos) + key + input.slice(cursorPos);
    cursorPos++;
    refreshLine();
  }
});
