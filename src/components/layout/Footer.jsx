import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#002B49] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 
            onClick={() => navigate('/about-us')}
            className="text-lg font-bold mb-4 cursor-pointer hover:text-gray-200 transition-colors"
          >
            About Us
          </h3>
          <p className="text-sm text-gray-300">
            Leading cricket equipment provider worldwide since 2012. We source 100% authentic products directly from brands.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li 
              onClick={() => navigate('/about-us')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">Bats</li>
            <li className="hover:text-white cursor-pointer transition-colors">Protection</li>
            <li className="hover:text-white cursor-pointer transition-colors">Kitbags</li>
            <li className="hover:text-white cursor-pointer transition-colors">Sale</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Customer Service</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li 
              onClick={() => navigate('/contact-us')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Contact Us
            </li>
            <li 
              onClick={() => navigate('/shipping-policy')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Shipping Policy
            </li>
            <li 
              onClick={() => navigate('/refund-policy')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Refund Policy
            </li>
            <li 
              onClick={() => navigate('/terms-of-service')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Terms of Service
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white/10 border border-white/20 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button className="bg-white text-[#002B49] px-4 py-2 rounded-r font-bold hover:bg-gray-200 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; 2026 Signature Stroke. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
