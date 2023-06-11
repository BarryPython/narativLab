import React, {createContext, useState, useEffect} from 'react';
import UseLocalStorage from '../hook/UseLocalStorage';

const DarkModeContext = createContext();

function DarkModeProvider(props){
    const [darkMode, setDarkMode] = UseLocalStorage(true);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const body = document.querySelector('body');
        if(darkMode){
            body.classList.add('dark');
        }else{
            body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </>
    )
};

export {DarkModeContext, DarkModeProvider};