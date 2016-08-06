import React from 'react';
import Home from '../containers/Home/Home';
import Profile from '../containers/Profile/Profile';


import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default (
    <Router history={ hashHistory }>
        <Route path="/" component={Home}>
            <IndexRoute component={Home}></IndexRoute>
        </Route>
        <Route path="profile" component={Profile}></Route>
    </Router>
);
