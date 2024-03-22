
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Wedo from './pages/Wedo';
import NoPage from './components/NoPage';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Donate from './pages/Donate';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Event from './pages/Event';

export default function App() {
  return (
    <div className='max-w-[1920px] my-0 mx-auto flex flex-col items-center'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="whatWedo" element={<Wedo />} />
          <Route path="media" element={<Media />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="event" element={<Event />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
