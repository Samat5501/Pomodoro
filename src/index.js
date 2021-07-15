import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { rootReducer } from './store/reducers/reducers';
// import { createStore } from 'redux';
import store from './store/store'
import { Provider } from 'react-redux';


// const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

