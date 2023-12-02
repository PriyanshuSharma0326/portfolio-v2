import React from 'react';

function FormInput({ labelText, inputOptions, isInputType, errorText }) {
    return (
        <div className='
            form-group
            flex 
            flex-col 
            gap-2'
        >
            <div className="label-group flex justify-between items-center">
                <label 
                    htmlFor={inputOptions.id} 
                    className='
                    text-[#FAFAFA]  
                    text-[0.95rem] 
                    w-fit
                    font-hedvig
                    select-none
                                
                    max-[1024px]:text-[0.8rem]
                                
                    max-[768px]:text-[0.95rem]
                                
                    max-[426px]:text-[1.05rem]'
                >{labelText}</label>

                <p className="
                    text-[0.85rem] 
                    text-red-400
                    font-hedvig
                    select-none
                    
                    max-[426px]:text-[0.95rem]"
                >{errorText}</p>
            </div>

            {isInputType ? 
                <input 
                    {...inputOptions} className='
                    px-3 
                    py-2 
                    outline-none 
                    rounded-md 
                    bg-[#FAFAFA1A] 
                    text-[#FAFAFA]
                    font-hedvig
                    select-none
                                
                    max-[1024px]:px-2 
                    max-[1024px]:py-[0.4rem]
                    max-[1024px]:text-[0.85rem]
                    max-[1024px]:rounded-[4px]
                                
                    max-[768px]:text-[1rem]
                    max-[768px]:px-3
                    max-[768px]:py-2
                                
                    max-[426px]:text-[1.05rem]'
                /> : 
                <textarea {...inputOptions} className='
                    no-scrollbar 
                    px-3 
                    py-2 
                    outline-none 
                    rounded-md 
                    bg-[#FAFAFA1A] 
                    text-[#FAFAFA] 
                    h-48 
                    resize-none
                    font-hedvig
                    select-none
                            
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
            }

            {/* {errorText && <p className='error-text'>{errorText}</p>} */}
        </div>
    );
}

export default FormInput;