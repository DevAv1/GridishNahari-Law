import {useEffect} from 'react';
import './App.scss'
import {Header} from "./Components/Header";
import {Parallax} from "./Components/Parallax";
import {About} from "./Components/About/index.jsx";
import {LocationMap} from "./Components/LocationMap/index.jsx";
import {Contact} from "./Components/Contact/index.jsx";
import {Footer} from "./Components/Footer/index.jsx";
import {Services} from "./Components/Services/index.jsx";
import { ServicesArticles } from './Components/ServicesArticles/index.jsx';
import ArticleSlideShow from "./Components/ClientsLettersSlideShow/index.jsx";
import {useState} from "react";
import { motion, useScroll } from "framer-motion"
import ReactGA from 'react-ga';

export const App = () => {
    const [isMenu, setIsMenu] = useState(false);
    const { scrollYProgress } = useScroll();
    const GA_TRACKER_KEY = import.meta.env.VITE_GA_KEY;

    const initGA = () => {
        ReactGA.initialize(GA_TRACKER_KEY);
    };

    const logPageView = () => {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    };
  
    useEffect(() => {
        initGA();
        logPageView();
    }, []);

    return (
        <div className={`app ${isMenu && 'app-no-scroll'}`} id="home">
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}/>
            <Header onMenuOpen={() => setIsMenu(!isMenu)}/>
            <Parallax/>
            <About/>
            <Services/>
            <ServicesArticles/>
            <ArticleSlideShow/>
            <Contact/>
            <LocationMap/>
            <Footer/>
        </div>
    )
}
