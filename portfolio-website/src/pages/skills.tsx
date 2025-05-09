import React from 'react';
import NavBar from '../components/navBar/navBar'
import '../pages/css-files/skills.css'

function Skills() {
  return (
    <div className='skills-main-container'>
      <NavBar />
      <h1>Technical skills!</h1>
      <p>Thanks to my coursework I have learned many new technical skills that I will
        put into two categories, proficient, and familiar. Proficient in my eyes means that I have strong
        knowledge in that area, while familiar to me means that I understand what the technology is used for, but would need further learning or help to apply it effectively.
      </p>
      
      <div id='info-container'>
        <div id='skills-list'>
            <p>Proficient:</p>
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Figma (With certificate)</li>
                <li>Oracle SQL</li>
            </ul>

            <p>Familiar:</p>
            <ul>
                <li>React</li>
                <li>Java Spring Boot</li>
                <li>Mongo DB noSQL</li>
            </ul>
        </div>
        <div id='courses-list'>
            <p>Relevent courses taken:</p>
            <ul>
                <li>Data Structures</li>
                <li>Algorithms</li>
                <li>Software Development</li>
                <li>Database Management Systems</li>
                <li>Web Development</li>
                <li>Discrete Math</li>
                <li>Theory of Computation</li>
                <li>Machine Learning</li>
            </ul>
        </div>
        </div>
    </div>
  );
}

export default Skills;