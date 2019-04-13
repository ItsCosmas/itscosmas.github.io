import React from 'react';
import Typed from 'react-typed';

const typed = (props) => {
    return (
        <div>
            <h1 className="heading-primary">
                <Typed
                    strings={['Hi👋🏾, I\'m Cozy 👽']}
                    typeSpeed={20}
                    className="heading-primary--main"
                />
                <br />

                <span className="heading-primary--sub">
                    Full-Stack Dev | Science & Tech | Smooth Operator
                </span>

                {/* <Typed
                    strings={['I\'m a full-stack developer',
                        'I do full-stack JS',
                        'I do Python Backends']}
                    typeSpeed={100}
                    backSpeed={80}
                    className="heading-primary--sub"
                    loop >
                </Typed> */}
            </h1>

        </div>
    )
};

export default typed;
