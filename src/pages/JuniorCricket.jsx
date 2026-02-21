import { motion } from 'framer-motion';
import { Tag, Search, Heart, Star } from 'lucide-react';

const JuniorCricket = () => {
  const collections = [
    {
      title: 'Junior Cricket Bats',
      image: '/assets/images/junior_cricket/junior_bats.webp',
    },
    {
      title: 'Junior Cricket Gloves',
      image: '/assets/images/junior_cricket/junior_gloves.webp',
    },
    {
      title: 'Junior Cricket Pads',
      image: '/assets/images/junior_cricket/junior_pads.webp',
    },
    {
      title: 'Junior Cricket Guards',
      image: '/assets/images/junior_cricket/junior_guards.webp',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <img 
          src="https://www.cricketershop.com/cdn/shop/files/Junior-Cricket-Banner_2000x.jpg" 
          alt="Junior Cricket" 
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000' }}
        />
        <div className="absolute inset-0 bg-blue-900/10 flex flex-col items-center justify-center text-center p-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-400 text-lg md:text-2xl font-medium mb-4 uppercase tracking-[0.2em]"
          >
            Complete range of Junior
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-5xl md:text-8xl font-black mb-8 tracking-tight italic"
          >
            CRICKET
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-red-600 text-white px-8 py-4 text-lg md:text-2xl font-bold rounded-sm shadow-lg"
          >
            Where Every Child Finds Their Swing!
          </motion.div>
        </div>
      </section>

      {/* Collection List */}
      <section className="max-w-[1400px] mx-auto px-4 py-20">
        <h2 className="text-[32px] md:text-[40px] font-serif text-[#4A1D1D] text-center mb-16">
          Collection list
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-square overflow-hidden rounded-sm mb-6 border border-gray-100 shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=' + item.title.replace(/ /g, '+') }}
                />
              </div>
              <h3 className="text-[14px] font-medium text-gray-800 uppercase tracking-widest text-center group-hover:text-[#002B49] transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sponsorship & Customisable Bats Banners */}
      <section className="max-w-[1400px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sponsorship Banner */}
        <div className="relative h-[400px] overflow-hidden rounded-sm group">
          <img 
            src="https://www.cricketershop.com/cdn/shop/files/Cricket-Sponsorship-Banner_1000x.jpg" 
            alt="Cricket Sponsorship" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067' }}
          />
          <div className="absolute inset-0 bg-blue-900/10 flex flex-col items-center justify-end pb-12 text-center px-6">
            <h3 className="text-white text-3xl md:text-4xl font-black mb-4 drop-shadow-lg">
              Contact For Sponsorship
            </h3>
          </div>
        </div>

        {/* Customisable Bats Banner */}
        <div className="relative h-[400px] overflow-hidden rounded-sm group">
          <img 
            src="https://www.cricketershop.com/cdn/shop/files/Custom-Cricket-Bats-Banner_1000x.jpg" 
            alt="Customisable Bats" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000' }}
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-white text-4xl md:text-5xl font-serif mb-2 tracking-tight">
              CUSTOMISABLE BATS
            </h3>
            <p className="text-white text-xl md:text-2xl font-serif italic mb-8">
              For Juniors
            </p>
            <button className="border-2 border-white text-white px-10 py-3 text-[13px] font-bold tracking-widest hover:bg-white hover:text-black transition-all uppercase">
              SHOP THIS
            </button>
          </div>
        </div>
      </section>

      {/* Shop The Look Section */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <h2 className="text-[32px] md:text-[40px] font-serif text-[#4A1D1D] text-center mb-16">
          Shop the look
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visual with Hotspots - 7 columns */}
          <div className="lg:col-span-8 relative rounded-sm overflow-hidden group">
            <img 
              src="/assets/images/junior_cricket/cricket_items.webp" 
              alt="Shop The Look" 
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.src = '/assets/images/junior_cricket/cricket_items.webp' }}
            />
            
            {/* Hotspots */}
            {[
              { top: '25%', left: '25%' }, // T-shirt
              { top: '45%', left: '20%' }, // Bag
              { top: '75%', left: '22%' }, // Shoes
              { top: '65%', left: '32%' }, // Pad Left
              { top: '55%', left: '42%' }, // Bat
              { top: '65%', left: '48%' }, // Pad Right
              { top: '82%', left: '50%' }, // Gloves
              { top: '70%', left: '55%' }, // Helmet
            ].map((pos, idx) => (
              <button 
                key={idx}
                style={{ top: pos.top, left: pos.left }}
                className="absolute w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-10"
              >
                <Tag className="w-4 h-4 fill-current" />
              </button>
            ))}

            {/* Search Button Overlay */}
            <button className="absolute bottom-6 left-6 bg-black/60 hover:bg-black text-white px-6 py-2 rounded-md flex items-center gap-2 text-sm backdrop-blur-sm transition-colors">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>

          {/* Product Preview - 4 columns */}
          <div className="lg:col-span-4 bg-white p-6 rounded-sm flex flex-col items-center text-center">
            <div className="relative w-full aspect-[4/5] mb-6 group cursor-pointer">
              <button className="absolute top-4 left-4 z-10 text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <img 
                src="https://www.cricketershop.com/cdn/shop/files/Gortonshire-Premium-Cricket-T-Shirt-Half-Sleeves_360x.jpg" 
                alt="Gortonshire Premium Cricket T Shirt" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <h3 className="text-[15px] text-gray-800 font-medium mb-2 leading-relaxed max-w-[280px]">
              Gortonshire Premium Cricket T Shirt Half Sleeves Senior Sizes
            </h3>
            
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
              ))}
              <span className="text-[12px] text-gray-500 ml-1">5.0 (1) review</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-bold text-gray-900">$10.99 CAD</span>
                <span className="text-[14px] text-gray-400 line-through">$12.99 CAD</span>
              </div>
              <span className="text-[12px] text-red-600 font-bold italic">Save 15%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JuniorCricket;
