import React from "react";
import DelayShow, {DelayChildShow} from "./DelayShow";

export default function About() {
    return (
        <DelayShow>
            <div className="flex flex-col flex-auto lg:mx-10">
                <DelayChildShow delayClass="delay-200">
                    <h2 className="text-2xl font-bold">Bio</h2>
                    <p className="text-justify">15+ years of experience in software development using JavaScript in Video development. Design and develop various navigator applications (to consume video) on set- top-box, mobile, Chromecast, Samsung TV, Fire TV, Xbox, LG TV*, Android TV* and desktop platforms. 6+ years of experience in A11y on navigator web application for desktops. 2+ years of experience in UI test automation. While working some same domain for long duration, I’ve acquired distinct debugging skill to debug various applications.</p>
                </DelayChildShow>
                <DelayChildShow delayClass="delay-300">
                    <h3 className="mt-10 text-2xl font-bold">Work Experience</h3>
                    <ul className="list-disc list-inside">
                        <li>Cognizant (North America) - Technical Lead / Dec-2015 till now</li>
                        <li>itaas – a Cognizant Company (India) - Technical Lead / Dec-2007 to Dec-2015</li>
                        <li>Spartan Labs Pvt. Ltd. (India) - Associate Software Engineer / Apr-2007 to Dec-2007</li>
                    </ul>
                </DelayChildShow>
                <DelayChildShow delayClass="delay-500">
                    <h3 className="mt-10 text-2xl font-bold">Education</h3>
                    <ul className="list-disc list-inside">
                        <li>MS program in Advanced Information Technology / Advanced software technologies – International Institute of information technology, Pune, Maharashtra, India</li>
                        <li>Bachelor of Engineering / Information Technology – Dharmsinh Desai Institute of Technology, Nadiad, Gujarat, India</li>
                    </ul>
                </DelayChildShow>
            </div>
        </DelayShow>
    );
}
