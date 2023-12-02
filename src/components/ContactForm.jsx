import React, { useRef, useState } from 'react';
import { Element } from 'react-scroll';
import FormInput from './FormInput';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { validateEmail } from '../utils/utils';

function ContactForm() {
    const defaultFormFields = {
        name:'',
        email: '',
        message: ''
    };

    const defaultFormErrors = {
        nameError:'',
        emailError: '',
        messageError: ''
    };

    const [formInputs, setFormInputs] = useState(defaultFormFields);
    const [formErrors, setFormErrors] = useState(defaultFormErrors);

    const form = useRef();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormInputs({...formInputs, [name]: value});
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if(!formInputs.name.trim()) {
            validationErrors.nameError = 'Name is required';
        }

        if(!formInputs.email.trim()) {
            validationErrors.emailError = 'Email is required';
        }
        else if(!validateEmail(formInputs.email.trim())) {
            validationErrors.emailError = 'Email is badly formatted';
        }

        if(!formInputs.message.trim()) {
            validationErrors.messageError = 'Message is required';
        }

        if(Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
            return;
        }

        if(Object.keys(validationErrors).length === 0) {
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                toast('Message Sent!',
                    {
                        icon: '📩',
                        style: {
                            borderRadius: '10px',
                            background: '#001D56',
                            color: '#45FFCA',
                        },
                    }
                );
                setFormInputs(defaultFormFields);
                setFormErrors(defaultFormErrors);
            }, (error) => {
                toast.error('Error Sending Message!',
                    {
                        style: {
                            borderRadius: '10px',
                            background: '#001D56',
                            color: '#45FFCA',
                        },
                    }
                );
            });
        }
    }

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
                
                max-[1440px]:h-[95.5%]
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
                    select-none
                    
                    max-[1024px]:text-[1.75rem]
                    
                    max-[768px]:text-[2.25rem]'
                >Contact Me</h1>

                <form ref={form} id='message-form' onSubmit={submitHandler} className='
                    h-full 
                    flex 
                    flex-col 
                    justify-between
                    
                    max-[768px]:gap-[1.3rem]'
                >
                    <FormInput 
                        labelText='Name' 
                        isInputType={true} 
                        errorText={formErrors.nameError} 
                        inputOptions={{
                            type: 'text',
                            id: 'name',
                            name: 'name',
                            onChange: changeHandler,
                            value: formInputs.name,
                            placeholder: 'Your Name'
                        }}
                    />

                    <FormInput 
                        labelText='Email' 
                        isInputType={true} 
                        errorText={formErrors.emailError} 
                        inputOptions={{
                            type: 'text',
                            id: 'email',
                            name: 'email',
                            onChange: changeHandler,
                            value: formInputs.email,
                            placeholder: 'Your Email'
                        }}
                    />

                    <FormInput 
                        labelText='Your Message' 
                        isInputType={false} 
                        errorText={formErrors.messageError} 
                        inputOptions={{
                            name: 'message',
                            id: 'message',
                            onChange: changeHandler,
                            value: formInputs.message,
                            placeholder: 'Type your message here'
                        }}
                    />

                    <button type='submit' form='message-form' className='
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
