import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameLayout from '../gamelayoutComponent/gameLayout.component';
import StartComponent from './gamerouter.startcomponent';

const GameRouter = () => (
    <Router>
        <div>
        <Route path='/KungensAllaHattar' component={GameLayout}/>
        <Route path='/' exact component={StartComponent}/>
        </div>
    </Router>
    
    
)

export default GameRouter;