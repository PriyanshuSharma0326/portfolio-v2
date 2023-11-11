import React from 'react';
import image from '../assets/ProfilePicture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function UserInfo() {
    return (
        <div className='user-container w-1/2 px-8 my-12'>
            <div className='h-full flex flex-col'>
                <div className="user-info flex items-center px-8">
                    <div className="flex flex-col gap-[0.4rem] w-[calc(100%-14rem)]">
                        <h1 className='text-[#45FFCA] uppercase text-[2.4rem] text-right tracking-[0.1rem]'>Hi, I'm <span className='text-[#FAFAFA]'>Priyanshu</span></h1>
                        <h2 className='text-[#45FFCA] text-[1rem] text-right tracking-[0.15rem]'>A <span className='text-[#FAFAFA]'>Web Developer</span> & Front-End Enthusiast</h2>
                    </div>
                    <div className="user-image w-[11rem] rounded-full overflow-hidden ml-auto shadow-[0_15px_24px_0_rgba(69,255,202,0.3)]">
                        <img src={image} alt="User" />
                    </div>
                </div>

                <div className="user-about px-8 mt-16">
                    <p className='text-[#45FFCA] text-[0.95rem] tracking-[0.05rem]'>Hello there! I'm a 22-year-old guy with a love for web development. I enjoy creating beautiful and accurate websites that you can see and interact with. Learning about new technologies excites me, and I always keep an eye out for the latest trends.</p>
                    <p className='text-[#45FFCA] text-[0.95rem] tracking-[0.05rem] mt-6'>Welcome to my portfolio website, where I share my passion for both web development and art!</p>
                </div>

                <div className="download-cv px-8 mt-8">
                    <button className='bg-[#45FFCA] text-[#001C30] rounded-full px-[1.25rem] py-[0.65rem] font-semibold text-[0.9rem]'>Download CV</button>
                </div>

                <div className="socials-container flex items-center gap-4 px-8 mt-10">
                    <FontAwesomeIcon className='text-[1.15rem] p-2 text-[#45FFCA] hover:cursor-pointer' icon={faLinkedinIn} />
                    <FontAwesomeIcon className='text-[1.25rem] p-2 text-[#45FFCA] hover:cursor-pointer' icon={faGithub} />
                    <FontAwesomeIcon className='text-[1.35rem] p-2 text-[#45FFCA] hover:cursor-pointer' icon={faInstagram} />
                    <FontAwesomeIcon className='text-[1.15rem] p-2 text-[#45FFCA] hover:cursor-pointer' icon={faXTwitter} />
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
