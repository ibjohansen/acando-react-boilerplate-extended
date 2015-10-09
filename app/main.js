'use strict';

import '../public/styles/style.scss';
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from './pages/index';
import About from './pages/about';
import SimpleGetPage from './pages/simple-get';
import GoogleLoginPage from './pages/google-login';
import KnettFeedPage from './pages/knett-feed';
import KnettFeedTwoPage from './pages/knett-feed-take-two';

const routes = (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute components={{content:About}}/>
            <Route path="simpleget" components={{content:SimpleGetPage}}/>
            <Route path="googlelogin" components={{content:GoogleLoginPage}}/>
            <Route path="knettfeed" components={{content:KnettFeedPage}}/>
            <Route path="knettfeedtaketwo" components={{content:KnettFeedTwoPage}}/>
        </Route>
    </Router>
);

React.render(
    routes,
    document.body
);