import React from 'react';
import FeaturedComponent from "../featuredComponent/featured.component";
import GamesContainerComponent from '../gamesContainer/gamesContainer';

const StartComponent = (props) => {
    return (
        <div>
        <FeaturedComponent/>
        <GamesContainerComponent/>
        </div>
    );
}

export default StartComponent;