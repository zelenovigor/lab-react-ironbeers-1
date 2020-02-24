import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// new import
import {BrowserRouter} from 'react-router-dom'

// transforming react components into DOM (Document Object Model) nodes that browser can understand and display on the screen

ReactDOM.render (
<BrowserRouter>
<App />
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
