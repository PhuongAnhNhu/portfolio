import React from 'react';
import './App.scss';
import { Navbar } from './components';
import { Footer, Header, Skills, Testimonial, Work } from './container';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills></Skills>
      <Work></Work>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
