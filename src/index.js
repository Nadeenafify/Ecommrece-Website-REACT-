import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {Store} from "./rtk/Store"
import { MyProvider } from './ContextAPI/ContextAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   

     <Provider store={Store}>
        <MyProvider> 
             <App />
          </MyProvider>  
      
    </Provider>
 
);



