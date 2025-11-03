import { useEffect, useState } from 'react';
import './homepage.css';


export function Background(){
    return (
        <img src='/images/background.png' className='background'>
        </img>
    );
}

export function AboutMe(){
    return (
        <div className='about'>
            <div className='image-container'>
                <img src='/images/Profile.png' className='logo'/>
            </div>
            <div className='text-container'>
                <h1>About</h1>
                <p>Hi, I’m Chirag Diwan — a passionate and curious developer who enjoys solving complex problems through clean and efficient code. I’m skilled in React, FastAPI, TypeScript, JavaScript, Python, and C++, with hands-on experience building full-stack applications that balance performance with elegant UI design.<br/>
                    Beyond coding, I take proud in my critical thinking, logical reasoning, and communication skills, which help me collaborate effectively and deliver thoughtful solutions. I enjoy working on projects that challenge me to learn new technologies and refine my craft every day.<br/>
                    When I’m not building something new, you’ll probably find me playing chess, football, or volleyball, or exploring creative classNameeas that blend design and technology.</p>
            </div>
        </div>
    );
}

export function Projects(){
    const [data , setData] = useState([...Array(2).fill('')]);
    useEffect(()=>{
        async function fetchData(serverFilePath){
            const res = await fetch(serverFilePath);
            const fdata = await res.json();
            setData(fdata);
        }
        fetchData('/data/projects.json');
    },[]);
    return (
        <div className='projects'>
            <div className='image-text-container'>
                <img src='/images/project-icon.png' className='icon'/>
                <h1>Projects</h1>
            </div>
            {data.map((project , i)=>(
                <div key={i} className='card' style={
                    {
                        textAlign: i % 2 == 0 ? 'start' : 'end'
                    }
                }>
                    <div className='text-container'>
                        <h1>{project.Name}</h1>
                        <p>{project.description}</p>
                        <link href={project.link}/>
                    </div>
                </div>
            ))}
        </div>
    );
}
