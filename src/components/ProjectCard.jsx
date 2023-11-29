import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import StackBox from './StackBox';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function ProjectCard({ project }) {
    return (
        <div className="
            project-card 
            px-4 
            py-6 
            rounded-md 
            w-full 
            border-[1px] 
            border-transparent 
            flex 
            hover:bg-[#BABABA11] 
            hover:border-[#FAFAFA23] 
            
            max-[1024px]:px-2
            max-[1024px]:py-4
            
            max-[768px]:px-4
            max-[768px]:py-6
            
            max-[426px]:px-2
            max-[426px]:py-4"
        >
            <div className="
                image-con 
                w-[40%] 
                px-2
                
                max-[1024px]:w-[37.5%] 
                max-[1024px]:px-1
                
                max-[768px]:w-[35%]
                max-[768px]:px-2
                
                max-[426px]:px-1"
            >
                <img 
                    src={project.project_image} alt={project.project_title} className='
                    border-[2px] 
                    border-gray-800 
                    rounded-md' 
                />
            </div>
            <div className="
                project-info 
                w-[60%] 
                flex 
                flex-col 
                pl-2
                
                max-[1024px]:w-[62.5%]
                
                max-[768px]:w-[65%]"
            >
                <div className="
                    header 
                    flex 
                    items-center 
                    justify-between"
                >
                    <h1 className="
                        title 
                        text-[1.1rem]
                        font-semibold 
                        text-[#FAFAFA]
                        
                        max-[1024px]:text-[0.95rem]
                        
                        max-[768px]:text-[1.2rem]
                        
                        max-[426px]:text-[1.15rem]"
                    >{project.project_title}
                    </h1>

                    <div className="
                        links 
                        flex 
                        gap-6 
                        items-center
                        
                        max-[1024px]:gap-4
                        
                        max-[768px]:gap-6"
                    >
                        <a href={project.source_url} target='_blank' rel='noreferrer' className='
                            flex 
                            items-center 
                            justify-center'
                        >
                            <FontAwesomeIcon icon={faGithub} className='
                                text-[1.25rem] 
                                text-[#45ffcacc] 
                                hover:text-[#45FFCA] 
                                
                                max-[1024px]:text-[1rem]
                                
                                max-[768px]:text-[1.35rem]'
                            />
                        </a>
                        <a href={project.live_url} target='_blank' rel='noreferrer' className='
                            flex 
                            items-center 
                            justify-center'
                        >
                            <FontAwesomeIcon icon={faLink} className='
                                text-[1rem] 
                                text-[#45ffcacc] 
                                hover:text-[#45FFCA] 
                                
                                max-[1024px]:text-[0.85rem]
                                
                                max-[768px]:text-[1.1rem]'
                            />
                        </a>
                    </div>
                </div>
                <p className="
                    desc 
                    text-[#B9B9B9] 
                    text-[0.85rem] 
                    mt-3
                        
                    max-[1440px]:text-[0.9rem]
                        
                    max-[1024px]:text-[0.75rem]
                    max-[1024px]:mt-2
                    
                    max-[768px]:text-[0.85rem]
                    max-[768px]:mt-4
                    
                    max-[426px]:text-[0.9rem]"
                >{project.description}
                </p>
                <div className="
                    stack 
                    mt-5 
                    flex 
                    flex-wrap 
                    gap-2
                    
                    max-[1024px]:mt-3
                    
                    max-[768px]:mt-5"
                >
                    {project.stack?.map((feature, index) => {
                        return (
                            <StackBox 
                                key={index} 
                                title={feature}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
