import React, {
  Suspense,
  useEffect,
  useState,
  useCallback,
  useContext,
} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Modal from './components/Modal';

import './index.css';
import './styles/scss/hyeon.scss';

import routes from '~react-pages';

// eslint-disable-next-line no-console
console.log(routes);

export const ModalContext = React.createContext(null);

function App() {
  const [helpModal, setHelpModal] = useState(false);
  const openModal = useCallback((e) => {
    if (e.keyCode === 191) {
      setHelpModal(true);
    }
  });

  useEffect(() => {
    window.addEventListener('keydown', openModal);
    return () => {
      window.removeEventListener('keydown', openModal);
    };
  }, [openModal]);

  const [type1, setType1] = useState(false);
  const openType1 = () => {
    setType1(true);
    setHelpModal(false);
  };
  const closeType1 = () => setType1(false);

  useEffect(() => {}, [type1]);

  return (
    <ModalContext.Provider value={{ type1, openType1, closeType1 }}>
      <Suspense fallback={<p>Loading...</p>}>
        {useRoutes(routes)}
        <Modal isOpen={helpModal} onClose={() => setHelpModal(false)}>
          <div className="flex gap-x-[8px]">
            <button
              className="inline-block py-[3px] px-[10px] bg-teal-500 rounded-full mr-[8px] text-sm font-semibold text-white"
              onClick={openType1}
            >
              Modal 1
            </button>
          </div>
        </Modal>
      </Suspense>
    </ModalContext.Provider>
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
