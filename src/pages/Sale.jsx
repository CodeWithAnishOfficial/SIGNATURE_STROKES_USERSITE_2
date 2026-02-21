import { ChevronDown, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../data/products';

const Sale = () => {
  const navigate = useNavigate();
  
  // Filter products that are on sale (have oldPrice)
  const saleProducts = allProducts.filter(product => product.oldPrice);

  const brands = [
    { name: 'SG', count: 9 },
    { name: 'SS', count: 8 },
    { name: 'Shrey', count: 1 },
    { name: 'Kookaburra', count: 4 },
    { name: 'BAS Vampire', count: 1 },
    { name: 'DSC', count: 15 },
    { name: 'EM', count: 1 },
    { name: 'Fino', count: 3 },
    { name: 'Forma', count: 1 },
    { name: 'GEM', count: 9 },
    { name: 'GM', count: 6 },
    { name: 'Gortonshire', count: 12 },
    { name: 'New Balance', count: 4 },
    { name: 'Other Brands', count: 3 },
    { name: 'Puma', count: 11 },
    { name: 'Reebok', count: 20 },
    { name: 'SF', count: 13 },
    { name: 'Spartan', count: 1 },
  ];

  const sizes = [
    { name: 'Junior', count: 6 },
    { name: 'Youth', count: 8 },
    { name: 'XS', count: 2 },
    { name: 'S', count: 14 },
    { name: 'M', count: 13 },
    { name: 'L', count: 16 },
    { name: 'XL', count: 13 },
    { name: 'XXL', count: 12 },
    { name: '3XL', count: 2 },
    { name: '26 (5-6 Years)', count: 1 },
    { name: '28 (7-8 Years)', count: 2 },
    { name: '30 (9-10 Years)', count: 2 },
    { name: '32 (11-12 Years)', count: 2 },
    { name: '34 (13-14 Years)', count: 2 },
    { name: 'Adult', count: 15 },
    { name: 'SH', count: 3 },
  ];

  const styles = [
    { name: 'Batting Gloves', count: 19 },
    { name: 'Wicket Keeping Gloves', count: 1 },
    { name: 'Batting Pads', count: 7 },
    { name: 'English Willow', count: 30 },
    { name: 'Kashmir Willow', count: 3 },
    { name: 'Steel Grill', count: 4 },
    { name: 'Thigh Guards', count: 4 },
    { name: 'Bat care', count: 1 },
    { name: 'Batting', count: 11 },
    { name: 'Bowling', count: 10 },
    { name: 'Cricket Whites', count: 8 },
    { name: 'Match Jerseys', count: 5 },
    { name: 'Training', count: 2 },
    { name: 'Duffle Cricket Kitbags', count: 6 },
    { name: 'Red Cricket Ball', count: 1 },
    { name: 'Others', count: 2 },
    { name: 'Cricket clothing', count: 2 },
  ];

  const availability = [
    { name: 'In stock', count: 120 },
    { name: 'Out of stock', count: 32 },
  ];

  return (
    <div className="bg-white">
      {/* Sale Banner */}
      <section className="relative h-[300px] flex items-center justify-center bg-[#0B1219] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/images/sale/smoke-bg.jpg" 
            alt="Smoke Background" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000' }}
          />
        </div>
        <h1 className="relative text-white text-5xl md:text-6xl font-serif tracking-wide text-center">
          End of Season Cricket Sale
        </h1>
      </section>

      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex gap-8 py-12 relative">
          {/* Filters Sidebar - Sticky */}
          <aside className="w-64 flex-shrink-0 hidden lg:flex flex-col border-r border-gray-50 sticky top-4 h-[calc(100vh-32px)] overflow-y-auto pr-4 custom-scrollbar">
            <h2 className="text-[12px] font-bold text-gray-400 tracking-[0.2em] mb-6 uppercase border-b border-gray-100 pb-2 flex-shrink-0">Filters</h2>
            
            <div className="flex-1 pr-4">
              {/* Price Filter */}
              <div className="mb-8">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Price</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="mt-4 px-2">
                  <div className="flex justify-between text-[12px] text-gray-600 mb-4">
                    <span>₹0.00</span>
                    <span>₹1,35,000.00</span>
                  </div>
                  <div className="relative h-1 bg-gray-200 rounded-full">
                    <div className="absolute h-full bg-[#E67E22] rounded-full" style={{ left: '0%', right: '0%' }} />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-[#E67E22] rounded-full cursor-pointer shadow-sm" />
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-[#E67E22] rounded-full cursor-pointer shadow-sm" />
                  </div>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6 border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Brand</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="mt-4 pr-2">
                  {brands.map(brand => (
                    <label key={brand.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                      <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{brand.name} ({brand.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6 border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Size</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="mt-4 pr-2">
                  {sizes.map(size => (
                    <label key={size.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                      <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{size.name} ({size.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Style Filter */}
              <div className="mb-6 border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Style</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="mt-4 pr-2">
                  {styles.map(style => (
                    <label key={style.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                      <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{style.name} ({style.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="mb-6 border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase">Availability</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="mt-4">
                  {availability.map(item => (
                    <label key={item.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                      <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{item.name} ({item.count})</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid Area - Using page scroll */}
          <main className="flex-1">
            <div className="flex justify-end mb-8 flex-shrink-0">
              <div className="relative inline-block text-left">
                <select className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-[13px] focus:outline-none cursor-pointer rounded-sm">
                  <option>Price (High to Low)</option>
                  <option>Price (Low to High)</option>
                  <option>Best Selling</option>
                  <option>Newest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {saleProducts.map(product => (
                  <div 
                    key={product.id} 
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] bg-[#F7F7F7] mb-4 overflow-hidden rounded-sm">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/300x400?text=Cricket+Bat' }}
                      />
                      <button className="absolute top-4 left-4 p-1.5 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <h3 className="text-[14px] text-gray-800 line-clamp-2 leading-relaxed mb-1 hover:text-black transition-colors">
                      {product.name}
                    </h3>
                    {product.rating && (
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-sm">★</span>
                          ))}
                        </div>
                        <span className="text-[12px] text-gray-500">{product.rating}.0 (1) review</span>
                      </div>
                    )}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[15px] font-bold">₹{product.price.toLocaleString('en-IN')}</span>
                      <span className="text-[13px] text-gray-400 line-through font-medium">₹{product.oldPrice.toLocaleString('en-IN')}</span>
                      <span className="text-[13px] text-red-600 font-bold italic">Save {product.save}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Sale;
