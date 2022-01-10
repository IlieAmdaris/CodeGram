import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
export const isDevelopmentEnvironment = () => process.env.NODE_ENV === 'development';

declare global {
  interface Window {
    _env_: {
      apiRoot: string;
      instance: string;
      domain: string;
      clientId: string;
      signUpSignInPolicyId: string;
      scope: string;
    };
  }
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_ROOT: string;
      REACT_APP_SIGN_IN_SIGN_UP_POLICY_ID: string;
      REACT_APP_CLIENT_ID: string;
      REACT_APP_DOMAIN: string;
      REACT_APP_INSTANCE: string;
      REACT_APP_SCOPE: string;
    }
  }
}

const loadApp = async () => {
  if (isDevelopmentEnvironment()) {
    window._env_ = {
      apiRoot: process.env.REACT_APP_API_ROOT,
      instance: process.env.REACT_APP_INSTANCE,
      domain: process.env.REACT_APP_DOMAIN,
      clientId: process.env.REACT_APP_CLIENT_ID,
      signUpSignInPolicyId: process.env.REACT_APP_SIGN_IN_SIGN_UP_POLICY_ID,
      scope: process.env.REACT_APP_SCOPE,
    };
  } else {
    const response = await fetch('/settings/client');
    const data = await response.json();
    window._env_ = data;
  }

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );

};

loadApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();