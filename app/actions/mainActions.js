'use strict';

import Reflux from 'reflux';

const actions = {
    GetUserName: Reflux.createAction('GetUserName'),
    GetKnettFeedWithCookie: Reflux.createAction('GetKnettFeedWithCookie'),
    GetKnettFeedWithBasicAuth: Reflux.createAction('GetKnettFeedWithBasicAuth')
};

export default actions;
