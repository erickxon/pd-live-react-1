import React from 'react';
import ReactDOM from 'react-dom';

import {
  Provider,
} from 'react-redux';
import {
  PersistGate,
} from 'redux-persist/integration/react';
import {
  store, persistor,
} from 'redux/store';

import App from 'App';
import reportWebVitals from 'reportWebVitals';

import 'index.scss';
import 'react-datepicker/dist/react-datepicker.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
