import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from '../components/header/header';
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
                                <li><Link to="/stack" className="navbar__items-link">Technologies</Link></li>
                                <li><Link to="/projects" className="navbar__items-link">Projects</Link></li>
                                <li><Link to="/contact" className="navbar__items-link">Contact</Link></li>
                            </ul>

                        </nav>
                    </div>
                    <Route exact path="/" component={Header} />
                    <Route path="/stack" component={Technologies} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </React.Fragment>
            </BrowserRouter>

        )
    }
}
const Technologies = () => <div><h2>My Tech Stack</h2></div>
const Projects = () => <div><h2>My Projects</h2></div>
const Contact = () => <div><h2>My Contact Form</h2></div>

export default App;