import React from 'react';
import './gamesContainer.scss';
import gameLibraryShow from '../gamelibraryComponent/gamelibrary.component';


const center = {
    textAlign: 'center',
    lineHeight: '25rem'
}

const GamesContainerComponent = (props) => {
    return (
        <div className="games-container">
            <gameLibraryShow></gameLibraryShow>
        </div>
    );
}

export default GamesContainerComponent;