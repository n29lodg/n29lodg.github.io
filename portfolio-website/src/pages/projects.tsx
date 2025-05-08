import React from 'react';
import NavBar from '../components/navBar/navBar';

import  './css-files/projects.css';

function Projects() {
  return (
    <div className='projects-page-container'>
        <NavBar/>
      <h1>Projects</h1>
      <p>Here are some of my projects that I've worked on, both in and out of school</p>
      <p>As I further my technical growth and build newer, stronger projects, I will add them here</p>
      <ul>
        <li><a href='https://github.com/csis225f24/ps4-n29lodg'>Koch Curves (in school project)</a></li>
        <ul>
            <li>Uses Java Swing for graphics</li>
            <li>Draw a line, use button to advance to the next stage in the koch curve fractal <a href='https://www.geeksforgeeks.org/koch-curve-koch-snowflake/'>(Click here to learn more about the koch snowflake)</a></li>
        </ul>
        <li>Software engineering in school project (secretive project)</li>
          <ul>
            <li>Under an NDA for this in-school project, working for an outside client</li>
            <li>Learned the agile scrum process, worked closely with my team as our scrum master</li>
          </ul>
        <li>Media vault (personal project, work in progress)</li>
          <ul>
            <li>Personal full stack project I am in the early stages of working on, plan is to be complete in summer 25'</li>
            <li>This project will allow users to create an account, and keep track of their favorite media by having both a wishlist, and allow users to keep track of what they've already done</li>
            <li>Media in question: Video games, music albums, tv shows/movies, and more!</li>
          </ul>
      </ul>
    </div>
  );
}

export default Projects;