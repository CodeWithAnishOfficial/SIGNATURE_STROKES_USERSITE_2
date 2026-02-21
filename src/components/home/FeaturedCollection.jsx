import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../../data/products';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col group cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="relative aspect-square bg-[#F7F7F7] mb-4 overflow-hidden rounded-sm">
        <button className="absolute top-3 left-3 z-10 p-1.5 bg-white rounded-full shadow-sm hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="flex flex-col flex-1 text-center md:text-left">
        <h3 className="text-[13px] md:text-[14px] font-medium text-gray-800 mb-1 line-clamp-2 h-10">
          {product.name}
        </h3>
        
        {(product.rating || product.reviews) && (
          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(product.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
            <span className="text-[11px] text-gray-500 ml-1">
              {product.rating ? `${product.rating.toFixed(1)} (${product.reviews || 0}) reviews` : 'No reviews'}
            </span>
          </div>
        )}

        {product.colors && (
          <div className="flex gap-2 mb-2 justify-center md:justify-start">
            {product.colors.map((color, idx) => (
              <div 
                key={idx}
                className={`w-3 h-3 rounded-full border border-gray-200`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-center md:justify-start gap-2 text-[14px]">
          <span className="font-bold text-[#333]">₹{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-[12px]">₹{product.oldPrice.toLocaleString()}</span>
          )}
          {product.save && (
            <span className="text-red-600 text-[12px] font-medium">Save {product.save}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedCollection = () => {
  const featuredProducts = allProducts.filter(product => product.isFeatured);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A1D1D] text-center mb-12">
          Featured Collection
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
