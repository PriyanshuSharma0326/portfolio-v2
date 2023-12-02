import React from 'react';
import { Tilt } from 'react-tilt';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    200,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.02,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          2000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function SkillCard({ icon, title }) {
    return (
        <div className='
            flex 
            flex-col 
            gap-2 
            items-center
            font-hedvig
            select-none
            
            max-[1024px]:gap-1
            
            max-[768px]:gap-2'
        >
            <Tilt options={defaultOptions} className='
                skill-card 
                custom-gradient
                border-3
                border-[#45FFCA55] 
                text-[#001b2e]
                rounded-3xl
                w-[6.25rem]
                h-[6.25rem]
                
                self-center
                justify-self-center
                
                max-[1024px]:w-[5rem] 
                max-[1024px]:h-[5rem]
                
                max-[768px]:w-[6.25rem]
                max-[768px]:h-[6.25rem]
                
                max-[426px]:w-[5.75rem]
                max-[426px]:h-[5.75rem]'
            >
                <div className="
                    w-full 
                    h-full 
                    flex 
                    items-center 
                    justify-center"
                >
                    <img src={require(`../assets/${icon}`)} alt={title} className='
                        w-[48%]
                        
                        max-[1024px]:w-[42%]
                        
                        max-[768px]:w-[48%]'
                    />
                </div>
            </Tilt>

            <span className='
                text-[#45FFCA] 
                text-[0.85rem]
                
                max-[1024px]:text-[0.75rem]
                
                max-[768px]:text-[0.85rem]
                
                max-[426px]:text-[0.9rem]'
            >{title}</span>
        </div>
    )
}

export default SkillCard;
