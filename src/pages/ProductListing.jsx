import { motion } from 'framer-motion';
import { ChevronDown, Heart, Star } from 'lucide-react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { allProducts } from '../data/products';

const ProductListing = ({ specialType }) => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  // Filter products based on category route param OR specialType + query params
  const filteredProducts = allProducts.filter(p => {
    if (specialType === 'new-arrivals') return p.isNewArrival;
    if (specialType === 'featured') return p.isFeatured;
    if (specialType === 'women') return p.isWomenRange;
    
    const brandParam = searchParams.get('brand');
    const styleParam = searchParams.get('style');
    const sizeTypeParam = searchParams.get('sizeType');

    // If category is 'all', we don't filter by category
    const isCategoryMatch = !category || category.toLowerCase() === 'all' || p.category.toLowerCase() === category?.toLowerCase();
    
    // If we're filtering by brand from home page, we might not have a category match but we want the brand
    if (!isCategoryMatch) return false;

    if (brandParam && p.brand?.toLowerCase() !== brandParam.toLowerCase()) return false;
    if (styleParam && !p.style?.toLowerCase().includes(styleParam.toLowerCase())) return false;
    
    if (sizeTypeParam) {
      const seniorSizes = ['SH', 'LH', 'Adult', 'Short Handle', 'Long Handle'];
      const juniorSizes = ['3', '4', '5', '6', '7', '8', 'H', 'Harrow', 'Junior', 'Youth'];
      
      const isSenior = seniorSizes.includes(p.size);
      const isJunior = juniorSizes.includes(p.size);
      
      if (sizeTypeParam.toLowerCase() === 'senior' && !isSenior) return false;
      if (sizeTypeParam.toLowerCase() === 'junior' && !isJunior) return false;
    }

    return true;
  });

  // Dynamic filter counts
  const getCounts = (key) => {
    const counts = {};
    filteredProducts.forEach(p => {
      const val = p[key];
      if (val) counts[val] = (counts[val] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  };

  const brands = getCounts('brand');
  const sizes = getCounts('size');
  const styles = getCounts('style');
  const availabilities = [
    { name: 'In stock', count: filteredProducts.filter(p => !p.isSoldOut).length },
    { name: 'Out of stock', count: filteredProducts.filter(p => p.isSoldOut).length }
  ];

  const getPageTitle = () => {
    if (specialType === 'new-arrivals') return 'New Arrivals';
    if (specialType === 'featured') return 'Featured Collection';
    if (specialType === 'women') return 'Women Range';
    
    const brandParam = searchParams.get('brand');
    if (brandParam && (category?.toLowerCase() === 'all' || !category)) {
      return brandParam;
    }
    
    switch(category?.toLowerCase()) {
      case 'bats': return 'Cricket Bats';
      case 'protection': return 'Protection';
      case 'kitbags': return 'Kitbags';
      case 'clothings': return 'Clothings';
      case 'balls': return 'Balls';
      case 'shoes': return 'Shoes';
      case 'accessories': return 'Accessories';
      case 'kit-packages': return 'Kit Packages';
      case 'training': return 'Training';
      default: return 'Products';
    }
  };

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="relative w-full h-[300px] overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000&auto=format&fit=crop" 
            alt="Cricket Bats Banner" 
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000' }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-center">
            {getPageTitle()}
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-[1600px] mx-auto px-4">
        <div className="flex gap-10 py-12 relative">
          {/* Filters Sidebar - Sticky */}
          <aside className="w-64 flex-shrink-0 hidden lg:flex flex-col border-r border-gray-50 sticky top-4 h-[calc(100vh-32px)] overflow-y-auto pr-4 custom-scrollbar">
            <h2 className="text-[12px] font-bold text-gray-400 tracking-[0.2em] mb-6 uppercase border-b border-gray-100 pb-2">Filters</h2>
            
            <div className="flex-1">
              {/* Brand Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-800">Brand</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="mt-4 space-y-3">
                  {brands.map(brand => (
                    <label key={brand.name} className="flex items-center gap-3 mb-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                      <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{brand.name} ({brand.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6 border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-800">Size</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="mt-4 space-y-3">
                  {sizes.map(size => (
                    <label key={size.name} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                      <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{size.name} ({size.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6 border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-800">Price</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="mt-4 px-2">
                  <div className="flex justify-between text-[12px] text-gray-600 mb-4">
                    <span>₹0.00</span>
                    <span>₹1,35,000.00</span>
                  </div>
                  <div className="relative h-1 bg-gray-200 rounded-full">
                    <div className="absolute h-full bg-[#E67E22] rounded-full" style={{ left: '0%', right: '0%' }} />
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 h-3 bg-[#E67E22] rounded-full" />
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-[#E67E22] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Style Filter */}
              <div className="mb-6 border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-800">Style</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="mt-4 space-y-3">
                  {styles.map(style => (
                    <label key={style.name} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 border-gray-300 rounded focus:ring-0 accent-black" />
                      <span className="text-[13px] text-gray-600 group-hover:text-black transition-colors">{style.name} ({style.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="mb-6 border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between cursor-pointer py-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-800">Availability</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <div className="mt-4 space-y-3">
                  {availabilities.map(item => (
                    <label key={item.name} className="flex items-center gap-3 cursor-pointer group">
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
            <div className="flex justify-end mb-8">
              <div className="relative inline-block text-left">
                <select className="appearance-none bg-white border border-gray-200 py-2 pl-4 pr-10 text-[13px] focus:outline-none cursor-pointer rounded-sm min-w-[150px]">
                  <option>Featured</option>
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

            <div className="pb-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="relative aspect-square bg-[#F7F7F7] mb-6 overflow-hidden rounded-sm group-hover:bg-[#F0F0F0] transition-colors">
                      {product.isCustom ? (
                        <div className="w-full h-full relative">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                             <div className="bg-[#4A1D1D]/80 px-4 py-2 text-white">
                                <span className="text-xl font-black italic">10-11</span>
                                <p className="text-[10px] font-bold tracking-widest uppercase">GRAINS</p>
                             </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <button className="absolute top-4 left-4 z-10 text-gray-300 hover:text-red-500 transition-colors">
                            <Heart className="w-5 h-5" />
                          </button>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' }}
                          />
                          {product.isSoldOut && (
                            <div className="absolute top-2 right-2">
                               <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Sold Out</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <div className="flex flex-col text-center px-2">
                      <h3 className="text-[14px] text-gray-800 font-medium mb-2 leading-relaxed line-clamp-2 h-10">
                        {product.name}
                      </h3>
                      <div className="flex flex-col items-center gap-1">
                        {product.rating && (
                          <div className="flex items-center gap-1 mb-1">
                            <div className="flex text-orange-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-orange-400' : ''}`} />
                              ))}
                            </div>
                            <span className="text-[11px] text-gray-500">{product.rating.toFixed(1)} ({product.reviews}) review</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          {product.price && <span className="text-[15px] font-bold text-gray-900">₹{product.price.toLocaleString()}</span>}
                          {product.oldPrice && <span className="text-[13px] text-gray-400 line-through">₹{product.oldPrice.toLocaleString()}</span>}
                          {product.save && <span className="text-[13px] text-red-600 font-bold italic">Save {product.save}</span>}
                        </div>
                        {product.colors && (
                          <div className="flex items-center gap-2 mt-2">
                            {product.colors.map((color, idx) => (
                              <div 
                                key={idx} 
                                className="w-3.5 h-3.5 rounded-full border border-gray-200"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                  No products found in this category.
                </div>
              )}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default ProductListing;
