import React from "react";
import { Link } from "react-router-dom";
import resume from "../public/Resume2020.pdf";

const iconStyle = {
    width: 20,
};

export default function Menu() {
    return (
        <ul className="navbar navbar-light mb-3">
            <li className="navbar-item nav-link mr-auto mb-2 mb-lg-0">
                <Link className="text-decoration-none link-dark" to="/">M</Link>
            </li>
            <li className="navbar-item nav-link mb-2 mb-lg-0">
                <Link className="text-decoration-none link-dark" to="/about">About</Link>
            </li>
            <li className="navbar-item nav-link mb-2 mb-lg-0">
                <Link className="text-decoration-none link-dark" to="/skills">Technical Skills</Link>
            </li>
            <li className="navbar-item nav-link mb-2 mb-lg-0">
                <a href={resume} download="mainendra" className="text-decoration-none link-dark">
                    <svg viewBox="0 0 16 16" className="bi bi-download" style={iconStyle} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                </a>
            </li>
        </ul>
    );
}

