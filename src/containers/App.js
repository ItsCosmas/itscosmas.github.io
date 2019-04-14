import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from '../components/header/header';
import '../styles/index.scss';

class Page extends React.Component {
    render() {
        return (
            <HashRouter basename="/">
                <React.Fragment>
                    <div className="navbar">
                        <div className="navbar__logo-name">Cozy</div>

                        <nav className="navbar__items">

                            <div><Link to="/" className="navbar__items-link">Home</Link></div>
                            <div><Link to="/stack" className="navbar__items-link">Technologies</Link></div>
                            <div><Link to="/projects" className="navbar__items-link">Projects</Link></div>
                            <div><Link to="/contact" className="navbar__items-link">Contact</Link></div>


                        </nav>
                    </div>
                    <Route exact path="/" component={Header} />
                    <Route path="/stack" component={Technologies} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </React.Fragment>
            </HashRouter>

        )
    }
}
const Technologies = () => <div><h2>My Tech Stack</h2></div>
const Projects = () => <div><h2>My Projects</h2></div>
const Contact = () => <div><h2>My Contact Form</h2></div>

export default Page;