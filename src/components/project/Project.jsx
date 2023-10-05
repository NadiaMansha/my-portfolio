import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
export const Project = ({
    project
}) => {
  return (
    <div className="project">
        <div className='project-image'>
            <img src={project.images[0]} alt="" />
        </div>
        <div className="project-info">
            <h1>{project.name}</h1>
            <p>
         {project.description}
            </p>
         <button >
          <Link to={`/project/${project.id}`}>View Details
          </Link>
         </button>
        
        
      
         </div>


    </div>
  )
}
