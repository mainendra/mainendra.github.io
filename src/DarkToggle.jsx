import React, { useState, useEffect } from "react";

function Sun({ onClick }) {
    return (
        <div tabIndex="0" onClick={onClick} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </div>
    );
}

function Moon({ onClick }) {
    return (
        <div tabIndex="0" onClick={onClick} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </div>
    );
}

export default function DarkToggle() {
    const [dark, setDark] = useState(false);

    const toggleDark = (dark) => {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        setDark(dark);
        updateThemeClass(dark);
    };

    const updateThemeClass = (dark) => {
        if (dark) {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }
    };

    useEffect(() => {
        const dark = localStorage.getItem('theme') === 'dark';
        setDark(dark);
        updateThemeClass(dark);
    }, [setDark]);

    return (
        <div>
            {
                dark ? <Sun onClick={() => toggleDark(!dark)}/> : <Moon onClick={() => toggleDark(!dark)}/>
            }
        </div>
    );
}
