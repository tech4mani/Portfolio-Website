import React, { useEffect } from 'react'
import './Project.css'
import infinity from '../../assets/infity.png'
import Project_data from '../../assets/Project_data'

const Project = () => {

    useEffect(() => {
        const elements = document.querySelectorAll('.Projects-format');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
    }, []);

    return (
        <div id='Project' className='Projects'>
            <div className="Project-title">
                <h1>My Project</h1>
                <img src={infinity} alt="..." />
            </div>
            <div className="Project-container">
                {Project_data.map((Project, index) => {
                    return (
                        <div key={index} className="Projects-format">
                            <h3>{Project.P_no}</h3>
                            <h2>{Project.P_name}</h2>
                            <p>{Project.P_desc}</p>
                            {Project.P_link && Project.P_link !== '#' && (
                                <a href={Project.P_link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Project
