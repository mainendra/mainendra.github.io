import React from "react";

export default function About() {
    return (
        <div className="flex-column align-self-center mw-100 w-75">
            <h2 className="font-weight-bold mt-3">Bio</h2>
            <p>12+ years of experience in software development using JavaScript in Video development. Design and develop various navigator applications (to consume video) on set- top-box, mobile, Chromecast, Samsung TV and desktop platforms. 4+ years of experience in A11y on navigator web application for desktops. 2+ years of experience in UI test automation. While working some same domain for long duration, I’ve acquired distinct debugging skill to debug various applications.</p>
            <h3 className="font-weight-bold mt-5">Work Experience</h3>
            <ul className="d-flex flex-column">
                <li>Cognizant (USA) - Technical Lead / Dec-2015 till now</li>
                <li>itaas – a Cognizant Company (India) - Technical Lead / Dec-2007 to Dec-2015</li>
                <li>Spartan Labs Pvt. Ltd. (India) - Associate Software Engineer / Apr-2007 to Dec-2007</li>
            </ul>
            <h3 className="font-weight-bold mt-5">Education</h3>
            <ul className="d-flex flex-column mb-5">
                <li>MS program in Advanced Information Technology / Advanced software technologies – International Institute of information technology, Pune, Maharashtra, India</li>
                <li>Bachelor of Engineering / Information Technology – Dharmsinh Desai Institute of Technology, Nadiad, Gujarat, India</li>
            </ul>
        </div>
    );
}
