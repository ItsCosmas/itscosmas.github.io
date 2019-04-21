import React from 'react';

const skillProgress = (props) => {
    return (
        <div>
            <p>{props.lan}</p>
            <div className="progress progress-moved">
                <div className={props.tag}>
                    <div className="progress-bar">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default skillProgress;