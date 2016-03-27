import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Route, Router, browserHistory } from 'react-router';


import App from './containers/app';
import TestComponent from './components/TestComponent';
import rootReducer from './reducers';
import CreateLinkModal from './components/CreateLinkModal';
import EditLink from './containers/EditLink';
import CreateLink from './containers/CreateLink';


const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(rootReducer)}>
  <Router history={browserHistory}>
  <Route path="/home" component={App}>
    <Route path="/home/new" component={CreateLink} />
    <Route path="/home/edit/:linkId" component={EditLink} />
  </Route>
  </Router>
  </Provider>
, document.getElementById('root'));
