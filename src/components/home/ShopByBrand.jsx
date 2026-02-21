import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopByBrand = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const brands = [
    { name: 'SS', logo: '/assets/images/hero2/SS.svg' },
    { name: 'SG', logo: '/assets/images/hero2/Sg_Logo.svg' },
    { name: 'Kookaburra', logo: '/assets/images/hero2/Kookaburra_Logo.svg' },
    { name: 'MRF', logo: '/assets/images/hero2/Mrf_Logo.svg' },
    { name: 'Shrey', logo: '/assets/images/hero2/Shrey_Logo.svg' },
    { name: 'Moonwalkr', logo: '/assets/images/hero2/Moonwalkr_Logo.svg' },
    { name: 'Tyka', logo: '/assets/images/hero2/Tyka_Logo.svg' },
    { name: 'Versant', logo: '/assets/images/hero2/Versant_Logo.svg' },
    { name: 'Morrant', logo: '/assets/images/hero2/Morrant_Logo.webp' },
    { name: 'Gray Nicolls', logo: '/assets/images/hero2/Grey_nicolas_Logo.webp' },
    { name: 'Asics', logo: '/assets/images/hero2/Asics_Logo.webp' },
    { name: 'Adidas', logo: '/assets/images/hero2/Adidas_Logo.svg' },
    { name: 'Ceat', logo: '/assets/images/hero2/Ceat_Logo.svg' },
    { name: 'DSC', logo: '/assets/images/hero2/DSC_Logo.svg' },
    { name: 'EM', logo: '/assets/images/hero2/EM_Logo.svg' },
    { name: 'GM', logo: '/assets/images/hero2/GM_Logo.svg' },
    { name: 'Forma', logo: '/assets/images/hero2/Forma_Logo.svg' },
    { name: 'Masuri', logo: '/assets/images/hero2/Masuri_Logo.svg' },
    { name: 'NB', logo: '/assets/images/hero2/NB_Logo.webp' },
    { name: 'Oakley', logo: '/assets/images/hero2/Oakley_Logo.svg' },
    { name: 'Reebok', logo: '/assets/images/hero2/Reebok_Logo.svg' },
    { name: 'Puma', logo: '/assets/images/hero2/Puma_Logo.svg' },
    { name: 'Spartans', logo: '/assets/images/hero2/Spartan_Logo.svg' },
    { name: 'Stanford', logo: '/assets/images/hero2/Stanford_Logo.svg' },
    { name: 'Somi', logo: '/assets/images/hero2/Somi_Logo.svg' },
    { name: 'Vampire Bas', logo: '/assets/images/hero2/Vampire_bas_Logo.svg' },
    { name: 'Gortonshire', logo: '/assets/images/hero2/Gortonshire_Logo.svg' },
  ];

  // Auto-scroll logic for 2 seconds gap
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          // Calculate step based on items (6 visible items)
          const step = clientWidth / 6; 
          
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
          } else {
            scrollRef.current.scrollBy({ left: step, behavior: 'smooth' });
          }
        }
      }, 1000); // Increased timing to 3 seconds gap
    }
    return () => clearInterval(interval);
  }, [isPaused, brands.length]);

  // Triple the brands for seamless infinite feel
  const scrollBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A1D1D] text-center mb-12 antialiased">
          Shop By Brand
        </h2>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-hidden whitespace-nowrap gap-6 py-8"
          >
            {scrollBrands.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                onClick={() => navigate(`/collection/all?brand=${encodeURIComponent(brand.name)}`)}
                className="flex flex-col items-center group/item shrink-0 w-[calc(100%/2-1.5rem)] md:w-[calc(100%/4-1.5rem)] lg:w-[calc(100%/6-1.5rem)]"
              >
                {/* Decreased border radius from rounded-full to rounded-2xl */}
                <div className="w-full aspect-square rounded-2xl border border-gray-100 flex items-center justify-center p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover/item:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer bg-white">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain group-hover/item:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${brand.name}&background=f3f4f6&color=002B49&bold=true&rounded=true`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByBrand;
