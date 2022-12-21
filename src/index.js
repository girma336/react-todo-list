import React from 'react';
import ReactDOM from 'react-dom/client';
import './functionBased/App.css';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
