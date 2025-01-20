import React from "react";
import { motion } from "motion/react";
import me from "/me.png";
import { TextScramble } from "./components/text-scramble";
import { Tilt } from "./components/tilt-card";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center flex-auto">
            <Tilt rotationFactor={8} isRevese>
                <img src={me} className="w-64 h-64 rounded-full" />
            </Tilt>
            <h3 className="mt-10 text-2xl font-bold flex space-x-2">
                <span className="first-letter:text-red-600"><TextScramble>Mainendra</TextScramble></span>
                <span className="first-letter:text-red-600"><TextScramble>Patel</TextScramble></span>
            </h3>
            <h4 className="mt-2 whitespace-nowrap">
                <TextScramble>JavaScript developer / Coding enthusiast</TextScramble>
            </h4>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex items-center justify-center mt-10 space-x-5">
                <motion.a variants={itemVariants} whileHover={{ scale: 1.25 }} href="mailto:mainendra@gmail.com" aria-label="mail">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                        <path fill="currentColor" fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>
                </motion.a>
                <motion.a variants={itemVariants} whileHover={{ scale: 1.25 }} href="https://github.com/mainendra" aria-label="github">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-10 h-10">
                        <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </motion.a>
                <motion.a variants={itemVariants} whileHover={{ scale: 1.25 }} href="https://dev.to/mainendra" aria-label="dev.to">
                    <svg viewBox="0 32 447.99999999999994 448" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                        <path fill="currentColor" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"/>
                    </svg>
                </motion.a>
                <motion.a variants={itemVariants} whileHover={{ scale: 1.25 }} href="https://www.linkedin.com/in/mainendra" aria-label="linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-10 h-10">
                        <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </motion.a>
                <motion.a variants={itemVariants} whileHover={{ scale: 1.25 }} href="https://twitter.com/mainendrap" aria-label="twitter">
                    <svg role="img" width="24" height="24" viewBox="0 0 24 24" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                        <title>X</title>
                        <path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                </motion.a>
            </motion.div>
        </div>
    );
}