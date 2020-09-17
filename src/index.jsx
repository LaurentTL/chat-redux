// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from '../reducers/messages_reducer.js';
import selectedChannelreducer from '../reducers/selected_channel_reducer.js';

// State and reducers
const identityReducer = (state = null) => state;

const initialState = {
  messages: [],
  channels: ['general', 'Paris', 'react', 'RubyOnRails'],
  selectedChannel: 'general',
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const reducers = combineReducers({
  currentUser: identityReducer,
  messages: messagesReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelreducer

});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
