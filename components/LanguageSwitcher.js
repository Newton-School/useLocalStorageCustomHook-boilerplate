"use client"
import {  } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    

    return (
        <select value={language} >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
        </select>
    );
};

export default LanguageSwitcher;
