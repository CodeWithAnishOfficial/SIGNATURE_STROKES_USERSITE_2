import { Search, User, Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TopBanner from './TopBanner';
import WishlistModal from '../common/WishlistModal';
import CartSlider from '../common/CartSlider';

const Header = () => {
  const navigate = useNavigate();
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full">
      <TopBanner />
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div 
          onClick={handleLogoClick}
          className="flex items-center gap-2 min-w-fit cursor-pointer group"
        >
          <div className="bg-[#002B49] p-1 rounded group-hover:scale-110 transition-transform">
             <img src="https://img.icons8.com/color/48/shield.png" alt="Logo" className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold text-[#333] hidden sm:block">Signature Strokes</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-full py-2 px-6 focus:outline-none focus:ring-1 focus:ring-[#002B49]"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer" />
        </div>

        {/* Icons & Currency */}
        <div className="flex items-center gap-6 text-gray-600">
          <User 
            onClick={() => navigate('/login')}
            className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" 
          />
          <Heart 
            onClick={() => setIsWishlistOpen(true)}
            className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" 
          />
          <div 
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer group"
          >
             <ShoppingCart className="w-6 h-6 hover:text-primary transition-colors" />
          </div>
          
          {/* Currency Dropdown Group */}
          <div className="relative group/currency flex items-center gap-2 cursor-pointer border-l pl-4 ml-2 h-full py-2">
            <img src="https://flagcdn.com/w20/in.png" alt="India Flag" className="w-5 h-auto" />
            <span className="text-sm font-semibold uppercase">INR</span>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-0 w-64 bg-white shadow-xl border border-gray-100 hidden group-hover/currency:block z-20">
              <div className="flex flex-col py-1">
                {[
                  { name: 'Auto Location', flag: 'https://flagcdn.com/w20/in.png' },
                  { name: 'US Dollar (USD)', flag: 'https://flagcdn.com/w20/us.png' },
                  { name: 'Euro (EUR)', flag: 'https://flagcdn.com/w20/eu.png' },
                  { name: 'British Pound (GBP)', flag: 'https://flagcdn.com/w20/gb.png' },
                  { name: 'Canadian Dollar (CAD)', flag: 'https://flagcdn.com/w20/ca.png' },
                  { name: 'Afghan Afghani (AFN)', flag: 'https://flagcdn.com/w20/af.png' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none">
                    <img src={item.flag} alt={item.name} className="w-5 h-auto" />
                    <span className="text-[13px] text-gray-700 whitespace-nowrap">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Popup */}
      <WishlistModal 
        isOpen={isWishlistOpen} 
        onClose={() => setIsWishlistOpen(false)} 
      />

      {/* Cart Slider */}
      <CartSlider 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </header>
  );
};

export default Header;
