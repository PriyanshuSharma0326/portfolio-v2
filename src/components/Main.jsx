import React, { useContext, useEffect } from 'react';
import UserInfo from './UserInfo';
import { skills } from '../constants/SkillsList';
import SkillCard from './SkillCard';
import SectionNavigationLink from './SectionNavigationLink';
import { projects } from '../constants/ProjectsList';
import ProjectCard from './ProjectCard';
import ContactForm from './ContactForm';
import { Element } from 'react-scroll';
import { StyleContext } from '../context/style-context';

function Main() {
    const { title, setTitle, fixedSkillTitle, setFixedSkillTitle, fixedProjectsTitle, setFixedProjectsTitle } = useContext(StyleContext);

    const transitionNavbar = () => {
        if(window?.innerWidth > 426) {
            if(window?.scrollY > 665) {
                if(window?.scrollY > 1193) {
                    setFixedSkillTitle(false);
                    setFixedProjectsTitle(true);
                    if(window?.scrollY > 2476) {
                        setTitle('Contact')
                    }
                    else {
                        setTitle('Projects');
                    }
                }
                else {
                    setFixedSkillTitle(true);
                    setFixedProjectsTitle(false);
                }
            }
            else if(window?.scrollY < 665){
                setFixedSkillTitle(false);
            }
        }
        else {
            if(window?.scrollY > 624) {
                if(window?.scrollY > 1369) {
                    setFixedSkillTitle(false);
                    setFixedProjectsTitle(true);
                    if(window?.scrollY > 3082) {
                        setTitle('Contact')
                    }
                    else {
                        setTitle('Projects');
                    }
                }
                else {
                    setFixedSkillTitle(true);
                    setFixedProjectsTitle(false);
                }
            }
            else if(window?.scrollY < 624){
                setFixedSkillTitle(false);
            }
        }
    }

    useEffect(() => {
        window?.addEventListener('scroll', transitionNavbar);
        
        return () => {
            window?.removeEventListener('scroll', transitionNavbar);
        }
    }, )

    return (
        <div className='
            absolute 
            z-10 
            left-0 
            top-0 
            w-full 
            h-full 
            flex
            
            max-[768px]:flex-col
            max-[768px]:pt-12
            max-[768px]:relative
            max-[768px]:bg-[linear-gradient(180deg,_rgba(0,12,24,1)_0%,_rgba(0,20,42,1)_100%)]
            
            max-[426px]:pt-16'
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
                
                max-[1024px]:my-[4rem]
                max-[1024px]:px-2
                
                max-[768px]:my-12
                max-[768px]:w-[95%]
                max-[768px]:mx-auto
                max-[768px]:px-0
                max-[768px]:flex-col
                
                max-[426px]:my-6"
            >
                <div className="
                    sidebar 
                    w-[25%] 
                    flex 
                    items-center 
                    gap-2 
                    py-40

                    max-[1440px]:py-52
                    
                    max-[1024px]:py-[8.25rem]
                    
                    max-[768px]:hidden"
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
                    no-scrollbar
                    
                    max-[768px]:overflow-visible
                    max-[768px]:w-full
                    
                    max-[426px]:mt-10"
                >
                    <div className='
                        hidden 
                        z-30 
                        skills-section-title 
                        px-[1.25rem] 
                        py-4 
                        w-full 
                        font-semibold 

                        max-[768px]:block 

                        max-[426px]:px-4'
                    >
                        <h1 className={`
                            text-[#45FFCA] 
                            text-[1.3rem] 
                            uppercase 
                            ${fixedSkillTitle && 'text-transparent'}`}
                        >Skills</h1>
                    </div>

                    {fixedSkillTitle && <div className={`
                        hidden
                        z-30 
                        skills-section-title 
                        px-[1.25rem] 
                        py-4 
                        w-full 
                        font-semibold 

                        max-[768px]:block 

                        max-[426px]:px-4

                        ${fixedSkillTitle && 'fixed px-10 max-[426px]:px-[1.65rem] m-0 top-[-0.05rem] left-0 bg-[#000C18ED]'}`}
                    >
                        <h1 className='
                            text-[#45FFCA] 
                            text-[1.3rem] 
                            uppercase'
                        >Skills</h1>
                    </div>}
                    
                    <Element name='Skills' id='Skills' className="
                        skills 
                        py-12 
                        grid 
                        grid-cols-4 
                        h-[89%] 
                        overflow-y-scroll 
                        no-scrollbar

                        max-[1440px]:h-[87%]
                        
                        max-[1024px]:grid-cols-3
                        max-[1024px]:h-auto
                        max-[1024px]:pt-0 
                        max-[1024px]:pb-8
                        max-[1024px]:gap-y-[1.25rem]
                        
                        max-[768px]:grid-cols-5
                        max-[768px]:gap-y-[1.5rem]
                        max-[768px]:mt-8
                        
                        max-[426px]:grid-cols-3
                        max-[426px]:px-4
                        max-[426px]:gap-y-[1.75rem]
                        max-[426px]:mb-[3.5rem]"
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
                        mb-16
                        
                        max-[768px]:gap-12
                        
                        max-[426px]:gap-10"
                    >
                        <div className='
                            hidden 
                            z-30 
                            skills-section-title 
                            px-[1.25rem] 
                            py-4 
                            w-full 
                            font-semibold 

                            max-[768px]:block 

                            max-[426px]:px-4'
                        >
                            <h1 className={`
                                text-[#45FFCA] 
                                text-[1.3rem] 
                                uppercase 
                                ${fixedProjectsTitle && 'text-transparent'}`}
                            >{title}</h1>
                        </div>

                        {fixedProjectsTitle && <div className={`
                            hidden
                            z-30 
                            skills-section-title 
                            px-[1.25rem] 
                            py-4 
                            w-full 
                            font-semibold 

                            max-[768px]:block 

                            max-[426px]:px-4

                            ${fixedProjectsTitle && 'fixed px-10 max-[426px]:px-[1.65rem] m-0 top-[-0.05rem] left-0 bg-[#000C18ED]'}`}
                        >
                            <h1 className='
                                text-[#45FFCA] 
                                text-[1.3rem] 
                                uppercase'
                            >{title}</h1>
                        </div>}
                        {/* <div className={`
                            hidden 
                            z-30 
                            skills-section-title 
                            px-[1.25rem] 
                            py-4 
                            w-full 
                            font-semibold 

                            max-[768px]:block 

                            max-[426px]:px-4
                            max-[426px]:mb-[-1rem]

                            ${fixedProjectsTitle && 'fixed px-10 max-[426px]:px-[1.75rem] m-0 top-[-0.05rem] left-0 bg-[#000C18ED]'}`}
                        >
                            <h1 className='text-[#45FFCA] text-[1.3rem] uppercase'>{title}</h1>
                        </div> */}
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
