// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses.jsx';
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Blogpost from './pages/Blogpost.jsx';


function App() {
  return (
    <Router>Pushkiller devopar Kulturi. 
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/blog/:id" element={<Blogpost/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
