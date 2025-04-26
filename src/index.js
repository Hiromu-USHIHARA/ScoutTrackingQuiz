import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  colors: {
    blue: ['#E7F5FF', '#D0EBFF', '#A5D8FF', '#74C0FC', '#4DABF7', '#339AF0', '#228BE6', '#1C7ED6', '#1971C2', '#1864AB'],
    green: ['#EBFBEE', '#D3F9D8', '#B2F2BB', '#8CE99A', '#69DB7C', '#51CF66', '#40C057', '#37B24D', '#2F9E44', '#2B8A3E'],
    red: ['#FFF5F5', '#FFE3E3', '#FFC9C9', '#FFA8A8', '#FF8787', '#FF6B6B', '#FA5252', '#F03E3E', '#E03131', '#C92A2A'],
    gray: ['#F8F9FA', '#F1F3F5', '#E9ECEF', '#DEE2E6', '#CED4DA', '#ADB5BD', '#868E96', '#495057', '#343A40', '#212529'],
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
