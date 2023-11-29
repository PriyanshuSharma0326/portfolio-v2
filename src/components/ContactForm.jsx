import React from 'react';
import { Element } from 'react-scroll';

function ContactForm() {
    return (
        <Element name='Contact' id='Contact' className='
            h-full 
            w-[95%] 
            mx-auto
            flex
            
            max-[768px]:h-fit
            max-[768px]:pb-12
            max-[768px]:w-[75%]

            max-[426px]:w-[95%]
            max-[426px]:pb-4'
        >
            <div className="
                form-items-container 
                h-full 
                w-full 
                px-8 
                py-6 
                rounded-lg 
                flex 
                flex-col 
                gap-6 
                bg-[#001D35DD]
                
                max-[1440px]:h-[88.5%]
                max-[1440px]:my-auto
                
                max-[1024px]:h-full 
                max-[1024px]:px-[1.25rem] 
                max-[1024px]:py-4
                max-[1024px]:gap-[1.25rem]
                
                max-[768px]:p-10
                
                max-[426px]:p-6"
            >
                <h1 className='
                    text-[rgb(250,250,250)] 
                    uppercase 
                    font-bold 
                    text-[2.5rem]
                    
                    max-[1024px]:text-[1.75rem]
                    
                    max-[768px]:text-[2.25rem]'
                >Contact Me</h1>

                <form action="" className='
                    h-full 
                    flex 
                    flex-col 
                    justify-between
                    
                    max-[768px]:gap-[1.3rem]'
                >
                    <div className="
                        input-group 
                        flex 
                        flex-col 
                        gap-2"
                    >
                        <label htmlFor="name" className='
                            text-[#FAFAFA]  
                            text-[0.95rem] 
                            w-fit
                            
                            max-[1024px]:text-[0.8rem]
                            
                            max-[768px]:text-[0.95rem]
                            
                            max-[426px]:text-[1.05rem]'
                        >Name</label>
                        <input id='name' type="text" placeholder='Your Name' className='
                            px-3 
                            py-2 
                            outline-none 
                            rounded-md 
                            bg-[#FAFAFA1A] 
                            text-[#FAFAFA]
                            
                            max-[1024px]:px-2 
                            max-[1024px]:py-[0.4rem]
                            max-[1024px]:text-[0.85rem]
                            max-[1024px]:rounded-[4px]
                            
                            max-[768px]:text-[1rem]
                            max-[768px]:px-3
                            max-[768px]:py-2
                            
                            max-[426px]:text-[1.05rem]'
                        />
                    </div>

                    <div className="
                        input-group 
                        flex 
                        flex-col 
                        gap-2"
                    >
                        <label htmlFor="email" className='
                            text-[#FAFAFA] 
                            text-[0.95rem] 
                            w-fit
                            
                            max-[1024px]:text-[0.8rem]
                            
                            max-[768px]:text-[0.95rem]
                            
                            max-[426px]:text-[1.05rem]'
                        >Email</label>
                        <input id='email' type="email" placeholder='Your Email' className='
                            px-3 
                            py-2 
                            outline-none 
                            rounded-md 
                            bg-[#FAFAFA1A] 
                            text-[#FAFAFA]
                            
                            max-[1024px]:px-2 
                            max-[1024px]:py-[0.4rem]
                            max-[1024px]:text-[0.85rem]
                            max-[1024px]:rounded-[4px]
                            
                            max-[768px]:text-[1rem]
                            max-[768px]:px-3
                            max-[768px]:py-2
                            
                            max-[426px]:text-[1.05rem]'
                        />
                    </div>

                    <div className="
                        input-group 
                        flex 
                        flex-col 
                        gap-2"
                    >
                        <label htmlFor="message" className='
                            text-[#FAFAFA] 
                            text-[0.95rem] 
                            w-fit
                            
                            max-[1024px]:text-[0.8rem]
                            
                            max-[768px]:text-[0.95rem]
                            
                            max-[426px]:text-[1.05rem]'
                        >Your Message</label>
                        <textarea name="" id="message" placeholder='Type your message here' className='
                            no-scrollbar 
                            px-3 
                            py-2 
                            outline-none 
                            rounded-md 
                            bg-[#FAFAFA1A] 
                            text-[#FAFAFA] 
                            h-48 
                            resize-none
                            
                            max-[1024px]:px-2 
                            max-[1024px]:py-[0.4rem]
                            max-[1024px]:text-[0.85rem]
                            max-[1024px]:h-[8.5rem]
                            max-[1024px]:rounded-[4px]
                            
                            max-[768px]:text-[1rem]
                            max-[768px]:h-40
                            max-[768px]:px-3
                            max-[768px]:py-2
                            
                            max-[426px]:text-[1.05rem]' 
                        />
                    </div>

                    <button className='
                        bg-[#45FFCA] 
                        text-[#001C30] 
                        rounded-md 
                        py-[0.65rem] 
                        font-semibold 
                        text-[0.95rem] 
                        uppercase
                        
                        max-[1024px]:py-[0.55rem]
                        max-[1024px]:text-[0.85rem]
                        max-[1024px]:rounded-[4px]
                        
                        max-[768px]:text-[0.95rem]
                        max-[768px]:py-[0.7rem]'
                    >Send</button>
                </form>
            </div>
            
        </Element>
    )
}

export default ContactForm;
