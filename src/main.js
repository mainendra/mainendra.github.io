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

import content from './content.json';

const PAD = 14;
const pad = (s) => s.padEnd(PAD);

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
    `${BOLD}${CYAN}${content.about.title}${R}`,
    ``,
    content.about.text,
  ],

  experience: () => [
    `${BOLD}${CYAN}${content.experience.title}${R}`,
    ``,
    ...content.experience.items.flatMap(i => [
      `  ${GREEN}●${R} ${BOLD}${i.name}${R} - ${i.role}`,
      `    ${DIM}${i.period}${R}`,
    ]),
  ],

  education: () => [
    `${BOLD}${CYAN}${content.education.title}${R}`,
    ``,
    ...content.education.items.flatMap(i => [
      `  ${GREEN}●${R} ${BOLD}${i.degree}${R}`,
      `    ${i.school}`,
    ]),
  ],

  skills: () => [
    `${BOLD}${CYAN}${content.skills.title}${R}`,
    ``,
    ...content.skills.categories.map(c => `  ${YELLOW}${pad(c.label)}${R}${c.value}`),
    ``,
    `  ${DIM}${content.skills.footnote}${R}`,
  ],

  highlights: () => [
    `${BOLD}${CYAN}${content.highlights.title}${R}`,
    ``,
    ...content.highlights.items.map(i => `  ${GREEN}●${R} ${BOLD}${i.label}:${R} ${i.text}`),
  ],

  projects: () => [
    `${BOLD}${CYAN}${content.projects.title}${R}`,
    ``,
    ...content.projects.items.flatMap(p => [
      `  ${GREEN}●${R} ${BOLD}${p.name}${R} - ${p.subtitle}`,
      ``,
      ...p.description.flatMap(d => [d, ``]),
      `${DIM}Role: ${p.role}${R}`,
    ]),
  ],

  contact: () => [
    `${BOLD}${CYAN}${content.contact.title}${R}`,
    ``,
    ...content.contact.items.map(i => `  ${YELLOW}${pad(i.label)}${R}${i.value}`),
  ],

  resume: () => {
    window.open('/Resume.pdf', '_blank');
    return [`${GREEN}Opening resume...${R}`];
  },
};

const isMobile = window.innerWidth <= 600;

const term = new Terminal({
  fontFamily: 'JetBrainsMonoNerdFont, monospace',
  fontSize: isMobile ? 12 : 14,
  theme: themes[themeNames[themeIdx]].xterm,
  cursorBlink: true,
  allowProposedApi: true,
});

const fitAddon = new FitAddon();
term.loadAddon(fitAddon);
term.open(document.getElementById('terminal'));
fitAddon.fit();

// Hidden input to trigger mobile keyboard
const mobileInput = document.createElement('input');
mobileInput.setAttribute('autocapitalize', 'none');
mobileInput.setAttribute('autocomplete', 'off');
mobileInput.setAttribute('autocorrect', 'off');
mobileInput.setAttribute('spellcheck', 'false');
Object.assign(mobileInput.style, {
  position: 'absolute', opacity: '0', height: '0', width: '0', left: '-9999px',
});
document.body.appendChild(mobileInput);

document.getElementById('terminal').addEventListener('click', () => {
  if (isMobile) mobileInput.focus();
  term.focus();
});

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
  const diff = input.length - cursorPos;
  term.write(`\x1b[?25l\x1b[2K\r${PROMPT}${input}${diff > 0 ? `\x1b[${diff}D` : ''}\x1b[?25h`);
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
    for (const line of lines) {
      // Word-wrap plain text lines to terminal width
      const cols = term.cols;
      // Strip ANSI to measure visible length
      const strip = s => s.replace(/\x1b\[[0-9;]*m/g, '');
      if (strip(line).length > cols && !line.startsWith('  ')) {
        // Split into words preserving ANSI codes
        const words = line.split(' ');
        let current = '';
        let visLen = 0;
        for (const word of words) {
          const wLen = strip(word).length;
          if (visLen + (visLen > 0 ? 1 : 0) + wLen > cols && visLen > 0) {
            term.writeln(current);
            current = word;
            visLen = wLen;
          } else {
            current += (visLen > 0 ? ' ' : '') + word;
            visLen += (visLen > 0 ? 1 : 0) + wLen;
          }
        }
        if (current) term.writeln(current);
      } else {
        term.writeln(line);
      }
    }
  } else {
    term.writeln(`${DIM}Command not found: ${trimmed}. Type ${GREEN}help${R}${DIM} for available commands.${R}`);
  }
}

function handleKey(key, code, ev) {
  if (code === 13) { // Enter
    term.writeln('');
    if (input.trim()) history.unshift(input);
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
    if (cursorPos > 0) { cursorPos--; term.write('\x1b[D'); }
  } else if (code === 39) { // Right
    if (cursorPos < input.length) { cursorPos++; term.write('\x1b[C'); }
  } else if (code === 38) { // Up
    if (historyIdx < history.length - 1) {
      historyIdx++;
      input = history[historyIdx];
      cursorPos = input.length;
      refreshLine();
    }
  } else if (code === 40) { // Down
    if (historyIdx > 0) {
      historyIdx--;
      input = history[historyIdx];
      cursorPos = input.length;
      refreshLine();
    } else if (historyIdx === 0) {
      historyIdx = -1; input = ''; cursorPos = 0; refreshLine();
    }
  } else if (code === 9) { // Tab
    if (ev) ev.preventDefault();
    const partial = input.slice(0, cursorPos).toLowerCase();
    const matches = Object.keys(commands).concat(['clear']).filter(c => c.startsWith(partial));
    if (matches.length === 1) { input = matches[0]; cursorPos = input.length; refreshLine(); }
  } else if (ev && ev.key === 'l' && ev.ctrlKey) {
    term.clear(); term.write(PROMPT); input = ''; cursorPos = 0;
  } else if (key && key.length === 1 && (!ev || (!ev.ctrlKey && !ev.altKey && !ev.metaKey))) {
    input = input.slice(0, cursorPos) + key + input.slice(cursorPos);
    cursorPos++;
    refreshLine();
  }
}

term.onKey(({ key, domEvent }) => handleKey(key, domEvent.keyCode, domEvent));

// Mobile keyboard support
mobileInput.addEventListener('input', (e) => {
  if (e.data) for (const ch of e.data) handleKey(ch, 0, null);
  mobileInput.value = '';
});
mobileInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { handleKey(null, 13, e); mobileInput.value = ''; }
  else if (e.key === 'Backspace') handleKey(null, 8, e);
});
