import { motion } from "motion/react";
import React from "react";

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

export default function About() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col flex-auto lg:mx-10">
            <motion.h2 variants={titleVariants} className="text-2xl font-bold">Bio</motion.h2>
            <motion.p variants={itemVariants} className="text-justify">
                Application Developer with 15+ Years of Experience. Extensive expertise in JavaScript and TypeScript within the video domain.
                Designed and developed video navigator applications across multiple platforms, including set-top boxes, mobile devices, Chromecast, Samsung TV, Fire TV, Xbox, LG TV*, Android TV*, and desktop browsers.
                Over 7 years of experience improving accessibility in web-based navigator applications for desktops, ensuring compliance with industry standards and enhancing inclusivity.
                More than 4 years of hands-on experience in UI test automation, improving testing efficiency and product reliability.
                Developed advanced debugging skills through extensive experience troubleshooting and optimizing applications in a complex, multi-platform environment.
                Committed to delivering robust, scalable, and user-centric applications that meet the demands of diverse platforms and audiences.
            </motion.p>
            <motion.h3 variants={titleVariants} className="mt-10 text-2xl font-bold">Work Experience</motion.h3>
            <motion.ul variants={itemVariants} className="list-disc list-inside">
                <li>Cognizant (North America) - Technical Lead / Dec-2015 till now</li>
                <li>itaas – a Cognizant Company (India) - Technical Lead / Dec-2007 to Dec-2015</li>
                <li>Spartan Labs Pvt. Ltd. (India) - Associate Software Engineer / Apr-2007 to Dec-2007</li>
            </motion.ul>
            <motion.h3 variants={titleVariants} className="mt-10 text-2xl font-bold">Education</motion.h3>
            <motion.ul variants={itemVariants} className="list-disc list-inside">
                <li>MS program in Advanced Information Technology / Advanced software technologies – International Institute of information technology, Pune, Maharashtra, India</li>
                <li>Bachelor of Engineering / Information Technology – Dharmsinh Desai Institute of Technology, Nadiad, Gujarat, India</li>
            </motion.ul>
        </motion.div>
    );
}
