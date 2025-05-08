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
        <li><a href='https://github.com/csis225f24/ps4-n29lodg'>Koch Curves (in school)</a></li>
        <ul>
            <li>Uses Java Swing for graphics</li>
            <li>Draw a line, use button to advance to the next stage in the koch curve fractal <a href='https://www.geeksforgeeks.org/koch-curve-koch-snowflake/'>(Click here to learn more about the koch snowflake)</a></li>
        </ul>
        <li>Software engineering in school project (secret)</li>
        <li>Media vault (personal project, work in progress)</li>
      </ul>
    </div>
  );
}

export default Projects;