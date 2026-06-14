import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Orien from './pages/Orien';
import OrienPrivacy from './pages/OrienPrivacy';
import OrienTerms from './pages/OrienTerms';
import OrienSupport from './pages/OrienSupport';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orien" element={<Orien />} />
          <Route path="/orien/privacy" element={<OrienPrivacy />} />
          <Route path="/orien/terms" element={<OrienTerms />} />
          <Route path="/orien/support" element={<OrienSupport />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
