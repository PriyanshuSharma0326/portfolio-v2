import React, { useContext } from 'react';
import './SectionNavigationLink.scss';
import { DashboardContext } from '../context/dashboard-context';
import { Link } from 'react-scroll';

function SectionNavigationLink({ sectionTitle }) {
    const { setSelectedSection } = useContext(DashboardContext);

    return (
        <Link 
            to={sectionTitle} 
            spy={true} 
            smooth={true} 
            duration={500} 
            containerId='ListsContainer' 
            onClick={() => setSelectedSection(sectionTitle)} 
            className='link' 
        >
            <div className='bar'></div>
            <span>{sectionTitle}</span>
        </Link>
    )
}

export default SectionNavigationLink;
