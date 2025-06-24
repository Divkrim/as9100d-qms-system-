import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Audits from './pages/Audits';
import Training from './pages/Training';
import NonConformance from './pages/NonConformance';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/audits" element={<Audits />} />
          <Route path="/training" element={<Training />} />
          <Route path="/non-conformance" element={<NonConformance />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;