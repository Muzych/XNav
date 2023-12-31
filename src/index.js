import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme appearance='dark' accentColor='grass' grayColor="sand" radius="medium" scaling="100%">
      <App />
    </Theme>
  </React.StrictMode>
);
