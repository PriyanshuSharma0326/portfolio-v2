import React from 'react';
import UserInfo from './UserInfo';
import { skills } from '../constants/SkillsList';
import SkillCard from './SkillCard';
import SectionNavigationLink from './SectionNavigationLink';
import { projects } from '../constants/ProjectsList';
import ProjectCard from './ProjectCard';
import ContactForm from './ContactForm';
import { Element } from 'react-scroll';

function Main() {
    return (
        <div className='
            absolute 
            z-10 
            left-0 
            top-0 
            w-full 
            h-full 
            flex'
        >
            <UserInfo />

            <div className="
                user-ach 
                flex 
                w-1/2 
                pr-8 
                my-12 

                max-[1440px]:my-[5.5rem] 
                max-[1440px]:px-4
                max-[1440px]:w-[52%]
                
                max-[1024px]:my-[4rem]"
            >
                <div className="
                    sidebar 
                    w-[25%] 
                    flex 
                    items-center 
                    gap-2 
                    py-40

                    max-[1440px]:py-52
                    
                    max-[1024px]:py-28"
                >
                    <ul className='
                        flex 
                        flex-col 
                        my-auto 
                        h-[55%] 
                        w-full 
                        justify-between'
                    >
                        <SectionNavigationLink 
                            sectionTitle='Skills'
                        />
                        <SectionNavigationLink 
                            sectionTitle='Projects'
                        />
                        <SectionNavigationLink 
                            sectionTitle='Contact'
                        />
                    </ul>
                </div>

                <div id='ListsContainer' className="
                    info-container 
                    w-[75%] 
                    overflow-y-scroll 
                    no-scrollbar"
                >
                    <Element name='Skills' id='Skills' className="
                        skills 
                        py-12 
                        grid 
                        grid-cols-4 
                        h-[90%] 
                        overflow-y-scroll 
                        no-scrollbar

                        max-[1440px]:h-[87%]
                        
                        max-[1024px]:grid-cols-3
                        max-[1024px]:h-auto
                        max-[1024px]:pt-0 
                        max-[1024px]:pb-8
                        max-[1024px]:gap-y-[1.25rem]"
                    >
                        {skills.map(skill => {
                            return (
                                <SkillCard 
                                    key={skill.id} 
                                    icon={skill.icon} 
                                    title={skill.title} 
                                />
                            )
                        })}
                    </Element>

                    <Element name='Projects' id='Projects' className="
                        projects 
                        flex 
                        flex-col 
                        gap-4 
                        mb-16"
                    >
                        {projects.map(project => {
                            return (
                                    <ProjectCard 
                                    key={project.id} 
                                    project={project} 
                                />
                            )
                        })}
                    </Element>

                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Main;
