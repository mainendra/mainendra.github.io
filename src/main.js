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
    `  ${CYAN}theme${R}       Switch theme`,
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

  contact: () => {
    const maxVal = term.cols - PAD - 2;
    const link = (url) => `\x1b]8;;${url}\x07${url.length > maxVal ? url.slice(0, maxVal - 1) + '…' : url}\x1b]8;;\x07`;
    return [
      `${BOLD}${CYAN}${content.contact.title}${R}`,
      ``,
      ...content.contact.items.map(i => `  ${YELLOW}${pad(i.label)}${R}${i.value.startsWith('http') ? link(i.value) : i.value}`),
    ];
  },

  resume: () => {
    window.open('/Resume.pdf', '_blank');
    return [`${GREEN}Opening resume...${R}`];
  },

  theme: (arg) => {
    if (arg) {
      const idx = themeNames.findIndex(n => n.toLowerCase().replace(/\s+/g, '') === arg.toLowerCase().replace(/\s+/g, ''));
      if (idx === -1) return [`${DIM}Unknown theme. Available: ${themeNames.join(', ')}${R}`];
      themeIdx = idx;
      switchTheme();
      return [`${GREEN}Theme: ${themeNames[themeIdx]}${R}`];
    }
    pickerIdx = themeIdx;
    pickerActive = true;
    renderPicker();
    return [];
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

// Subtle "use keyboard" toast on mouse interaction
const toast = document.createElement('div');
toast.id = 'kb-toast';
toast.textContent = '⌨ Try using keyboard commands instead!';
Object.assign(toast.style, {
  position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
  padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.8rem',
  background: 'var(--bg-hint)', color: 'var(--fg-dim)', border: '1px solid var(--border)',
  opacity: '0', transition: 'opacity 0.3s', pointerEvents: 'none', zIndex: '10',
});
document.body.appendChild(toast);
let toastTimer, moveStart;

function showKbToast() {
  toast.style.opacity = '1';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.style.opacity = '0', 2000);
}

const termEl = document.getElementById('terminal');

if (!isMobile) {
  moveStart = { x: 0, y: 0 };
  document.addEventListener('mousemove', (e) => {
    const d = Math.hypot(e.clientX - moveStart.x, e.clientY - moveStart.y);
    if (d > 100) { showKbToast(); moveStart = { x: e.clientX, y: e.clientY }; }
  });
  document.addEventListener('click', () => { showKbToast(); term.focus(); });
}

termEl.addEventListener('click', () => {
  if (isMobile) mobileInput.focus();
  term.focus();
});

window.addEventListener('resize', () => fitAddon.fit());

function switchTheme() {
  localStorage.setItem('themeIdx', themeIdx);
  const t = themes[themeNames[themeIdx]];
  applyTheme(t);
  term.options.theme = t.xterm;
}

document.getElementById('theme-btn').addEventListener('click', () => {
  if (pickerActive) return;
  input = 'theme';
  cursorPos = input.length;
  refreshLine();
  handleKey(null, 13, null);
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

const allCmds = Object.keys(commands).concat(['clear']);

function getSuggestion() {
  if (!input) return '';
  const match = allCmds.find(c => c.startsWith(input.toLowerCase()) && c !== input.toLowerCase());
  return match ? match.slice(input.length) : '';
}

function refreshLine() {
  const hint = cursorPos === input.length ? getSuggestion() : '';
  const diff = input.length + hint.length - cursorPos;
  term.write(`\x1b[?25l\x1b[2K\r${PROMPT}${input}${hint ? `${DIM}${hint}${R}` : ''}${diff > 0 ? `\x1b[${diff}D` : ''}\x1b[?25h`);
}

function exec(cmd) {
  const parts = cmd.trim().toLowerCase().split(/\s+/);
  const name = parts[0];
  const arg = parts.slice(1).join(' ');
  if (!name) return;
  if (name === 'clear') {
    term.clear();
    return;
  }
  const fn = commands[name];
  if (fn) {
    const lines = fn(arg);
    for (const line of lines) {
      const cols = term.cols;
      const strip = s => s.replace(/\x1b\[[0-9;]*m/g, '');
      const visLine = strip(line);
      if (visLine.length <= cols) { term.writeln(line); continue; }
      // Detect leading visible indent (e.g. "  ● " or "  Label         value")
      const prefixMatch = visLine.match(/^(\s*(?:●\s|\S+(?:\s\S+)*\s{2,}))/);      const indent = prefixMatch ? ' '.repeat(prefixMatch[1].length) : '';
      // Find raw prefix in original line (with ANSI codes) matching visible prefix length
      let rawPrefix = '';
      if (prefixMatch) {
        const pLen = prefixMatch[1].length;
        let vis = 0, inEsc = false;
        for (let j = 0; j < line.length && vis < pLen; j++) {
          rawPrefix += line[j];
          if (line[j] === '\x1b') inEsc = true;
          else if (inEsc && /[a-zA-Z]/.test(line[j])) inEsc = false;
          else if (!inEsc) vis++;
        }
      }
      const rest = rawPrefix ? line.slice(rawPrefix.length) : line;
      const words = rest.split(' ').filter(w => w !== '');
      let current = rawPrefix + words[0];
      let visLen = strip(current).length;
      for (let i = 1; i < words.length; i++) {
        const wLen = strip(words[i]).length;
        if (visLen + 1 + wLen > cols && visLen > 0) {
          term.writeln(current);
          current = indent + words[i];
          visLen = indent.length + wLen;
        } else {
          current += ' ' + words[i];
          visLen += 1 + wLen;
        }
      }
      if (current) term.writeln(current);
    }
  } else {
    term.writeln(`${DIM}Command not found: ${name}. Type ${GREEN}help${R}${DIM} for available commands.${R}`);
  }
}

let pickerActive = false;
let pickerIdx = 0;

function renderPicker() {
  // Clear picker lines and redraw
  term.write(`\x1b[?25l`); // hide cursor
  for (let i = 0; i < themeNames.length; i++) {
    const marker = i === pickerIdx ? `${GREEN} ❯ ` : `   `;
    const label = i === pickerIdx ? `${BOLD}${themeNames[i]}${R}` : `${DIM}${themeNames[i]}${R}`;
    term.writeln(`${marker}${label}`);
  }
  term.writeln(`${DIM}  ↑↓ navigate · Enter select · Esc cancel${R}`);
}

function clearPicker() {
  // Move up and clear all picker lines
  const lines = themeNames.length + 1;
  for (let i = 0; i < lines; i++) term.write(`\x1b[A\x1b[2K`);
  term.write(`\r\x1b[?25h`); // show cursor
}

function handleKey(key, code, ev) {
  if (pickerActive) {
    if (code === 38) { // Up
      clearPicker();
      pickerIdx = (pickerIdx - 1 + themeNames.length) % themeNames.length;
      themeIdx = pickerIdx;
      switchTheme();
      renderPicker();
    } else if (code === 40) { // Down
      clearPicker();
      pickerIdx = (pickerIdx + 1) % themeNames.length;
      themeIdx = pickerIdx;
      switchTheme();
      renderPicker();
    } else if (code === 13) { // Enter
      clearPicker();
      pickerActive = false;
      term.writeln(`${GREEN}Theme: ${themeNames[themeIdx]}${R}`);
      term.write(PROMPT);
    } else if (code === 27 || (ev && ev.key === 'Escape')) { // Esc
      clearPicker();
      pickerActive = false;
      term.write(PROMPT);
    }
    return;
  }
  if (code === 13) { // Enter
    term.writeln('');
    if (input.trim()) history.unshift(input);
    exec(input);
    input = '';
    cursorPos = 0;
    historyIdx = -1;
    if (!pickerActive) term.write(PROMPT);
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
    else { const s = getSuggestion(); if (s) { input += s; cursorPos = input.length; refreshLine(); } }
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
    const s = getSuggestion(); if (s) { input += s; cursorPos = input.length; refreshLine(); }
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

// Swipe gestures for mobile
if (isMobile) {
  const termEl = document.getElementById('terminal');
  let startX, startY;
  termEl.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  termEl.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    if (Math.max(absDx, absDy) < 30) return; // too short
    if (absDx > absDy) {
      // Horizontal swipe
      if (absDx > 100) handleKey(null, 9, null); // long swipe = tab
      else if (dx > 0) handleKey(null, 39, null); // right = cursor right
      else handleKey(null, 37, null); // left = cursor left
    } else {
      // Vertical swipe
      if (dy < 0) handleKey(null, 38, null); // up = history prev
      else handleKey(null, 40, null); // down = history next
    }
  }, { passive: true });
}
