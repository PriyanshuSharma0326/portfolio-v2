import React, { useContext, useEffect } from 'react';
import UserInfo from './UserInfo';
import SectionNavigationLink from './SectionNavigationLink';
import ContactForm from './ContactForm';
import { StyleContext } from '../context/style-context';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';

function Main() {
    const { setTitle, fixedSkillTitle, setFixedSkillTitle, setFixedProjectsTitle } = useContext(StyleContext);
    
    const transitionNavbar = () => {
        if(window?.innerWidth > 426) {
            if(window?.scrollY > 689) {
                if(window?.scrollY > 1232) {
                    setFixedSkillTitle(false);
                    setFixedProjectsTitle(true);
                    if(window?.scrollY > 2400) {
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
            else if(window?.scrollY < 689){
                setFixedSkillTitle(false);
            }
        }
        else {
            if(window?.scrollY > 674) {
                if(window?.scrollY > 1407) {
                    setFixedSkillTitle(false);
                    setFixedProjectsTitle(true);
                    if(window?.scrollY > 3030) {
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
            else if(window?.scrollY < 674){
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

    useEffect(() => {
        const Links = document.getElementById('links');
        if(window?.screenY === 0) {
            Links.firstChild.classList.add('active')
        }
    }, [])

    return (
        <div className='absolute z-10 left-0 top-0 w-full h-full flex
            
            max-[768px]:flex-col max-[768px]:pt-12 max-[768px]:relative max-[768px]:bg-[linear-gradient(180deg,_rgba(0,12,24,1)_0%,_rgba(0,20,42,1)_100%)]
            
            max-[426px]:pt-16'
        >
            <UserInfo />
            
            <div className="flex w-1/2 pr-8 my-12 

                max-[1440px]:my-[5.5rem] max-[1440px]:px-4 max-[1440px]:w-[52%]
                
                max-[1024px]:my-[4rem] max-[1024px]:px-2
                
                max-[768px]:my-12 max-[768px]:w-[95%] max-[768px]:mx-auto max-[768px]:px-0 max-[768px]:flex-col
                
                max-[426px]:my-6"
            >
                <div className="w-[25%] flex items-center gap-2 py-40

                    max-[1440px]:py-[13.5rem]
                    
                    max-[1024px]:py-[8.25rem]
                    
                    max-[768px]:hidden"
                >
                    <ul id='links' className='flex flex-col my-auto h-[55%] w-full justify-between'
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

                <div id='List' className="w-[75%] h-full overflow-y-scroll no-scrollbar
                    
                    max-[768px]:overflow-visible max-[768px]:w-full
                    
                    max-[426px]:mt-10"
                >
                    <div className='hidden z-30 px-[1.25rem] py-4 w-full font-semibold 

                        max-[768px]:block 

                        max-[426px]:px-4'
                    >
                        <h1 className={`text-[#45FFCA] text-[1.3rem] uppercase 
                            
                            ${fixedSkillTitle && 'text-transparent'}`
                        }>Skills</h1>
                    </div>

                    {fixedSkillTitle && <div className={`hidden z-30 px-[1.25rem] py-4 w-full font-semibold 

                        max-[768px]:block 

                        max-[426px]:px-4

                        ${fixedSkillTitle && 'fixed px-10 max-[426px]:px-[1.65rem] m-0 top-[-0.05rem] left-0 bg-[#000C18ED]'}`}
                    >
                        <h1 className='text-[#45FFCA] text-[1.3rem] uppercase'
                        >Skills</h1>
                    </div>}
                    
                    <SkillsSection />

                    <ProjectsSection />

                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Main;
