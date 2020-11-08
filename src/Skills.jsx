import React from "react";

export default function TechnicalSkills() {
    return (
        <div className="position-relative flex-column align-self-center mw-100 w-75">
            <h2 className="font-weight-bold">Technical Skills</h2>
            <hr/>
            <h3 className="font-weight-bold mt-5">Languages</h3>
            <span>JavaScript, TypeScript, HTML5, CSS3, Python*, Ruby*, Java*</span>
            <h3 className="font-weight-bold mt-5">Frameworks</h3>
            <span>ReactJS, AngularJS, BackboneJS, Vue3*, WPE-Lightning*</span>
            <h3 className="font-weight-bold mt-5">Tools</h3>
            <ul>
                <li><span className="font-weight-bold">Version Control: </span>Git, GitHub, Gitlab</li>
                <li><span className="font-weight-bold">Task & Project Management: </span>Chalk Pages, Jira</li>
                <li><span className="font-weight-bold">CI/CD: </span>GitlabCI, GitHub Actions</li>
                <li><span className="font-weight-bold">IDE/Editor: </span>Vim, Visual Studio Code</li>
                <li><span className="font-weight-bold">Web Debugger: </span>Chrome and Firefox Developer Tools</li>
                <li><span className="font-weight-bold">Analytics: </span>Kibana, Tableau</li>
                <li><span className="font-weight-bold">A11y: </span>NVDA, Jaws, Speech Synthesis</li>
            </ul>
            <h3 className="font-weight-bold mt-5">Paradigms</h3>
            <ul>
                <li>Accessiblity</li>
                <li>Agile Software Development</li>
                <li>CI/CD</li>
                <li>Automated Testing</li>
                <li>RESTful API</li>
                <li>Asynchronous Programming</li>
                <li>Event-driven Programming</li>
            </ul>
            <div className="position-absolute top-100 left-0 mt-4"><span className="font-weight-bold">*</span> familiar with</div>
        </div>
    );
}

