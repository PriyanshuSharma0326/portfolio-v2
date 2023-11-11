import React, { useContext } from 'react';
import { DashboardContext } from '../context/dashboard-context';

function SectionNavigationLink({ sectionTitle }) {
    const { selectedSection, setSelectedSection } = useContext(DashboardContext);

    const baseClass = "w-[20%] h-[0.1rem] rounded-full bg-[#FAFAFA55]";
    const selectedClass = selectedSection === sectionTitle ? "click w-[40%] bg-[#FAFAFA]" : "";
    const combinedClass = `${baseClass} ${selectedClass}`;

    return (
        <li className='flex items-center' onClick={() => setSelectedSection(sectionTitle)}>
            <div className={combinedClass}></div>
            <span className={`text-[#45FFCAAA] cursor-pointer uppercase text-[0.85rem] font-medium hover:text-[#45FFCA] ml-4 ${selectedSection === `${sectionTitle}` ? ' text-[#45FFCA]' : ''}`}>{sectionTitle}</span>
        </li>
    )
}

export default SectionNavigationLink;
