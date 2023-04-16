import React from 'react'; 
import ProjectCards from '../components/Project'
import projects from '../projects.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects () {  

  return (
      <section className="container">
        <div className="project">
          <h2 className="top-title">React Portfolio</h2>
          <hr></hr>
        </div>

        <Wrapper id="card-data">
          {projects.map((project) => (
            <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
          ))}
        </Wrapper>
      </section>
  
  );
}

export default Projects;