import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Star } from 'lucide-react';

const hotspots = [
  {
    id: 'helmet',
    top: '15%',
    left: '42%',
    product: {
      name: 'Shrey KOROYD Stainless Grill Cricket Helmet Navy',
      price: 13599,
      originalPrice: 16000,
      discount: 'Save 15%',
      rating: 5.0,
      reviews: 6,
      image: 'https://www.cricketershop.com/cdn/shop/files/Shrey-KOROYD-Stainless-Steel-Grill-Cricket-Helmet_360x.jpg'
    }
  },
  {
    id: 'bat',
    top: '45%',
    left: '55%',
    product: {
      name: 'MRF Genius Grand Edition Virat Kohli English Willow Cricket Bat',
      price: 45000,
      originalPrice: 52000,
      discount: 'Save 13%',
      rating: 5.0,
      reviews: 12,
      image: 'https://www.cricketershop.com/cdn/shop/files/MRF-Genius-Grand-Edition-English-Willow-Cricket-Bat-Size-SH_360x.jpg'
    }
  },
  {
    id: 'gloves',
    top: '42%',
    left: '38%',
    product: {
      name: 'SG KLR 1 Cricket Batting Gloves Adult Size',
      price: 2850,
      originalPrice: 3500,
      discount: 'Save 18%',
      rating: 4.9,
      reviews: 15,
      image: 'https://www.cricketershop.com/cdn/shop/files/SG-KLR-1-Cricket-Batting-Gloves-Adult-Size_360x.jpg'
    }
  },
  {
    id: 'thigh-guard',
    top: '65%',
    left: '45%',
    product: {
      name: 'Moonwalkr 2.0 Cricket Batting Combo Thigh Guard Pad Navy Blue',
      price: 2550,
      originalPrice: 3000,
      discount: 'Save 15%',
      rating: 5.0,
      reviews: 8,
      image: 'https://www.cricketershop.com/cdn/shop/files/Moonwalkr-2.0-Cricket-Batting-Combo-Thigh-Guard-Pad-Navy-Blue_360x.jpg'
    }
  },
  {
    id: 'pads',
    top: '82%',
    left: '48%',
    product: {
      name: 'MRF Genius Grand Edition Cricket Batting Leg Guard Pads',
      price: 6500,
      originalPrice: 8000,
      discount: 'Save 19%',
      rating: 5.0,
      reviews: 4,
      image: 'https://www.cricketershop.com/cdn/shop/files/MRF-Genius-Grand-Edition-Cricket-Batting-Leg-Guard-Pads_360x.jpg'
    }
  }
];

const ShopTheLook = () => {
  const [activeHotspot, setActiveHotspot] = useState(hotspots[1]); // Default to Bat

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A1D1D] text-center mb-12 antialiased">
          Shop the look
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Interactive Image Container */}
          <motion.div 
            initial={{ filter: 'grayscale(100%)' }}
            whileInView={{ filter: 'grayscale(0%)' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            className="relative w-full lg:w-3/5 bg-gray-50 rounded-sm overflow-hidden aspect-[4/5] lg:h-[750px]"
          >
            <img 
              src="/assets/images/shop_by_look/costume.jfif" 
              alt="Cricketer playing shot" 
              className="w-full h-full object-cover transition-transform duration-700"
            />
            
            {/* Hotspots */}
            {hotspots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveHotspot(spot)}
                className={`absolute w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg transition-all duration-300 z-10 ${
                  activeHotspot.id === spot.id ? 'ring-4 ring-white scale-125' : 'hover:scale-110'
                }`}
                style={{ top: spot.top, left: spot.left }}
              >
                <ShoppingBag className="w-4 h-4" />
                {/* Pulse Effect */}
                <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-30"></span>
              </button>
            ))}
          </motion.div>

          {/* Product Details Section */}
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start pt-8">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeHotspot.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="w-full max-w-sm"
               >
                 <div className="relative aspect-square bg-gray-50 rounded-sm mb-6 p-8">
                    <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <img 
                      src={activeHotspot.product.image} 
                      alt={activeHotspot.product.name} 
                      className="w-full h-full object-contain"
                    />
                 </div>

                 <div className="text-center lg:text-left">
                    <h3 className="text-lg font-medium text-gray-800 mb-2 leading-tight">
                      {activeHotspot.product.name}
                    </h3>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 fill-yellow-400 text-yellow-400`} />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">
                        {activeHotspot.product.rating.toFixed(1)} ({activeHotspot.product.reviews}) review
                      </span>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-xl font-bold text-black">
                        ₹{activeHotspot.product.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 line-through">
                        ₹{activeHotspot.product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-red-600 font-semibold uppercase text-sm">
                        {activeHotspot.product.discount}
                      </span>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;
