// App.js
import React from 'react';
import './styles/formulario.css';
import Routes from './components/Routes';
import Footer from './components/footer';
import Header from './components/Header';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
