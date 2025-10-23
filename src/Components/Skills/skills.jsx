import React from 'react';
import './skills.css';
import python from '../../assets/python.png';
import javascript from '../../assets/javascript.png';
import html from '../../assets/html5.png';
import Css from '../../assets/css3.png';
import react from '../../assets/react.png';
import flask from '../../assets/flask.png';
import sql from '../../assets/my-sql.png';
import mongodb from '../../assets/mongodb.png';
import github from '../../assets/github.png';
import vscode from '../../assets/visual-studio.png';

const Skills = () => {
    return (
        <div id='Skills' className='Skills-section'>
            <h3>Skills</h3>
            <div className="cards-container">
            <div className="skill-category">
                <p><b>Languages:</b> Python, JavaScript</p>
                <div className="skill-icons">
                    <img src={python} alt="Python" />
                    <img src={javascript} alt="JavaScript" />
                </div>
            </div>

            <div className="skill-category">
                <p><b>Frontend:</b> HTML, CSS, React.js</p>
                <div className="skill-icons">
                    <img src={html} alt="HTML" />
                    <img src={Css} alt="CSS" />
                    <img src={react} alt="React" />
                </div>
            </div>

            <div className="skill-category">
                <p><b>Backend:</b> Flask</p>
                <div className="skill-icons">
                    <img src={flask} alt="Flask" />
                </div>
            </div>

            <div className="skill-category">
                <p><b>Database:</b> MySQL, MongoDB</p>
                <div className="skill-icons">
                    <img src={sql} alt="SQL" />
                    <img src={mongodb} alt="MongoDB" />
                </div>
            </div>

            <div className="skill-category">
                <p><b>Tools:</b> GitHub, Postman, XAMPP, Thunder Client</p>
                <div className="skill-icons">
                    <img src={github} alt="GitHub" />
                </div>
            </div>

            <div className="skill-category">
                <p><b>Platforms:</b> VS Code, Meta Spark (AR Dev)</p>
                <div className="skill-icons">
                    <img src={vscode} alt="VS Code" />
                </div>
            </div>
        </div>
            </div>



    );
};

export default Skills;
