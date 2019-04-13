import React from 'react';

class SocialButtons extends React.Component {
    render() {

        return (
            <React.Fragment>
                <div className={'social__container'}>
                    <a href={`https://linkedin.com/in/cosmasgikunju/`} className={`action`} target={`_blank`}>
                        <i className="fab fa-linkedin-in"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href={`https://github.com/ItsCosmas`} className={`action`} target={`_blank`}>
                        <i className="fab fa-github"></i>
                        <span>Github</span>
                    </a>
                    <a href={`https://medium.com/@gikunjucosmas`} className={`action`} target={`_blank`}>
                        <i className="fab fa-medium-m"></i>
                        <span>Blog</span>
                    </a>
                    <a href={`#`} className={`action`} >
                        <i className="fas fa-at"></i>
                        <span>Email</span>
                    </a>
                    <a href={`#`} className={`action`} target={`_blank`}>
                        <i className="fas fa-newspaper"></i>
                        <span>Resume</span>
                    </a>
                </div>
            </React.Fragment>
        );

    }
}
export default SocialButtons;