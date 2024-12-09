// src/routes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Artists from './components/artists/artists';
import Releases from './components/releases/releases';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Events from './components/events/events';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/releases" element={<Releases />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
};

export default AppRoutes;