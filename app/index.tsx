import React from 'react';
import { createRoot } from 'react-dom/client';

import './i18n';
import App from './App';

import './index.css';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
