import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';

//external css
import './index.css';

//external
import reportWebVitals from './reportWebVitals';
import ReusabilityToast from 'reusability/ReusabilityToast';
import Counter from './app/counter';

//Router
import RouterApp from './RouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter> 
    <ReusabilityToast/>
    {/*<App /> */}
    {/*<Counter/>*/}
    <RouterApp/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
