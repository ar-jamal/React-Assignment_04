import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from '@emotion/react';
// import { createTheme, ThemeProvider } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebRouter from './screen/conifg/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <WebRouter />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
