import React from 'react'
import './Works.css'
import { Project } from '../project/Project'
import Projects   from '../../assets/data/projects.js'

export const Works = () => {
  const projects = Projects.map((project) => <Project key={project.id} project={project} />)
  return (
    <div className="works" id='works'>
        <div className="works__content">
        <div
         style={
          { height:'4px', width:'100px',  backgroundColor:'#3d3a3a' ,marginLeft:'100px'} } >
         </div>
            <h1>SELECTED</h1>
            <h1>WORKS</h1>
            <p>
            I design and develop services for customers of all sizes, <br />
                specializing in creating stylish,
            </p>
            </div>
       <div className="projects"> 
        {projects}
     
       </div>
       

    </div>
  )
}
