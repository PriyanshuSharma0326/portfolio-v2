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
            hover:cursor-pointer"
        >
            <div className="
                image-con 
                w-[40%] 
                px-2"
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
                gap-3 
                pl-2"
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
                        text-[#FAFAFA]"
                    >{project.project_title}
                    </h1>

                    <div className="
                        links 
                        flex 
                        gap-6 
                        items-center"
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
                                hover:cursor-pointer'
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
                                hover:cursor-pointer'
                            />
                        </a>
                    </div>
                </div>
                    <p className="
                        desc 
                        text-[#B9B9B9] 
                        text-[0.85rem]
                        
                        max-[1440px]:text-[0.9rem]"
                    >{project.description}</p>
                    <div className="
                        stack 
                        mt-2 
                        flex 
                        flex-wrap 
                        gap-2"
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
