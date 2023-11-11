import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardContextProvider = ({ children }) => {
    const [selectedSection, setSelectedSection] = useState('Skills');

    const contextValue = {
        selectedSection,
        setSelectedSection
    };

    return (
        <DashboardContext.Provider value={ contextValue }>
            { children }
        </DashboardContext.Provider>
    )
}
