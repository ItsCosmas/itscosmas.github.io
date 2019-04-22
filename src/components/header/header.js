import React from 'react';
import Typed from '../typedComponent/typedComponent';
import Social from '../socialButtons/socialButtons';

const header = (props) => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="header__intro-box">
                    <Typed />
                    <Social />
                </div>
            </div>
        </React.Fragment>
    )
};

export default header;