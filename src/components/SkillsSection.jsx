import React from 'react';
import { Element } from 'react-scroll';
import { skills } from '../constants/SkillsList';
import SkillCard from './SkillCard';

function SkillsSection() {
    return (
        <Element name='Skills' id='Skills' className="skills py-12 grid grid-cols-4 h-[89%]

            max-[1440px]:h-[87%]
                        
            max-[1024px]:grid-cols-3 max-[1024px]:h-auto max-[1024px]:pt-0 max-[1024px]:pb-8 max-[1024px]:gap-y-[1.25rem]
                        
            max-[768px]:grid-cols-5 max-[768px]:gap-y-[1.5rem] max-[768px]:mt-8
                        
            max-[426px]:grid-cols-3 max-[426px]:px-4 max-[426px]:gap-y-[1.75rem] max-[426px]:mb-[3.5rem]"
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
    )
}

export default SkillsSection;
