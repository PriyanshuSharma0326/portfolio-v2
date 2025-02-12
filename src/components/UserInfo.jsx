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
                    href='https://s3.amazonaws.com/attachments.angel.co/11800079-6a988bfd406bab062e4d23578ac6a0ce.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATAVHNKYQXGZKBC2I%2F20250212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250212T045101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzwqviEUvzsFjBfRRcSRiFr23vxhwrg53Rgc5sNDbwVQIhAO7axa3SMpJnmUw9%2BggasV8MySAogcOwVEUCsO5tOjiQKpQFCOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjA3NTgzMjcwNDMzIgw6RrbTCapuSB0U2E4q6AT8BneqO%2FlCy3VOiM1Id%2BSthVOMA19dC1DQNwsfSQwRBduA2TPsN7ALWJhdvEuUrColin6ir9FkcrG7Su%2Ba7yq5xJ21e1vuELnEvvZd0ooTiVnCclpfHQSVwaLxuUPpYmXc7xtfjUuD25rNIL1ikfJ0Vx%2FKo8f%2BbDvJFwBNjwHcxcHUZ5Nx2k1aVVuDBSrw3B4vsPExHfzmmn3WH3SzbtWsI0XU5QCaN9UJw6A%2BcivPON0tquofNl9AtU3h4ueno77AaDdsAzU4yaQ9lcoLjhFMwGbJGxBVzfxVyv82pQRnZH9CvA8fXhy4vCWXy9SGc82%2BUBdbV34uMLATUnr1rgSWvFQ2UC4artD1dCacMV7uN4kDi8SvuGZ72tronkHuSxvWsSkTpiWTTZbWDNWqJQk%2FE0yfQy5Wu9gc23K27%2Bf4loPm6E5rssH4wfrSuXWSt3IV4KVkDsJpYiJpVjwNCivWbWEe4en%2FXHYV2o8EBGxItqrCT%2FWUkaaurVFtQQ7EpI2d2NYoP8p9bL2mk43LOEFsVUvBAm818JTby9L86SeNEjjt2MqsvavSX75d%2Fxkxtgxeg%2BJKQetiWaYPYTEH6qIPhFmyjlLwEsd1pqO68Wj0qTLgPkyWVcdS6tIQXngL6Pv%2FwBUtAgvvUrEGloWfBNnji1nK3HqqqXFWQmRUui6MlLNJdEwdYsJumAeaZahymsFdIgrX8Cs1A%2Fq%2FSvj5D26aV9WFf221feFWVvgbsPPcJiLJv%2FfxG2%2BCy%2FbsWEJ8nT6X0VTTzLSG5smi0k8EzgNkw4Hzvlu7zBMxZSbz7WJ%2B4N%2FoI5P6W878MNHKsL0GOpkBetW6YuCXx5mV2i84RClSAYW%2BL%2FOh50W%2Fa0%2BjWYNG7e%2BSln3mNInAqL2RGSVHXqiNMj9l3BnSn0lUPdXLEunT9N1usGC77kZ0wqmmH4o3UFh6H4CBptZgqhZ05OfOOdPAZr2iQV1AX8vgy%2FfDsimgeAyC7lluMiyTLfTszH4VFKe%2FyjAPP36vF3zimyW0AQ1Sh10tFeawuVJp&X-Amz-SignedHeaders=host&X-Amz-Signature=7f7711078c109372b75ef8adbc5ebe943146332ef9bee19fcb65a1dca894d8f3' 
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
