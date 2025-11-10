import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './homepage.css';

export function GridCanvas({ squareSize = 60, reductionFactor = 1, gap = 8 }) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const draw = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let y = 0; y < canvas.height; y += squareSize + gap) {
                for (let x = 0; x < canvas.width; x += squareSize + gap) {
                    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.12})`;
                    ctx.fillRect(x, y, squareSize * reductionFactor, squareSize * reductionFactor);
                }
            }
        };

        draw();
        window.addEventListener("resize", draw);
        return () => window.removeEventListener("resize", draw);
    }, [squareSize, reductionFactor, gap]);

    return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }} />;
}

export function AboutMe() {
    return (
        <motion.div className="about" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <img src='/Portfolio/images/Profile.png' />
            <div className="text-container">
                <h1>About</h1>
                <p>Hi, I’m Chirag Diwan — a developer who enjoys solving complex problems through precise and efficient code. Skilled in React, FastAPI, TypeScript, JavaScript, Python, and C++, I build full-stack applications that balance performance with aesthetic clarity. Outside of tech, I enjoy chess, football, volleyball, and exploring intersections between design and logic.</p>
            </div>
        </motion.div>
    );
}

export function Projects() {
    const [data, setData] = useState([]);
    useEffect(() => { fetch('/Portfolio/data/projects.json').then(r => r.json()).then(setData); }, []);

    return (
        <div className="projects">
            <div className="image-text-container">
                <img src='/Portfolio/images/project-icon.png' />
                <h1>Projects</h1>
            </div>

            {data.map((project, i) => (
                <motion.div key={i} className="card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1>{project.Name}</h1>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </motion.div>
            ))}
        </div>
    );
}
