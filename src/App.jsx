import './App.scss'
import {Header} from "./Compnents/Header/index.jsx";
import {Parallax} from "./Compnents/Parallax/index.jsx";
import {About} from "./Compnents/About/index.jsx";
import {SecondaryParallax} from "./Compnents/SecondaryParallax/index.jsx";
import {Services} from "./Compnents/Services/ index.jsx";
import {LocationMap} from "./Compnents/LocationMap/index.jsx";
import {ClientRecommend} from "./Compnents/ClientRecommend/index.jsx";
import {Contact} from "./Compnents/Contact/index.jsx";
import {Footer} from "./Compnents/Footer/index.jsx";

export const App = () => {
    return (
        <div className="app" id="home">
            <Header/>
            <Parallax/>
            <About/>
            <SecondaryParallax/>
            <Services/>
            <ClientRecommend/>
            <LocationMap/>
            <Contact/>
            <Footer/>
        </div>
    )
}
