import React from 'react';
import './SectionNavigationLink.scss';
import { Link } from 'react-scroll';

function SectionNavigationLink({ sectionTitle }) {
    return (
        <Link 
            to={sectionTitle} 
            spy={true} 
            smooth={true} 
            duration={800} 
            containerId='List' 
            activeClass='active'
            className='link flex items-center cursor-pointer group' 
        >
            <div className='bar w-1/5 max-[1024px]:w-[17.5%] group-hover:w-2/5 h-[0.1rem] rounded-xl bg-[#FAFAFA55] group-hover:bg-[#FAFAFA] transition-all duration-300 ease-in-out'></div>
            
            <span className='text-[#45FFCAAA] group-hover:text-[#45FFCA] uppercase text-[0.9rem] max-[1024px]:text-[0.75rem] font-medium ml-4 font-source select-none hover:text-[#45FFCA]'>{sectionTitle}</span>
        </Link>
    )
}

export default SectionNavigationLink;
