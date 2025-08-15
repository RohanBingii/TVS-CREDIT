import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { CallManagement } from './pages/CallManagement';
import { CustomerManagement } from './pages/CustomerManagement';
import { PaymentProcessing } from './pages/PaymentProcessing';
import { Analytics } from './pages/Analytics';
import { Compliance } from './pages/Compliance';
import { Settings } from './pages/Settings';
import { VoiceBotProvider } from './contexts/VoiceBotContext';
import './index.css';

function App() {
  return (
    <VoiceBotProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calls" element={<CallManagement />} />
            <Route path="/customers" element={<CustomerManagement />} />
            <Route path="/payments" element={<PaymentProcessing />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </VoiceBotProvider>
  );
}

export default App;