import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from '../client/store'
import App from '../client/components/App';

const root = createRoot(document.querySelector('#root'));
root.render(
    <Router>
      <App />
    </Router>
);