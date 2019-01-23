import React from 'react';
import './mockComponent.scss';

const MockComponent = (props) => {
    return (
        <div className="mocktainer">
            <div className="header">
                <h5>{props.header}</h5>
            </div>
        </div>
    );
}

export default MockComponent;