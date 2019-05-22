import React from 'react';
import cozy from '../../assets/images/cozy.JPG'

import SkillBar from '../skillProgress/skillProgress';

const about = (props) => {

    return (

        <div className="about">
            <div className="row u-margin-bottom-big">
                <div className="col-1-of-2">
                    <div className="composition">
                        {/* <img src={cozy} className="composition__photo" alt="Cozy Photograph" /> */}
                        <div className="composition-photo">
                            <figure className="composition-photo__shape">
                                <img src={cozy} alt="Cosmas Gikunju" className="composition-photo__img" />
                                <figcaption className="composition-photo__caption">Cosmas</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2 about__desc">
                    <div>
                        <h3 className="heading-tertiary u-margin-bottom-small">Who am I?</h3>
                        <p className="paragraph">
                            I'm a Self Taught Developer.
                            My Interests Revolve around Web Apps and Machine Learning. I enjoy Learning and
                            playing around with various technologies. A big advocate for Robust
                            and Great Web experiences by building Modern Web Applications with the
                            best and cutting edge technologies, integrating Artificial Intelligence and Machine
                            Learning in our every day products, analyzing and making ground altering changes from data and facts.
                            Constantly learning and in course to break through from Academia to Field
                            to take part in the Universal transformation through technology.
                        </p>
                    </div>
                </div>
            </div>
            <div className="skills__section">
                <div className="row">
                    <div className="col-1-of-4">
                        <h3 className="u-margin-bottom-small">Programming Languages</h3>
                        <SkillBar lan="Python" tag="py" />
                        <SkillBar lan="Javascript/ES6" tag="js" />
                        <SkillBar lan="Java" tag="java" />
                        <SkillBar lan="PHP" tag="php" />
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////// */}
                    <div className="col-1-of-4">
                        <h3 className="u-margin-bottom-small">Web Stack & Frameworks</h3>
                        <SkillBar lan="Django" tag="django" />
                        <SkillBar lan="React" tag="react" />
                        <SkillBar lan="Node JS" tag="node" />
                        <SkillBar lan="Flask" tag="flask" />
                        <SkillBar lan="CSS/Sass" tag="css" />
                    </div>
                    {/* //////////////////////////////////////////////////////////////////////// */}
                    <div className="col-1-of-4">
                        <h3 className="u-margin-bottom-small">Machine Learning</h3>
                        <SkillBar lan="Tensorflow" tag="tf" />
                        <SkillBar lan="Keras" tag="keras" />
                        <SkillBar lan="Pytorch" tag="torch" />
                    </div>
                    {/* /////////////////////////////////////////////////////////////////////////// */}
                    <div className="col-1-of-4">
                        <h3 className="u-margin-bottom-small">Tools/Other</h3>
                        <SkillBar lan="Git/Github/Bitbucket" tag="git" />
                        <SkillBar lan="Heroku" tag="heroku" />
                        <SkillBar lan="SQL/MySQL/Postgres/Sqlite" tag="sql" />
                        <SkillBar lan="NoSQL/Mongo/Firebase" tag="noSql" />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default about;