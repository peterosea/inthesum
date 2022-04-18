import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Modals from './components/Modal/Modals';

import './index.css';
import './styles/scss/hyeon.scss';

import routes from '~react-pages';

// eslint-disable-next-line no-console
console.log(routes);

export const ModalContext = React.createContext(null);

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
      <Modals />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
