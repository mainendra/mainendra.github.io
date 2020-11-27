import React from "react";
import { Link } from "react-router-dom";
import resume from "../public/Resume2020.pdf";

export default function Menu() {
    return (
        <ul className="relative flex flex-wrap justify-end w-full mt-10 mb-10 mr-auto space-x-10">
            <li className="absolute left-0 mt-3">
                <Link to="/">M</Link>
            </li>
            <li className="mt-3">
                <Link to="/about">About</Link>
            </li>
            <li className="mt-3">
                <Link to="/skills">Technical Skills</Link>
            </li>
            <li className="mt-3">
                <a href={resume} download="mainendra">
                    <svg viewBox="0 0 16 16" className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                </a>
            </li>
        </ul>
    );
}

