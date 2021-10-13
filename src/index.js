import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import our state from redux store
import {createStore} from 'redux';
import allReducers from './store/reducers';
import { Provider } from 'react-redux';

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

