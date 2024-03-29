import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CustomToaster from './components/atoms/CustomToaster/CustomToaster';
import './index.css';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <CustomToaster />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
