import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './i18n';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import EbayAccountManager from './components/EbayAccountManagement';
import CompetitorSearch from './components/CompetitorSearch';
import PricingRules from './components/PricingRules';
import LanguageToggle from './components/LanguageToggle';
import EbayAccountManagement from './components/EbayAccountManagement';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end">
              <LanguageToggle />
            </div>
          </nav>
          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ebay-setup" element={<EbayAccountManagement />} />
            <Route path="/competitors" element={<CompetitorSearch />} />
            <Route path="/pricing-rules" element={<PricingRules />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;