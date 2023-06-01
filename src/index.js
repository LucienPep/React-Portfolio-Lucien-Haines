import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter'
//import and use Browser router on external App so every page in app can utilise
ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><HashRouter><App /></HashRouter></BrowserRouter>, document.getElementById('root'));
