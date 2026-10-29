import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExternalRedirect from './components/ExternalRedirect';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orien" element={<ExternalRedirect to="https://speakwithorien.com/" />} />
          <Route path="/orien/privacy" element={<ExternalRedirect to="https://speakwithorien.com/privacy/" />} />
          <Route path="/orien/terms" element={<ExternalRedirect to="https://speakwithorien.com/terms/" />} />
          <Route path="/orien/support" element={<ExternalRedirect to="https://speakwithorien.com/support/" />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
