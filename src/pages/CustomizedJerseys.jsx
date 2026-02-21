import { useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CustomizedJerseys = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 32.99]);

  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Tyka Coloured Cricket Jersey Set Design ${i + 1}`,
    price: 26.99,
    oldPrice: 34.99,
    discount: 'Save 22%',
    image: `https://www.cricketershop.com/cdn/shop/files/Tyka-Coloured-Cricket-Jersey-Set-Design-${i + 1}_360x.jpg`
  }));

  const filters = {
    brand: [
      { name: 'Gortonshire', count: 2 },
      { name: 'Other Brands', count: 9 },
      { name: 'Tyka', count: 29 }
    ],
    style: [
      { name: 'Cricket clothing', count: 1 }
    ],
    availability: [
      { name: 'In stock', count: 40 }
    ]
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-[#0B1219]">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Custom Cricket Jersey" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white italic tracking-tighter mb-4"
          >
            <span className="text-green-500">CUSTOMISED</span> JERSEYS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-blue-400 font-bold tracking-[0.2em] uppercase mb-8"
          >
            BEST FABRIC • UNIQUE DESIGNS • LATEST PRINTING
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-[#E67E22] text-white px-8 py-3 rounded-sm font-bold text-lg shadow-lg"
          >
            Get Your Team Kit Today
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <h2 className="text-[12px] font-bold text-gray-400 tracking-[0.2em] mb-6 uppercase border-b border-gray-100 pb-2">Filters</h2>
            
            {/* Brand Filter */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Brand</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 space-y-3">
                {filters.brand.map(brand => (
                  <label key={brand.name} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                    <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{brand.name} ({brand.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Price</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 px-2">
                <div className="flex justify-between text-[12px] text-gray-600 mb-4">
                  <span>$0.00 CAD</span>
                  <span>$32.99 CAD</span>
                </div>
                <div className="relative h-1 bg-gray-200 rounded-full">
                  <div className="absolute h-full bg-[#E67E22] rounded-full" style={{ left: '0%', right: '0%' }} />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-[#E67E22] rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-[#E67E22] rounded-full" />
                </div>
              </div>
            </div>

            {/* Style Filter */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Style</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 space-y-3">
                {filters.style.map(style => (
                  <label key={style.name} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                    <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{style.name} ({style.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Filter */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Availability</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 space-y-3">
                {filters.availability.map(item => (
                  <label key={item.name} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                    <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{item.name} ({item.count})</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-end mb-8">
              <div className="relative inline-block text-left">
                <select className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-[13px] focus:outline-none cursor-pointer rounded-sm">
                  <option>Featured</option>
                  <option>Price (High to Low)</option>
                  <option>Price (Low to High)</option>
                  <option>Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {products.map(product => (
                <div 
                  key={product.id} 
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="group cursor-pointer flex flex-col text-center"
                >
                  <div className="relative aspect-square bg-white mb-4 overflow-hidden rounded-sm border border-gray-50 shadow-sm">
                    <button className="absolute top-4 left-4 z-10 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Cricket+Jersey' }}
                    />
                  </div>
                  <h3 className="text-[13px] text-gray-800 font-medium mb-2 leading-relaxed h-10 line-clamp-2 px-2">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-bold text-gray-900">${product.price.toFixed(2)} CAD</span>
                      <span className="text-[12px] text-gray-400 line-through">${product.oldPrice.toFixed(2)} CAD</span>
                    </div>
                    <span className="text-[11px] text-red-600 font-bold italic">{product.discount}</span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CustomizedJerseys;
