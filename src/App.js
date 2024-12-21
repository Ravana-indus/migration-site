import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import StudentForm from './components/StudentForm';
import WhyGermany from './components/WhyGermany';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost'; 
import BlogAdmin from './components/BlogAdmin'; 


function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-800 bg-white leading-relaxed min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/studentform" element={<StudentForm />} />
            <Route path="/Whygermany" element={<WhyGermany />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin/blog" element={<BlogAdmin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;