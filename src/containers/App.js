import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../components/header/header';
import Projects from '../components/projects/projects';
import About from '../components/about/aboutMe';
import Contact from '../components/contact/contact';
import '../styles/index.scss';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename='/'>
                <React.Fragment>
                    <div className="navbar">
                        <div className="navbar__logo-name">Cozy</div>

                        <nav className="navbar__items">

                            <ul className="navbar__items-links">
                                <li><Link to="/" className="navbar__items-link">Home</Link></li>
                                <li><Link to="/about" className="navbar__items-link">About Me</Link></li>
                                <li><Link to="/projects" className="navbar__items-link">Projects</Link></li>
                                <li><Link to="/contact" className="navbar__items-link">Contact</Link></li>
                            </ul>

                        </nav>
                    </div>
                    <Route exact path="/" component={Header} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </React.Fragment>
            </BrowserRouter>

        )
    }
}

export default App;