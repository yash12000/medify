import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
// import BookingForm from './pages/BookingForm';
import Banner from './components/Banner/Banner';
import BookingsPage from './pages/BookingsPage';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results" element={<SearchResults />} />
        {/* <Route path="/book/:id" element={<BookingForm />} /> */}
        <Route path="/my-bookings" element={<BookingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
