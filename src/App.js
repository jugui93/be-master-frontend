import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';
import Index from './pages/Index'
import Repos from './pages/Repos';
import Function from './pages/Function';
import Logic from './pages/Logic';
import Database from './pages/Database';
import Architecture from './pages/Architecture';
import Policy from './pages/Policy';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Index />} exact />
          <Route path="/repos" element={<Repos />} exact />
          <Route path="/function" element={<Function />} exact />
          <Route path="/logic" element={<Logic />} exact />
          <Route path="/database" element={<Database />} exact />
          <Route path="/architecture" element={<Architecture />} exact />
          <Route path="/policy" element={<Policy />} exact />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
