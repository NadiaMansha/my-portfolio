import React from 'react'
import './ProjectDetails.css'
import { useParams } from 'react-router-dom'
import projectsArray from '../../assets/data/projects'
const ProjectDetials = () => {
  const params = useParams()
  const id=params.id
  const project= projectsArray.find(project=>project.id==id)

  
  return (
<div className="project_details">
    <h1>{project.name}</h1>
    <div className="project_details_image">
    {
        project.images.length>1?
        project.images.map(image=>
          
            <img 
            className='mobile'
            src={image} alt="" />
         ):
         
            <img  
            className='web'
            src={project.images[0]} alt="" />
          
      }
    </div>
   
    
    
        
    
    <div className="project_details_info">
       <h2>Description</h2>
        <p>
     {project.description}
        </p>
        <h2>Technologies</h2>
      <ul>
          {project.technologies.map(tech=><li>{tech}</li>)}

      </ul>
      <div className="buttons">
        {
          project.github&&
          <button>
            <a href={project.github} target="_blank" rel="noreferrer">Github</a>
          </button>
         
        }
        {
           project.backend &&
           <button>
             <a href={project.backend}>Backend</a>
           </button>
        }
        {
          project.link &&
          <button>
            <a 
            target='_blank' rel='noreferrer'
             href={project.link}>Live</a>
          </button>
        }
       
      </div>
   
     </div>

</div>
  )
}

export default ProjectDetials