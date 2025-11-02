import './homepage.css';
import fs from 'fs';
import { type } from 'os';
import { useEffect , useState } from 'react';

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

                    Beyond coding, I take prclassNamee in my critical thinking, logical reasoning, and communication skills, which help me collaborate effectively and deliver thoughtful solutions. I enjoy working on projects that challenge me to learn new technologies and refine my craft every day.<br/>

                    When I’m not building something new, you’ll probably find me playing chess, football, or volleyball, or exploring creative classNameeas that blend design and technology.</p>
            </div>
        </div>
    );
}

export function Projects(){
    const [projects , setprojects] = useState({});
    try{
        let data = fs.readSync('/data/projects.json');
        data = JSON.parse(data);
    }catch(e){
        console.log(e);
    }
    return (
        <div className='projects'>
            {Object.entries(projects).forEach(([key , value]) =>{
                <div className='card'>
                    <div className='image-container'>
                        <img/>
                    </div>
                    <div className='text-container'>
                        <h1>{key}</h1>
                        <p>{value}</p>
                    </div>
                </div>
            })}
        </div>
    );
}
