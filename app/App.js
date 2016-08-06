import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory  } from 'react-router';
import routes from './config/routes';

// first argument is the component that we need to render
// second argument is where to render the component
ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('app')
);
