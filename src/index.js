import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
//import and use Browser router on external App so every page in app can utilise
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
