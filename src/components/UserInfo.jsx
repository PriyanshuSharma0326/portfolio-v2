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
                    >Hello there! I'm Priyanshu Sharma, an enthusiast deeply invested in web development. Crafting visually appealing and functional websites is my forte, and I take pleasure in ensuring they provide an engaging user experience. The thrill of exploring new technologies is something I cherish, always staying attuned to the latest trends.
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
                    href='https://s3.amazonaws.com/attachments.angel.co/9483843-af16b72a2ac5ae56a6a9be3b06dd5ab3.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQ6AA22R77%2F20231129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231129T142800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIB%2F68qpj%2FqiozRbjwIS%2Fuw5OVmAQl5IZOr3Lbs%2Bkq4kqAiB6r2upNA6x13rHbX9aBv0kXWibsegYRJTeaCLc5V0IjiqTBQjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDIwNzU4MzI3MDQzMyIMiTDlW%2ByToXNei2FtKucEN6pKiiTsRdhERP5mHgDxof74iBp8ztFi0XLzZ8vw0ugS69jrw%2F3FXPG3bNVKuKCWYFm37uJpDUVQn7mOdxzHheXKqax6srRg3EYGaADYyWXGoin8hV0NiMUqLisM4eZXMzXndeoGJ0a5z8bomhcheDsrkS%2B4wrHzN3ClfkJfM0ishFEndGBw1TkSwRMMsYI5aqKC%2BrVWSZp%2FAnJMJeGjIdcLd%2FjQjxCEJ82Y4JxWP11dMCrIYLaG9o1Ez2WT%2BcAGxwauW3XuWUZ45vjfFKOboqeJIPaJavw7RBXNWIhZ9Cwuww7GlQf6Xva1FtSFr%2F3OLHKVwkbh30jrY3nDcq%2B%2FddYsF7TP1Q8Tx5z836oH4TXoGn7lPu8IuIf7vsT82%2FlPb3RatArNFXF%2BhxzPNhhSIUkNdjySxBhxEaPE5Tvu7F6Zaz52xmrrBxgs%2FAgqW7CoQ3mdeAMMwWCkwU52y8GU452kzBvLH%2FJu7gu7gNss4AmGOsLDQaKfbwtJbclUVuOP3Ls75fcPEPtF33YKSoN5tVocL8w%2BC0NIQG0jPrRBqSg%2F2W4DOK65ydM0yxrQpNFZQO6oW7EagD%2FBxOaIDa55Su1T0nPt2pFrtYhaRuDfKGfNNHOAhHzuwjO%2BM9MFgo5SYDqcR0UCR%2F%2FntpjAhf%2FdCNRtdg8lEKcb%2FIKAAVM3zwh4DtlyNMeRRhdeU17AYYJXH%2B9wQjzL7WLUiXPwr4uyLgg2M3cXBFmVpKA%2B%2BGbiWRnmKcqQxrhf8QKcNOEir%2FCgKx3uk13pl14b3UA2re5v7Bl43LA8ChqpPDdu%2BYA1SWUY2og%2FZpH8MOGAnasGOpsBbC76XwClD0m4SFvdftHbf42h384czXXpTCSldc%2FhYR2DAiJ0QlOZaRyvjqW4%2Fdbc%2BL%2FEl6S1Qj%2FCT%2FWlvP53ZSbUiFmPkGp6LwLztrPjZ8Xe%2FIWZF5Wk6g5pExiU2U9sE48Th7NjwxL4oCBhGnaVsfhViDsZdHAH2V3whLGRalMzcNjl5%2Fi0Fx2%2BDuAGZCVwbxUKuJ17xmjx%2Fu4%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=4fca47843a89b38444693ad0b33b4591188df24e677f3573af5614c044f52f59' 
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
