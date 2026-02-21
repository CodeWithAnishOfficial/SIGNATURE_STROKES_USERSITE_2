import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex flex-col group cursor-pointer relative"
    >
      <div className="relative aspect-square bg-white mb-4 overflow-hidden rounded-sm border border-gray-50 shadow-sm">
        {/* Wishlist Icon */}
        <button className="absolute top-3 left-3 z-10 p-1.5 bg-white/80 rounded-full shadow-sm hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
        
        {/* Sold Out Badge */}
        {product.isSoldOut && (
          <span className="absolute top-3 right-3 z-10 text-[10px] font-bold text-gray-500 uppercase">
            Sold Out
          </span>
        )}

        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 ${product.isSoldOut ? 'opacity-60' : ''}`}
        />
      </div>
      
      <div className="flex flex-col text-center px-2">
        <h3 className="text-[13px] font-medium text-gray-800 mb-1 line-clamp-2 h-10">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-2 text-[14px]">
          <span className="font-bold text-[#333]">${product.price.toFixed(2)} CAD</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-[12px]">${product.originalPrice.toFixed(2)} CAD</span>
          )}
          {product.discount && (
            <span className="text-red-600 text-[12px] font-semibold">{product.discount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const NewArrivals = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 101,
      name: 'DSC Krunch The Bull English Willow Cricket Bat Size SH',
      image: 'https://www.cricketershop.com/cdn/shop/files/DSC-Krunch-The-Bull-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      price: 455.99,
      originalPrice: 535.99,
      discount: 'Save 15%',
    },
    {
      id: 102,
      name: 'SS Ton Retro Elite English Willow Cricket Bat Size SH',
      image: 'https://www.cricketershop.com/cdn/shop/files/SS-Ton-Retro-Elite-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      price: 382.99,
      originalPrice: 449.99,
      discount: 'Save 15%',
    },
    {
      id: 103,
      name: 'Gray-Nicolls Vapour 1000 English Willow Cricket Bat Size SH',
      image: 'https://www.cricketershop.com/cdn/shop/files/Gray-Nicolls-Vapour-1000-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      price: 524.99,
      originalPrice: 615.99,
      discount: 'Save 15%',
    },
    {
      id: 104,
      name: 'New Balance NB TC 1260 English Willow Cricket Bat Size SH',
      image: 'https://www.cricketershop.com/cdn/shop/files/New-Balance-NB-TC-1260-English-Willow-Cricket-Bat-Size-SH_360x.jpg',
      price: 899.99,
      originalPrice: 1058.99,
      discount: 'Save 15%',
    },
    {
      id: 105,
      name: 'Kookaburra Ghost Pro Cricket Batting Pads Mens Size',
      image: 'https://www.cricketershop.com/cdn/shop/files/Kookaburra-Ghost-Pro-Cricket-Batting-Pads-Mens-Size_360x.jpg',
      price: 135.99,
      originalPrice: 159.99,
      discount: 'Save 15%',
    },
    {
      id: 106,
      name: 'Masuri Vision Series Test Cricket Helmet Steel Grill',
      image: 'https://www.cricketershop.com/cdn/shop/files/Masuri-Vision-Series-Test-Cricket-Helmet-Steel-Grill_360x.jpg',
      price: 169.99,
      originalPrice: 199.99,
      discount: 'Save 15%',
    },
    {
      id: 107,
      name: 'Puma 19.1 Spike Cricket Shoes White and Yellow',
      image: 'https://www.cricketershop.com/cdn/shop/files/Puma-19.1-Spike-Cricket-Shoes-White-and-Yellow_360x.jpg',
      price: 212.99,
      originalPrice: 249.99,
      discount: 'Save 15%',
    },
    {
      id: 108,
      name: 'Gunn & Moore (GM) Diamond 808 Cricket Batting Gloves',
      image: 'https://www.cricketershop.com/cdn/shop/files/Gunn-Moore-GM-Diamond-808-Cricket-Batting-Gloves_360x.jpg',
      price: 76.99,
      originalPrice: 89.99,
      discount: 'Save 15%',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A1D1D] text-center mb-12">
          New Arrivals
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/new-arrivals')}
            className="inline-block px-10 py-4 border-2 border-[#4A1D1D] text-[#4A1D1D] font-bold uppercase tracking-widest hover:bg-[#4A1D1D] hover:text-white transition-all duration-300"
          >
            View All New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
