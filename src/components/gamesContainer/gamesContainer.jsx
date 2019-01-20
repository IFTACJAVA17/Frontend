import React from 'react';
import './gamesContainer.scss';
import GameLibraryShow from '../gamelibraryComponent/gamelibrary.component';

const GamesContainerComponent = (props) => {
    return (
        <div className="games-container">
            <GameLibraryShow />
        </div>
    );
}

export default GamesContainerComponent;