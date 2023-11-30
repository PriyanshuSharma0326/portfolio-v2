import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import { StyleContextProvider } from './context/style-context.js';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <StyleContextProvider>
            <App />

            <Toaster position='top-center' />
        </StyleContextProvider>
    </React.StrictMode>
);
