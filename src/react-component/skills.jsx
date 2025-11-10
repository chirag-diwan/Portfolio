import './skills.css';

export function Skills() {
    const skills = [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 70 },
        { name: 'FastAPI', level: 75 },
    ];

    return (
        <section className="skills" id="skills">
            <h1>Skills</h1>
            <div className="skills-grid">
                {skills.map((s, idx) => (
                    <div key={idx} className="skill-card">
                        <h2>{s.name}</h2>
                        <div className="skill-bar">
                            <div className="skill-fill" style={{ width: `${s.level}%` }}></div>
                        </div>
                        <span className="skill-level">{s.level}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

