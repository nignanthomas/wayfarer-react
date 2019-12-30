import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import store from './redux/store';
import './styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('app'));
