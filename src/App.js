import React from "react";
import Main from "./components/Main";
import AnimatedCursor from "react-animated-cursor"

export default function App() {
    return (
        <>
            <Main />

            <AnimatedCursor 
                color='69, 255, 202' 
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link',
                    'img',
                ]}
            />
        </>
    );
}
