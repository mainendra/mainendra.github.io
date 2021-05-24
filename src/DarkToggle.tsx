import React, { useState, useEffect, MouseEventHandler, MouseEvent } from "react";

interface OnClickParam {
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

function Sun({ onClick }: OnClickParam) {
    return (
        <a href="" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        </a>
    );
}

function Moon({ onClick }: OnClickParam) {
    return (
        <a href="" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </a>
    );
}

export default function DarkToggle() {
    const [dark, setDark] = useState(false);

    const toggleDark = (e: MouseEvent<HTMLAnchorElement>, dark: boolean) => {
        e.preventDefault();
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        setDark(dark);
        updateThemeClass(dark);
    };

    const updateThemeClass = (dark: boolean) => {
        if (dark) {
            document.querySelector('html')?.classList?.add('dark');
        } else {
            document.querySelector('html')?.classList?.remove('dark');
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
                dark ? <Sun onClick={(e) => toggleDark(e, !dark)}/> : <Moon onClick={(e) => toggleDark(e, !dark)}/>
            }
        </div>
    );
}
