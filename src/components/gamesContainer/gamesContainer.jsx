import React from 'react';
import './gamesContainer.scss';
import GameLibrary from '../gamelibraryComponent/gamelibrary.component';


const center = {
    textAlign: 'center',
    lineHeight: '25rem'
}

const GamesContainerComponent = (props) => {
    return (
        <div className="games-container">
        <GameLibrary/>
        </div>
    );
}

export default GamesContainerComponent;