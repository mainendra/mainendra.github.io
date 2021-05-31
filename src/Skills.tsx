import React from "react";
import DelayShow from "./DelayShow";

export default function TechnicalSkills() {
    return (
        <DelayShow>
            <div className="flex flex-col flex-auto lg:mx-10">
                <h2 className="mb-3 text-3xl font-bold">Technical Skills</h2>
                <hr/>
                <h3 className="mt-10 text-2xl font-bold">Languages</h3>
                <span>JavaScript, TypeScript, HTML5, CSS3, Python*, Ruby*, Java*</span>
                <h3 className="mt-10 text-2xl font-bold">Frameworks</h3>
                <span>ReactJS, AngularJS, BackboneJS, Vue3*, WPE-Lightning*</span>
                <h3 className="mt-10 text-2xl font-bold">Tools</h3>
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Version Control: </span>Git, GitHub, Gitlab</li>
                    <li><span className="font-bold">Task & Project Management: </span>Chalk Pages, Jira</li>
                    <li><span className="font-bold">CI/CD: </span>GitlabCI, GitHub Actions</li>
                    <li><span className="font-bold">IDE/Editor: </span>Vim, Visual Studio Code</li>
                    <li><span className="font-bold">Web Debugger: </span>Chrome and Firefox Developer Tools</li>
                    <li><span className="font-bold">Analytics: </span>Kibana, Tableau</li>
                    <li><span className="font-bold">A11y: </span>NVDA, Jaws, Speech Synthesis</li>
                </ul>
                <h3 className="mt-10 text-2xl font-bold">Paradigms</h3>
                <ul className="list-disc list-inside">
                    <li>Accessiblity</li>
                    <li>Agile Software Development</li>
                    <li>CI/CD</li>
                    <li>Automated Testing</li>
                    <li>RESTful API</li>
                    <li>Asynchronous Programming</li>
                    <li>Event-driven Programming</li>
                </ul>
                <div className="mt-12"><span className="font-bold">*</span> familiar with</div>
            </div>
        </DelayShow>
    );
}

