import React from 'react';
import { Element } from 'react-scroll';

function ContactForm() {
    return (
        <Element className='h-full w-full border-2 border-[#FAFAFA78] rounded-md px-8 py-6 flex flex-col gap-6 bg-[#001C30]' name='Contact' id='Contact'>
            <h1 className='text-[#FAFAFA] uppercase font-bold text-[2.75rem]'>Contact Me</h1>

            <form action="" className='h-full flex flex-col justify-between'>
                <div className="input-group flex flex-col gap-2">
                    <label className='text-[#FAFAFA] font-semibold text-[0.95rem]' htmlFor="name">Name</label>
                    <input placeholder='Your Name' className='px-3 py-2 outline-none border-2 border-[#FAFAFA9A] rounded-md bg-[#FAFAFA22] text-[#FAFAFA]' id='name' type="text" />
                </div>

                <div className="input-group flex flex-col gap-2">
                    <label className='text-[#FAFAFA] font-semibold text-[0.95rem]' htmlFor="email">Email</label>
                    <input placeholder='Your Email' className='px-3 py-2 outline-none border-2 border-[#FAFAFA9A] rounded-md bg-[#FAFAFA22] text-[#FAFAFA]' id='email' type="email" />
                </div>

                <div className="input-group flex flex-col gap-2">
                    <label className='text-[#FAFAFA] font-semibold text-[0.95rem]' htmlFor="email">Your Message</label>
                    <textarea placeholder='Type your message here' className='no-scrollbar px-3 py-2 outline-none border-2 border-[#FAFAFA9A] rounded-md bg-[#FAFAFA22] text-[#FAFAFA] h-48 resize-none' name="" id="message" cols="30" rows="10" />
                </div>

                <button className='bg-[#45FFCA] text-[#001C30] rounded-md px-[1.25rem] py-[0.65rem] font-semibold text-[0.95rem] uppercase'>Send</button>
            </form>
        </Element>
    )
}

export default ContactForm;
