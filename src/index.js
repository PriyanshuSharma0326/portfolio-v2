import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.js';
import { DashboardContextProvider } from './context/dashboard-context.js';
import { StyleContextProvider } from './context/style-context.js';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <DashboardContextProvider>
            <StyleContextProvider>
                <App />

                <Toaster position='top-center' />
            </StyleContextProvider>
        </DashboardContextProvider>
    </React.StrictMode>
);
