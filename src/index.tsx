import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import catsReducer from './store/catState';
import catSaga from './store/catSaga';

const saga = createSagaMiddleWare();

const store = configureStore({
  reducer: {
    cats: catsReducer
  },
  middleware: [saga]
})
saga.run(catSaga);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
