import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const titulo = React.createElement('h1',{id: 'titulo,classname: ''})

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();