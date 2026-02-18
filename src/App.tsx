// CO-IN SYMPOSIA - COMPLETE PROJECT STRUCTURE GUIDE
// Due to VS Code web limitations, please create the following structure manually:

/*
FOLDER STRUCTURE:
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── ServiceCard.tsx
│   ├── ApproachSection.tsx
│   ├── Conferences.tsx
│   ├── ConferenceCard.tsx
│   ├── Professors.tsx
│   ├── NewsUpdates.tsx
│   ├── NewsCard.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── Service.tsx
├── data/
│   ├── content.ts
│   ├── services.ts
│   ├── conferences.ts
│   ├── professors.ts
│   └── news.ts
├── styles/
│   ├── Header.css
│   ├── Hero.css
│   ├── Services.css
│   ├── Footer.css
│   └── globals.css
├── App.tsx
├── App.css
└── main.tsx

NOTE: This project needs React Router. Install with:
npm install react-router-dom
*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';
import Reports from './pages/Reports';
import Contact from './pages/Contact';
import Conferences from './pages/Conferences';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/conferences" element={<Conferences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;