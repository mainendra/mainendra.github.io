import React from "react";
import { motion } from "motion/react";
import { TextScramble } from "./components/text-scramble";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function TechnicalSkills() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col flex-auto lg:mx-10">
            <motion.h2 className="mb-3 text-3xl font-bold"><TextScramble>Technical Skills</TextScramble></motion.h2>
            <hr/>
            <motion.h3 variants={titleVariants} className="mt-10 text-2xl font-bold">Languages</motion.h3>
            <motion.span variants={itemVariants}>JavaScript, TypeScript, HTML5, CSS3, Python*, Ruby*, Java*</motion.span>
            <motion.h3 variants={titleVariants} className="mt-10 text-2xl font-bold">Frameworks</motion.h3>
            <motion.span variants={itemVariants}>ReactJS, AngularJS, BackboneJS, SolidJS*, Svelte*, WPE-Lightning*</motion.span>
            <motion.h3 variants={titleVariants} className="mt-10 text-2xl font-bold">Tools</motion.h3>
            <motion.ul variants={itemVariants} className="list-disc list-inside">
                <li><span className="font-bold">Version Control: </span>Git, GitHub, Gitlab</li>
                <li><span className="font-bold">Task & Project Management: </span>Chalk Pages, Jira</li>
                <li><span className="font-bold">CI/CD: </span>GitlabCI, GitHub Actions</li>
                <li><span className="font-bold">IDE/Editor: </span>Vim, Visual Studio Code</li>
                <li><span className="font-bold">Web Debugger: </span>Chrome and Firefox Developer Tools</li>
                <li><span className="font-bold">Analytics: </span>Kibana, Tableau</li>
                <li><span className="font-bold">A11y: </span>NVDA, Jaws, Speech Synthesis</li>
            </motion.ul>
            <motion.h3 variants={titleVariants} className="mt-10 text-2xl font-bold">Paradigms</motion.h3>
            <motion.ul variants={itemVariants} className="list-disc list-inside">
                <li>Accessibility</li>
                <li>Agile Software Development</li>
                <li>CI/CD</li>
                <li>Automated Testing</li>
                <li>RESTful API</li>
                <li>Asynchronous Programming</li>
                <li>Event-driven Programming</li>
            </motion.ul>
            <motion.div variants={titleVariants} className="mt-12"><span className="font-bold">*</span> familiar with</motion.div>
        </motion.div>
    );
}

