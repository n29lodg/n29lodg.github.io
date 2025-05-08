import React from 'react';
import NavBar from '../components/navBar/navBar';

import  './css-files/projects.css';

function Projects() {
  return (
    <div className='projects-page-container'>
        <NavBar/>
      <h1>Projects</h1>
      <p>Here are some of my projects.</p>
      <ul>
        <li>Koch Curves (in school)</li>
        <li>Software engineering in school project (secret)</li>
        <li>Media vault (personal project, work in progress)</li>
      </ul>
    </div>
  );
}

export default Projects;