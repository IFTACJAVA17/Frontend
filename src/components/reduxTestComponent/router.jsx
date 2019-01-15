import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './start';
import LoggedIn from './loggedin';
import LoggedIn2 from './loggedin2';
import requireAuth from './requireAuth';

const AppRouter = () => (
    <Router>
        <div>
            <Route path='/' exact component={Start} />
            <Route path='/loggedin' component={requireAuth(LoggedIn)} />
            <Route path='/loggedin2' component={requireAuth(LoggedIn2)} />
        </div>
    </Router>
)

export default AppRouter;