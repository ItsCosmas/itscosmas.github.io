import React from 'react';
import Typed from '../typedComponent/typedComponent';
import Social from '../socialButtons/socialButtons';

const header = (props) => {
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar__logo-name">Cozy</div>

                <nav className="navbar__items">

                    <div>Skills</div>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>

                </nav>
            </div>

            <div className="header">
                <Typed />
                <Social />

                <div className="header__actions">
                    {/* <ContactButtons /> */}
                </div>
            </div>
        </React.Fragment>
    )
};

export default header;