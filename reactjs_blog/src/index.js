import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReusabilityToast from 'reusability/ReusabilityToast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter> 
    <ReusabilityToast/>
    {/*<App /> */}
    {/*<Counter/>*/}
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
