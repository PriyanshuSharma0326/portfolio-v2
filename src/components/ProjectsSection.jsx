import React, { useContext } from 'react'
import { StyleContext } from '../context/style-context';
import { Element } from 'react-scroll';
import { projects } from '../constants/ProjectsList';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
    const { title, fixedProjectsTitle } = useContext(StyleContext);

    return (
        <Element name='Projects' id='Projects' className="flex flex-col gap-4 mb-16            
            
            max-[768px]:gap-12 max-[426px]:gap-10"
        >
            <div className='hidden z-30 skills-section-title px-[1.25rem] py-4 w-full font-semibold 
                
                max-[768px]:block max-[426px]:px-4'
            >
                <h1 className={`text-[#45FFCA] text-[1.3rem] uppercase ${fixedProjectsTitle && 'text-transparent'}`}>{title}</h1>
            </div>
            {fixedProjectsTitle && <div className={`hidden z-30 skills-section-title px-[1.25rem] py-4 w-full font-semibold 

                max-[768px]:block max-[426px]:px-4

                ${fixedProjectsTitle && 'fixed px-10 max-[426px]:px-[1.65rem] m-0 top-[-0.05rem] left-0 bg-[#000C18ED]'}`}
            >
                <h1 className='text-[#45FFCA] text-[1.3rem] uppercase'>{title}</h1>
            </div>}
            {projects.map(project => {
                return (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                    />
                )
            })}
        </Element>
    )
}

export default ProjectsSection;
