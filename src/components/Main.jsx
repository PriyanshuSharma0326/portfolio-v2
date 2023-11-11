import React, { useContext } from 'react';
import UserInfo from './UserInfo';
import { DashboardContext } from '../context/dashboard-context';
import { skills } from '../constants/SkillsList';
import SkillCard from './SkillCard';
import SectionNavigationLink from './SectionNavigationLink';
import { projects } from '../constants/ProjectsList';
import ProjectCard from './ProjectCard';
import ContactForm from './ContactForm';

function Main() {
    const { selectedSection } = useContext(DashboardContext);

    return (
        <div className='absolute z-10 left-0 top-0 w-full h-full flex'>
            <UserInfo />

            <div className="user-ach flex w-1/2 pr-8 my-12">
                <div className="sidebar w-[25%] flex items-center gap-2 py-36">
                    <ul className='flex flex-col my-auto h-[55%] w-full justify-between'>
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
                <div className="info-container w-[75%]">
                    {selectedSection === 'Skills' && 
                        <div className="skills py-16 grid grid-cols-4 h-full overflow-y-scroll no-scrollbar">
                            {skills.map(skill => {
                                return (
                                    <SkillCard 
                                        key={skill.id} 
                                        icon={skill.icon} 
                                        title={skill.title} 
                                    />
                                )
                            })}
                        </div>
                    }

                    {selectedSection === 'Projects' && 
                        <div className="projects h-full overflow-y-scroll no-scrollbar flex flex-col gap-4">
                            {projects.map(project => {
                                console.log(project)
                                return (
                                    <ProjectCard 
                                        key={project.id} 
                                        project={project} 
                                    />
                                )
                            })}
                        </div>
                    }

                    {selectedSection === 'Contact' && <ContactForm />}
                </div>
            </div>
        </div>
    )
}

export default Main;
