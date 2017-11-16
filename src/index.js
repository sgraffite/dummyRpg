import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppStore from './appStore';


let appStore = new AppStore();

ReactDOM.render(<App store={appStore} />, document.getElementById('root'));
registerServiceWorker();
