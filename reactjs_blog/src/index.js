// singele comment
/* 
JS multiple comment
*/

// REACT
import React from "react";
import ReactDOM from "react-dom/client";

// EXTERNAL CSS (proje kendi stillerin)
import "./index.css";

// I18N INTERNATIONALIZATION
import "./internationalization/i18nlanguage";

// UTILS
import reportWebVitals from "./reportWebVitals";

// ROUTER
import { BrowserRouter } from "react-router-dom";

// REUSABILITY TOAST
import ResuabilityToast from "./reusability/ReusabilityToast";

// COMPONENTS
import RouterApp from "./routes/RouterApp";

// BOOTSTRAP CSS
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter> 
    <ResuabilityToast/>
    {/*<App /> */}
    {/*<Counter/>*/}
    <RouterApp/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
