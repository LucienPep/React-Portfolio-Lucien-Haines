import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import and use Browser router on external App so every page in app can utilise
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
