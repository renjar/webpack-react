import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from './pages/home/home';
import NotFound from './pages/not-found/not-found';

ReactDOM.render((
    <Router
        history={hashHistory}
        // history={browserHistory}
    >
        <Route path="/" component={Home}>
            {/*<IndexRoute component={Home} />*/}
            <Route path="home" component={Home} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
), document.getElementById('container'));
