import './App.scss'
import {Header} from "./Components/Header";
import {Parallax} from "./Components/Parallax";
import {About} from "./Components/About/index.jsx";
import {LocationMap} from "./Components/LocationMap/index.jsx";
import {Contact} from "./Components/Contact/index.jsx";
import {Footer} from "./Components/Footer/index.jsx";
import {Services} from "./Components/Services/index.jsx";
import { ServicesArticles } from './Components/ServicesArticles/index.jsx';
import { FastContact } from './Components/FastContact/index.jsx';
import ArticleSlideShow from "./Components/ClientsLettersSlideShow/index.jsx";
import {useState} from "react";
import { motion, useScroll } from "framer-motion"

// import ReactGA from 'react-ga';

export const App = () => {
    const [isMenu, setIsMenu] = useState(false);
    const { scrollYProgress } = useScroll();


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
