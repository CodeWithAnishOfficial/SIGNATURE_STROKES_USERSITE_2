import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative h-[400px] flex items-center justify-center bg-[#002B49] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2000" 
            alt="Cricket Stadium" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-white text-5xl md:text-6xl font-serif tracking-wide mb-4">
            Our Story
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Serving the cricket community with passion and integrity since 2012.
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#002B49] mb-6">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Signature Stroke started with a simple mission: to provide cricketers with the finest equipment available. What began as a small shop in 2012 has grown into one of the world's most trusted cricket retailers, serving players in over 50 countries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We pride ourselves on our deep-rooted relationships with the world's leading cricket brands. By sourcing directly from manufacturers, we guarantee that every item on our shelves is 100% authentic and meets the highest standards of quality.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-bold text-[#002B49] mb-2">12+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-[#002B49] mb-2">50+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Countries Served</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1540749303346-5b4fa49ab2c0?auto=format&fit=crop&q=80&w=800" 
              alt="Cricket Gear" 
              className="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1624491379612-413159043477?auto=format&fit=crop&q=80&w=800" 
              alt="Batting Practice" 
              className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#002B49] rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-xl">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002B49]">Our Vision</h3>
              <p className="text-gray-600">To be the global benchmark for excellence in cricket retail, empowering every player to reach their full potential.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#002B49] rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-xl">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002B49]">Our Mission</h3>
              <p className="text-gray-600">To provide authentic, high-performance equipment coupled with expert advice and unparalleled customer service.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#002B49] rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-xl">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002B49]">Our Values</h3>
              <p className="text-gray-600">Integrity, authenticity, and a relentless focus on the player's needs drive everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Address Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#002B49] mb-4">Visit Our Store</h2>
          <p className="text-gray-600">Experience the quality for yourself at our flagship showroom.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Address Details */}
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-6 h-6 text-[#002B49]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#002B49] mb-2">Our Location</h4>
                <p className="text-gray-600">
                  Signature Stroke Cricket Hub<br />
                  123 Sports Avenue, Phase 7<br />
                  Mohali, Punjab 160062<br />
                  India
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Phone className="w-6 h-6 text-[#002B49]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#002B49] mb-2">Contact Number</h4>
                <p className="text-gray-600">+91 (172) 456-7890<br />+91 98765-43210</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Mail className="w-6 h-6 text-[#002B49]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#002B49] mb-2">Email Address</h4>
                <p className="text-gray-600">info@signaturestroke.com<br />support@signaturestroke.com</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Clock className="w-6 h-6 text-[#002B49]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#002B49] mb-2">Opening Hours</h4>
                <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: 11:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          {/* Map Placeholder */}
          <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.6934882142247!3d30.718897552276505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fede79461793b%3A0xbb30908857417244!2sMohali%2C%20Punjab!5e0!3m2!1sen!2sin!4v1709192938814!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
