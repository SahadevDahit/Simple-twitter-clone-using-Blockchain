import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* Importing the reportWebVitals function from the reportWebVitals.js file. */
import reportWebVitals from './reportWebVitals';

/* Rendering the App component to the root element in the index.html file. */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
