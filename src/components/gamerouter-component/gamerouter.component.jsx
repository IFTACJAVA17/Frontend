import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameLibrary from '../gamelibraryComponent/gamelibrary.component';
import Featured from '../featuredComponent/featured.component';
import GamesContainerComponent from '../gamesContainer/gamesContainer';
import GameLayout from '../gamelayoutComponent/gameLayout.component';

const GameRouter = () => (
    <Router>
        <div>
            
            <Route path='/' component={GamesContainerComponent} />
            <Route path='/GameOverlay' component={GameLayout}/>
        </div>
    </Router>
)

export default GameRouter;