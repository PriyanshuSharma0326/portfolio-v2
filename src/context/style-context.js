import { createContext, useState } from "react";

export const StyleContext = createContext();

export const StyleContextProvider = ({ children }) => {
    const [fixedSkillTitle, setFixedSkillTitle] = useState(false);
    const [fixedProjectsTitle, setFixedProjectsTitle] = useState(false);
    const [title, setTitle] = useState('Projects');

    const contextValue = {
        title, setTitle, fixedSkillTitle, setFixedSkillTitle, fixedProjectsTitle, setFixedProjectsTitle
    };

    return (
        <StyleContext.Provider value={ contextValue }>
            { children }
        </StyleContext.Provider>
    )
}
