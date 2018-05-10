import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appState from './store/appState';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store = {appState} />, document.getElementById('root'));
registerServiceWorker();
