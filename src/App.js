import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './assets/styles/app.scss';
import Routes from './Routes';
import reduxStore from './store';


const App = () => (
  <Provider store={reduxStore}>
    <div className="App">
      <ToastContainer id="forToast" />
      <Routes />
    </div>
  </Provider>
);

export default App;
