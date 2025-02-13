import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import StudentForm from './components/StudentForm';
import TestForm from './components/TestFrom';
import BlogPage from './pages/BlogPage';
import ManagePosts from './pages/ManagePosts';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-800 bg-white leading-relaxed min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/studentform" element={<StudentForm />} />
            {/* Redirect /whygermany to the blog post */}
            <Route path="/whygermany" element={<Navigate to="/blog/1" replace />} />
            <Route path="/testform" element={<TestForm />} />
            
            {/* Blog Routes */}
            <Route path="/blog/*" element={<BlogPage />} />
            
            {/* Admin Routes */}
            <Route path="/manage" element={<ManagePosts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;