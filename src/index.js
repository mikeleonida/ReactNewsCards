import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import CardApp from './components/CardApp/CardApp';
import NewsApp from './components/NewsApp/NewsApp'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <NewsApp />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Header title="My React Application" />
//     <Main />
//     <Footer title="ReactJS Footer" copyright="2021, All rights reserved"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
