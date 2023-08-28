"use client"
import  from '../components/LanguageSwitcher';
import {  } from '../contexts/LanguageContext';

const Home = () => {
    

    const content = {
        en: {
            welcome: 'Welcome to Next.js!'
        },
        fr: {
            welcome: 'Bienvenue à Next.js!'
        },
        es: {
            welcome: '¡Bienvenido a Next.js!'
        }
        // ... add other languages and translations as needed
    };

    return (
        <div>
            <h1>{}</h1>
            <LanguageSwitcher />
        </div>
    );
};

export default Home;
