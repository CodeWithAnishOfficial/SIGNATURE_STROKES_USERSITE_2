import { motion } from 'framer-motion';
import { ChevronDown, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomisedBats = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 201,
      name: 'Customise Virat Kohli Profile Kashmir Willow Cricket Bat Size SH',
      price: 63.99,
      oldPrice: 74.99,
      discount: 'Save 15%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Customise-Virat-Kohli-Profile-Kashmir-Willow-Cricket-Bat-Size-SH_360x.jpg'
    },
    {
      id: 202,
      name: 'Customise Virat Kohli Profile English Willow Cricket Bat Size',
      price: 96.99,
      oldPrice: 107.99,
      discount: 'Save 10%',
      rating: 5,
      reviews: 3,
      image: 'https://www.cricketershop.com/cdn/shop/files/Customise-Virat-Kohli-Profile-English-Willow-Cricket-Bat-Size_360x.jpg'
    },
    {
      id: 203,
      name: 'Customise SRT Profile English Willow Cricket Bat Size SH',
      price: 225.99,
      oldPrice: 247.99,
      discount: 'Save 9%',
      rating: 5,
      reviews: 2,
      image: 'https://www.cricketershop.com/cdn/shop/files/Customise-SRT-Profile-English-Willow-Cricket-Bat-Size-SH_360x.jpg'
    },
    {
      id: 204,
      name: 'Customise SRT Profile Kashmir Willow Cricket Bat Size SH',
      price: 63.99,
      oldPrice: 74.99,
      discount: 'Save 15%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Customise-SRT-Profile-Kashmir-Willow-Cricket-Bat-Size-SH_360x.jpg'
    },
    {
      id: 205,
      name: 'Customise Rohit Sharma Profile Kashmir Willow Cricket Bat Size SH',
      price: 63.99,
      oldPrice: 74.99,
      discount: 'Save 15%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Customise-Rohit-Sharma-Profile-Kashmir-Willow-Cricket-Bat-Size-SH_360x.jpg'
    },
    {
      id: 206,
      name: 'Customise MSD Profile English Willow Cricket Bat Size',
      price: 96.99,
      oldPrice: 107.99,
      discount: 'Save 10%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Customise-MSD-Profile-English-Willow-Cricket-Bat-Size_360x.jpg'
    },
    {
      id: 207,
      name: 'Premium Custom English Willow Cricket Bat Size SH UID07',
      price: 240.99,
      oldPrice: 300.99,
      discount: 'Save 20%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Premium-Custom-English-Willow-Cricket-Bat-Size-SH-UID07_360x.jpg'
    },
    {
      id: 208,
      name: 'Premium Custom English Willow Cricket Bat Size SH UID06',
      price: 240.99,
      oldPrice: 300.99,
      discount: 'Save 20%',
      image: 'https://www.cricketershop.com/cdn/shop/files/Premium-Custom-English-Willow-Cricket-Bat-Size-SH-UID06_360x.jpg'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-[#3D2314]">
        {/* Background Image - Willow stacks */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.cricketershop.com/cdn/shop/files/Custom-Cricket-Bats-Manufacturing_2000x.jpg" 
            alt="Custom Bat Willow" 
            className="w-full h-full object-cover opacity-60"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000' }}
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[100px] font-black text-[#F5E6D3] uppercase tracking-tighter leading-none mb-6"
          >
            CUSTOMISED BATS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[30px] md:text-[60px] font-serif italic text-[#F5E6D3] mb-12"
          >
            Craft your own bat
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Parallelogram Shape for Offer */}
            <div className="bg-[#F5E6D3] px-12 py-4 transform -skew-x-12 shadow-xl">
              <h2 className="text-[24px] md:text-[45px] font-black text-black uppercase tracking-tight transform skew-x-12">
                Get <span className="text-red-600">20%</span> off on first purchase
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Side Bats Image (Visual representation of the bats on the right in the screenshot) */}
        <div className="absolute right-0 top-0 h-full w-1/3 z-1 hidden lg:block">
          <img 
            src="https://www.cricketershop.com/cdn/shop/files/Custom-Bats-Side_1000x.png" 
            alt="Cricket Bats" 
            className="h-full w-full object-contain object-right"
            onError={(e) => { e.style.display = 'none' }}
          />
        </div>
      </section>

      {/* Product Listing Section */}
      <section className="max-w-[1600px] mx-auto px-4 py-20">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <h2 className="text-[12px] font-bold text-gray-400 tracking-[0.2em] mb-6 uppercase border-b border-gray-100 pb-2">Filters</h2>
            
            {/* Brand Filter */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Brand</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                  <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">Customise Bat (11)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                  <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">Gortonshire (4)</span>
                </label>
              </div>
            </div>

            {/* Size Filter */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Size</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 space-y-3">
                {['Size 4 (3)', 'Size 5 (3)', 'Size 6 (3)', 'Size SH (3)'].map(size => (
                  <label key={size} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                    <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{size}</span>
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
                  <span>$283.99 CAD</span>
                </div>
                <div className="relative h-1 bg-gray-200 rounded-full">
                  <div className="absolute h-full bg-[#E67E22] rounded-full" style={{ left: '0%', right: '0%' }} />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-[#E67E22] rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 right-100% w-3 h-3 bg-[#E67E22] rounded-full" />
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
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                  <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">English Willow (11)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                  <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">Kashmir Willow (4)</span>
                </label>
              </div>
            </div>

            {/* Availability Filter */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between cursor-pointer py-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Availability</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="mt-4 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                  <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">In stock (15)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                  <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">Out of stock (1)</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-end mb-8">
              <div className="relative inline-block text-left">
                <select className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-[13px] focus:outline-none cursor-pointer rounded-sm">
                  <option>Best Selling</option>
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
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Cricket+Bat' }}
                    />
                  </div>
                  <h3 className="text-[13px] text-gray-800 font-medium mb-2 leading-relaxed h-12 line-clamp-2 px-2">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-center gap-1">
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < product.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-200'}`} />
                        ))}
                        <span className="text-[11px] text-gray-500 ml-1">{product.rating.toFixed(1)} ({product.reviews}) reviews</span>
                      </div>
                    )}
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
      </section>
    </div>
  );
};

export default CustomisedBats;
