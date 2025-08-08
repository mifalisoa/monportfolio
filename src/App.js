import React from 'react';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <APropos />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;