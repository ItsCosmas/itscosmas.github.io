import React from 'react';

const navbar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar__logo-name">Cozy</div>

            <nav className="navbar__items">

                <div>Technologies</div>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>

            </nav>
        </div>
    )
};
export default navbar;