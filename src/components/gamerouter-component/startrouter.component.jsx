import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameLibrary from '../gamelibraryComponent/gamelibrary.component';
import Featured from '../featuredComponent/featured.component';
import GamesContainerComponent from '../gamesContainer/gamesContainer';
import GameLayout from '../gamelayoutComponent/gameLayout.component';
import FeaturedComponent from '../featuredComponent/featured.component';
import StartComponent from './gamerouter.startcomponent';

const StartRouter = () => (
    <Router>
        <div>
            <Route path='/' component={StartComponent} />
        </div>
    </Router>
)

export default StartRouter;