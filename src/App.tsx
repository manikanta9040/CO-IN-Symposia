import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Admin from './pages/Admin';
import Conferences from './pages/Conferences';
import Contact from './pages/Contact';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Privacy from './pages/Privacy';
import Reports from './pages/Reports';
import Services from './pages/Services';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="/news" element={<News />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
