import React from 'react';
import Typed from 'react-typed';

const header = (props) => {
    return (
        <React.Fragment>
            <section className="header">
                <div className="navbar">
                    <div className="navbar__logo-name">Cozy</div>

                    <nav className="navbar__items">

                        <div>Skills</div>
                        <div>About</div>
                        <div>Projects</div>
                        <div>Contact</div>

                    </nav>
                </div>

                <div className="header__container">
                    <div className="header__name-tag">
                        <h1 class="heading-primary">
                            <span class="heading-primary--main">Hi, I'm Cozy</span>
                            <span class="heading-primary--sub">I'M A FULLSTACK DEVELOPER</span>
                        </h1>
                    </div>

                    <Typed
                        strings={['Hi, I\'m Cozy']}
                        typeSpeed={20}
                        class="heading-primary--main"
                    />
                    <br />

                    <Typed
                        strings={['I\'m a full-stack developer',
                            'I do full-stack JS',
                            'I do Python Backends']}
                        typeSpeed={40}
                        backSpeed={50}
                        class="heading-primary--sub"
                        loop >
                    </Typed>
                    <div className="header__actions">
                        {/* <ContactButtons /> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default header;