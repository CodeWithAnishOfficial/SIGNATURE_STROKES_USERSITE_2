import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Sale from './pages/Sale'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ShippingPolicy from './pages/ShippingPolicy'
import RefundPolicy from './pages/RefundPolicy'
import TermsOfService from './pages/TermsOfService'
import ProductDetail from './pages/ProductDetail'
import JuniorCricket from './pages/JuniorCricket'
import CustomizedJerseys from './pages/CustomizedJerseys'
import CustomisedBats from './pages/CustomisedBats'
import ProductListing from './pages/ProductListing'

function App() {
  // Ensure page scrolls to top on reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Layout Wrapper for pages that need Header/Navbar */}
          <Route path="/" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <Home />
              <Footer />
            </>
          } />

          <Route path="/sale" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <Sale />
              <Footer />
            </>
          } />

          <Route path="/about-us" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <AboutUs />
              <Footer />
            </>
          } />

          <Route path="/contact-us" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <ContactUs />
              <Footer />
            </>
          } />

          <Route path="/shipping-policy" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <ShippingPolicy />
              <Footer />
            </>
          } />

          <Route path="/refund-policy" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <RefundPolicy />
              <Footer />
            </>
          } />

          <Route path="/terms-of-service" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <TermsOfService />
              <Footer />
            </>
          } />

          <Route path="/product/:id" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <ProductDetail />
              <Footer />
            </>
          } />

          <Route path="/junior-cricket" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <JuniorCricket />
              <Footer />
            </>
          } />

          <Route path="/customized-jerseys" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <CustomizedJerseys />
              <Footer />
            </>
          } />

          <Route path="/customised-bats" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <CustomisedBats />
              <Footer />
            </>
          } />

          <Route path="/collection/:category" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <ProductListing />
              <Footer />
            </>
          } />

          <Route path="/new-arrivals" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <ProductListing specialType="new-arrivals" />
              <Footer />
            </>
          } />

          <Route path="/featured-collection" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <ProductListing specialType="featured" />
              <Footer />
            </>
          } />

          <Route path="/women-range" element={
            <>
              <div className="sticky top-0 z-50 bg-white shadow-sm">
                <Header />
                <Navbar />
              </div>
              <ProductListing specialType="women" />
              <Footer />
            </>
          } />
          
          {/* Login Page (Full screen, no header/navbar) */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
