import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { DashboardContextProvider } from './context/dashboard-context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <DashboardContextProvider>
            <App />
        </DashboardContextProvider>
    </React.StrictMode>
);
