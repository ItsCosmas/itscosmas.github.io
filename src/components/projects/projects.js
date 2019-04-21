import React from 'react';
import cnn from '../../assets/images/convnet.png';
import crud from '../../assets/images/CRUD.JPG'
import detectedPic from '../../assets/images/detected.JPG';

const projects = (props) => {
    return (
        <div className="projects">
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////PROJECT 1 //////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="row box-style">
                <div className="project-box__banner">
                    <img src={cnn} alt="convnet" />
                    <div className="project-box__banner-links">
                        <a href={`kaw`} className={`link link--inactive`}><i className="fas fa-desktop"></i><span>Live</span></a>
                        <a href={`https://github.com/ItsCosmas/Traffic-Sign-Classification`} target="_blank" rel="noopener noreferrer" className={`link`}><i className="fas fa-code-branch"></i><span>Source</span></a>
                    </div>
                </div>
                <div className="project-box__desc">
                    <h3>Traffic Sign Classification CNN</h3>
                    <p>
                        In this project, I built and trained a Convolutional Neural Network model using Keras to classify traffic based on
                        german traffic sign dataset and achieved a 98.4% accuracy. The project was a nice challenge to help catch the glimpse of CovNet's. A project that
                        presented quite a challenge to get the hang of everything and an exiting field in Deep Learning.
                    </p>
                </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////PROJECT 2 //////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="row box-style">
                <div className="project-box__banner">
                    <img src={crud} alt="convnet" />
                    <div className="project-box__banner-links">
                        <a href={`kaw`} className={`link link--inactive`}><i className="fas fa-desktop"></i><span>Live</span></a>
                        <a href={`https://github.com/ItsCosmas/PHP-CRUD-app`} className={`link`}><i className="fas fa-code-branch"></i><span>Source</span></a>
                    </div>
                </div>
                <div className="project-box__desc">
                    <h3>PHP CRUD(Create, Read, Update, Delete) App</h3>
                    <p>
                        This app leverages the full functionality of a crud application. The app comes bundled with sign in and sign up functionality,
                        creating and storing on db, reading from db, updating on db and deleting from the database. Written in PHP as a part of my simple
                        language hacks and works.
                    </p>
                </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////
            /////////////////////////PROJECT 3 //////////////////////////////////////////////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="row box-style">
                <div className="project-box__banner">
                    <img src={detectedPic} alt="convnet" />
                    <div className="project-box__banner-links">
                        <a href={`kaw`} className={`link link--inactive`}><i className="fas fa-desktop"></i><span>Live</span></a>
                        <a href={`https://github.com/ItsCosmas/face_detector`} className={`link`}><i className="fas fa-code-branch"></i><span>Source</span></a>
                    </div>
                </div>
                <div className="project-box__desc">
                    <h3>Open CV face Detetction</h3>
                    <p>
                        A simple code sinpet leveraging the use of pretrained Haar Cascades to identify features in images. In my case I experimented with
                        the Open CV Haar Cascade classifiers to detect faces in a photograph.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default projects;