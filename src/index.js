import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Accommodate from './components/study/Accommodate';
import ProfileCard from './components/study/ProfileCard';
import DarkOrLight from './components/study/DarkOrLight';
import Blocks from './components/study/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Accommodate /> */}
    {/* <ProfileCard /> */}
    {/* <DarkOrLight/> */}
    <Blocks/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
