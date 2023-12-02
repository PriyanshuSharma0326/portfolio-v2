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
            className='link' 
        >
            <div className='bar'></div>
            <span>{sectionTitle}</span>
        </Link>
    )
}

export default SectionNavigationLink;
