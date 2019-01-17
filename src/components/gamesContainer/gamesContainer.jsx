import React from 'react';
import './gamesContainer.scss';

const center = {
    textAlign: 'center',
    lineHeight: '25rem'
}

const GamesContainerComponent = (props) => {
    return (
        <div className="games-container">
            <h4 style={center}>{props.text}</h4>
        </div>
    );
}

export default GamesContainerComponent;