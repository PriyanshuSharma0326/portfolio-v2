import React from 'react';
import image from '../assets/ProfilePicture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function UserInfo() {
    return (
        <div className='
            user-container 
            w-1/2 
            px-8 
            my-auto 
            font-hedvig
            select-none

            max-[1440px]:px-2 
            max-[1440px]:w-[48%]
            
            max-[768px]:w-[95%]
            max-[768px]:mx-auto
            max-[768px]:px-0'
        >
            <div className='
                h-full 
                flex 
                flex-col'
            >
                <div className="
                    user-info 
                    flex 
                    items-center 
                    px-8 

                    max-[1440px]:px-4
                    
                    max-[1024px]:px-2
                    
                    max-[768px]:px-4"
                >
                    <div className="
                        flex 
                        flex-col 
                        gap-[0.4rem] 
                        w-[calc(100%-14rem)] 

                        max-[1440px]:w-[calc(100%-13.5rem)] 
                        
                        max-[1024px]:w-[calc(100%-9.75rem)]
                        
                        max-[768px]:w-[calc(100%-14.5rem)]
                        
                        max-[426px]:w-full"
                    >
                        <h1 className='
                            text-[#45FFCA] 
                            uppercase 
                            text-[2.4rem] 
                            text-right 
                            tracking-[0.1rem] 

                            max-[1440px]:text-[2.45rem] 
                            
                            max-[1024px]:text-[1.45rem]
                            
                            max-[768px]:text-[2.55rem]
                            
                            max-[426px]:text-[2rem]
                            max-[426px]:text-left'
                        >Hi, I'm <span className='text-[#FAFAFA]'>Priyanshu</span>
                        </h1>
                        <h2 className='
                            text-[#45FFCA] 
                            text-[1rem] 
                            text-right 
                            tracking-[0.15rem]
                            
                            max-[1024px]:text-[0.625rem]
                            
                            max-[768px]:text-[1.15rem]
                            
                            max-[426px]:text-[0.9rem]
                            max-[426px]:text-left'
                        >A <span className='text-[#FAFAFA]'>Web Developer</span> & Front-End Enthusiast
                        </h2>
                    </div>

                    <div className="
                        user-image 
                        w-[11rem] 
                        rounded-full 
                        overflow-hidden 
                        ml-auto 
                        shadow-[0_15px_24px_0_rgba(69,255,202,0.3)]
                        
                        max-[1440px]:w-[12rem]
                        
                        max-[1024px]:w-[8.5rem]
                        
                        max-[768px]:w-[12.75rem]
                        
                        max-[426px]:hidden"
                    >
                        <img src={image} alt="User" />
                    </div>
                </div>

                <div className="
                    user-about 
                    px-8 
                    mt-14 

                    max-[1440px]:mt-16
                    
                    max-[1024px]:mt-10
                    max-[1024px]:px-6
                    
                    max-[768px]:px-12
                    max-[768px]:mt-12
                    
                    max-[426px]:px-4
                    max-[426px]:mt-[3.5rem]"
                >
                    <p className='
                        text-[#45FFCA] 
                        text-[0.95rem] 
                        tracking-[0.05rem] 

                        max-[1440px]:text-[1.1rem]
                        
                        max-[1024px]:text-[0.75rem]
                        max-[1024px]:tracking-[0.025rem]
                        
                        max-[768px]:text-[0.95rem]
                        max-[768px]:tracking-[0.04rem]
                        
                        max-[426px]:text-[0.85rem]
                        max-[426px]:tracking-[0.03rem]
                        max-[426px]:leading-6'
                    >Hello there! I'm a passionate web developer dedicated to creating visually stunning and functional websites. My expertise lies in crafting engaging user experiences, and I thrive on exploring the latest technologies to stay at the forefront of web development trends.
                    </p>
                    <p className='
                        text-[#45FFCA] 
                        text-[0.95rem] 
                        tracking-[0.05rem] 
                        mt-6 

                        max-[1440px]:text-[1.1rem]
                        
                        max-[1024px]:text-[0.75rem]
                        max-[1024px]:tracking-[0.025rem]
                        
                        max-[768px]:text-[0.95rem]
                        max-[768px]:tracking-[0.04rem]
                        
                        max-[426px]:text-[0.85rem]
                        max-[426px]:tracking-[0.03rem]
                        max-[426px]:leading-6'
                    >Welcome to my portfolio website, a space where I showcase my passion for web development and art!
                    </p>
                </div>

                <a className="
                    download-cv 
                    ml-8 
                    mt-8
                    w-fit 
                    rounded-full 

                    max-[1440px]:mt-16

                    max-[1024px]:mt-8
                    max-[1024px]:ml-6
                    
                    max-[768px]:ml-12
                    max-[768px]:mt-10
                    
                    max-[426px]:ml-4
                    max-[426px]:mt-[3.5rem]"
                    href='https://drive.google.com/file/d/1kiwFg5JvVFCDRdRl9X4k_Uz56uBOHY-s/view?usp=drive_link' 
                    target='_blank' 
                    rel='noreferrer'
                >
                    <button className='
                        bg-[#45FFCA] 
                        text-[#001C30] 
                        rounded-full 
                        px-[1.25rem] 
                        py-[0.65rem] 
                        font-semibold 
                        text-[0.9rem] 

                        max-[1440px]:text-[1.1rem]
                        max-[1440px]:px-[1.35rem]
                        max-[1440px]:py-[0.75rem]
                        
                        max-[1024px]:text-[0.75rem]
                        max-[1024px]:px-[1rem]
                        max-[1024px]:py-[0.55rem]
                        
                        max-[768px]:text-[1rem]
                        max-[768px]:px-[1.25rem]
                        max-[768px]:py-[0.7rem]
                        
                        max-[426px]:text-[1rem]
                        max-[426px]:px-[1.25rem]
                        max-[426px]:py-[0.75rem]'
                    >Download CV
                    </button>
                </a>

                <div className="
                    socials-container 
                    flex 
                    items-center 
                    gap-4 
                    px-8 
                    mt-10
                    
                    max-[1024px]:mt-8
                    max-[1024px]:px-6
                    max-[1024px]:gap-2
                    
                    max-[768px]:gap-4
                    max-[768px]:px-12
                    max-[768px]:mt-8
                    
                    max-[426px]:px-4
                    max-[426px]:mt-[1.75rem]
                    max-[426px]:gap-3"
                >
                    <a href="https://www.linkedin.com/in/PriyanshuSharma0326" target='_blank' rel='noreferrer' className='leading-3'>
                        <FontAwesomeIcon icon={faLinkedinIn} className='
                            text-[1.15rem] 
                            p-2 
                            text-[#45FFCA]  

                            max-[1440px]:text-[1.35rem]
                            
                            max-[1024px]:text-[1.1rem]
                            
                            max-[768px]:text-[1.25rem]
                            
                            max-[426px]:text-[1.5rem]'
                        />
                    </a>
                    <a href="https://www.github.com/PriyanshuSharma0326" target='_blank' rel='noreferrer' className='leading-3'>
                        <FontAwesomeIcon icon={faGithub} className='
                            text-[1.25rem] 
                            p-2 
                            text-[#45FFCA] 
                            
                            max-[1440px]:text-[1.45rem]
                            
                            max-[1024px]:text-[1.15rem]
                            
                            max-[768px]:text-[1.35rem]
                            
                            max-[426px]:text-[1.5rem]'
                        />
                    </a>
                    <a href="https://www.instagram.com/xtechilad.jpg" target='_blank' rel='noreferrer' className='leading-3'>
                        <FontAwesomeIcon icon={faInstagram} className='
                            text-[1.35rem] 
                            p-2 
                            text-[#45FFCA] 
                            
                            max-[1440px]:text-[1.55rem]
                            
                            max-[1024px]:text-[1.25rem]
                            
                            max-[768px]:text-[1.45rem]
                            
                            max-[426px]:text-[1.6rem]'
                        />
                    </a>
                    <a href="https://www.x.com/xtechilad" target='_blank' rel='noreferrer' className='leading-3'>
                        <FontAwesomeIcon icon={faXTwitter} className='
                            text-[1.15rem] 
                            p-2 
                            text-[#45FFCA] 
                            
                            max-[1440px]:text-[1.35rem]
                            
                            max-[1024px]:text-[1.1rem]
                            
                            max-[768px]:text-[1.25rem]
                            
                            max-[426px]:text-[1.4rem]'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;
