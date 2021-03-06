import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//Allow component refresh without refresihg the browser.
if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
