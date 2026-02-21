import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleFilterNavigate = (category, filterType, filterValue) => {
    const categoryPath = category.toLowerCase().replace(/\s+/g, '-');
    let url = `/collection/${categoryPath}`;
    if (filterType && filterValue && filterValue !== 'View all') {
      url += `?${filterType}=${encodeURIComponent(filterValue)}`;
    }
    navigate(url);
  };

  const menuItems = [
    { 
      name: 'Bats', 
      hasDropdown: true,
      megaMenu: {
        brands: {
          logos: [
            { src: '/assets/images/navbar/bat_brand.jpg' },
          ],
          links: ['SG', 'SS', 'DSC', 'Gortonshire', 'Gray Nicolls', 'View all']
        },
        sizes: {
          image: '/assets/images/navbar/bat_size.jpg',
          links: ['Senior', 'Junior']
        },
        willow: {
          links: ['English Willow', 'Kashmir Willow'],
          image: '/assets/images/navbar/bat_willows.jpg'
        }
      }
    },
    { 
      name: 'Protection', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'PADS',
            image: '/assets/images/navbar/pads.webp',
            links: ['Batting Pads', 'Wicket Keeping Pads']
          },
          {
            title: 'GLOVES',
            image: '/assets/images/navbar/gloves.jpg',
            links: ['Batting Gloves', 'Wicket Keeping Gloves', 'Inner Gloves']
          },
          {
            title: 'HELMET',
            image: '/assets/images/navbar/helmet.webp',
            links: ['Titanium Grill', 'Steel Grill']
          },
          {
            title: 'GUARD',
            image: '/assets/images/navbar/guards.webp',
            links: ['Abdominal Guard', 'Chest Guard', 'Thigh Guard', 'Elbow Guard']
          }
        ]
      }
    },
    { 
      name: 'Kitbags', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'Duffle',
            image: '/assets/images/navbar/duffle-cricket-bag.webp',
            links: []
          },
          {
            title: 'Trolley',
            image: '/assets/images/navbar/trolley_cricket_kitbag.webp',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Clothings', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'Caps / Hats',
            image: '/assets/images/navbar/caps.webp',
            links: []
          },
          {
            title: 'Cricket Whites',
            image: '/assets/images/navbar/cricket-whites-collection.webp',
            links: []
          },
          {
            title: 'Socks',
            image: '/assets/images/navbar/socks.webp',
            links: []
          },
          {
            title: 'Trunk / Briefs',
            image: '/assets/images/navbar/trunks.webp',
            links: []
          },
        ]
      }
    },
    { 
      name: 'Balls', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'Red Cricket Ball',
            image: '/assets/images/navbar/red-ball-collection.webp',
            links: []
          },
          {
            title: 'White Cricket Balls',
            image: '/assets/images/navbar/white-ball.webp',
            links: []
          },
          {
            title: 'Pink Cricket Ball',
            image: '/assets/images/navbar/pink_ball.webp',
            links: []
          },
          {
            title: 'Training Cricket Ball',
            image: '/assets/images/navbar/tennis_ball.webp',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Shoes', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'Batting Shoes',
            image: '/assets/images/navbar/batting_shoes.webp',
            links: []
          },
          {
            title: 'Bowling Shoes',
            image: '/assets/images/navbar/bowling-shoes.jpg',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Accessories', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'SUNGLASSES',
            image: '/assets/images/navbar/sunglasses.webp',
            links: []
          },
          {
            title: 'BAT CARE',
            image: '/assets/images/navbar/bat_care.webp',
            links: []
          },
          {
            title: 'TRAINING',
            image: '/assets/images/navbar/training.webp',
            links: []
          }
        ]
      }
    },
    { 
      name: 'Kit Packages', 
      hasDropdown: true,
      megaMenu: {
        sections: [
          {
            title: 'SENIOR COMPLETE KIT',
            image: '/assets/images/navbar/senior_kitbag.webp',
            links: []
          },
          {
            title: 'JUNIOR COMPLETE KIT',
            image: '/assets/images/navbar/junior_kitbag.webp',
            links: []
          }
        ]
      }
    },
    { name: 'Sale', isSpecial: true },
  ];

  return (
    <nav className="w-full border-t border-b border-gray-100 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                if (item.name === 'Sale') {
                  navigate('/sale');
                } else if (item.hasDropdown) {
                  // Standardize category name for route (e.g., 'Kit Packages' -> 'kit-packages')
                  const categoryPath = item.name.toLowerCase().replace(/\s+/g, '-');
                  navigate(`/collection/${categoryPath}`);
                }
              }}
              className="group flex items-center gap-1 cursor-pointer font-medium text-[15px] hover:text-[#002B49] transition-colors py-4"
            >
              <div className="flex items-center gap-1">
                <span className={item.isSpecial ? 'text-red-600 font-bold' : 'text-gray-800'}>
                  {item.name}
                </span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" />}
              </div>
              
              {/* Mega Menu for Bats, Protection, Kitbags, Clothings, Balls, Shoes, Accessories or Kit Packages */}
              {item.hasDropdown && (item.name === 'Bats' || item.name === 'Protection' || item.name === 'Kitbags' || item.name === 'Clothings' || item.name === 'Balls' || item.name === 'Shoes' || item.name === 'Accessories' || item.name === 'Kit Packages') && (
                <div className="absolute top-[100%] left-0 w-full bg-white shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-t border-gray-100 hidden group-hover:block z-20 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="max-w-7xl mx-auto px-8 py-6 flex gap-6 justify-center max-h-[350px] overflow-y-auto scrollbar-hide bg-white relative border-b border-gray-50">
                    
                    {/* Bats Mega Menu */}
                    {item.name === 'Bats' && (
                      <>
                        {/* Shop By Brand */}
                        <div className="flex-1 max-w-[300px] text-center">
                          <div 
                            className="flex items-center justify-center gap-4 mb-4 h-40 cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats'); }}
                          >
                            {item.megaMenu.brands.logos.map((logo, index) => (
                              <img 
                                key={index}
                                src={logo.src} 
                                alt="Bat Brand" 
                                className="max-h-full object-contain pointer-events-none" 
                              />
                            ))}
                          </div>
                          <h3 
                            className="text-[11px] font-bold text-gray-900 tracking-[0.25em] mb-6 uppercase cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats'); }}
                          >
                            Shop By Brand
                          </h3>
                          <ul className="space-y-2 text-center">
                            {item.megaMenu.brands.links.map(link => (
                              <li 
                                key={link} 
                                onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats', 'brand', link); }}
                                className={`text-[14px] cursor-pointer ${link === 'View all' ? 'font-bold text-[#4A1D1D]' : 'text-gray-800'}`}
                              >
                                {link}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Shop By Size */}
                        <div className="flex-1 max-w-[300px] text-center border-l border-gray-100 pl-8">
                          <div 
                            className="flex items-center justify-center gap-4 mb-4 h-40 cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats'); }}
                          >
                            <img 
                              src={item.megaMenu.sizes.image} 
                              alt="Bat Sizes" 
                              className="max-h-full object-contain" 
                            />
                          </div>
                          <h3 
                            className="text-[11px] font-bold text-gray-900 tracking-[0.25em] mb-6 uppercase cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats'); }}
                          >
                            Shop By Size
                          </h3>
                          <ul className="space-y-3">
                            {item.megaMenu.sizes.links.map(link => (
                              <li 
                                key={link} 
                                onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats', 'sizeType', link.toLowerCase()); }}
                                className="text-[15px] text-gray-800 cursor-pointer"
                              >
                                {link}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Shop By Willow */}
                        <div className="flex-1 max-w-[300px] text-center border-l border-gray-100 pl-8">
                          <div 
                            className="flex items-center justify-center gap-4 mb-4 h-40 cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats'); }}
                          >
                            <img 
                              src={item.megaMenu.willow.image} 
                              alt="Cricket Bat" 
                              className="max-h-full object-contain" 
                            />
                          </div>
                          <h3 
                            className="text-[11px] font-bold text-gray-900 tracking-[0.25em] mb-6 uppercase cursor-pointer"
                            onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats'); }}
                          >
                            Shop By Willow
                          </h3>
                          <ul className="space-y-3">
                            {item.megaMenu.willow.links.map(link => (
                              <li 
                                key={link} 
                                onClick={(e) => { e.stopPropagation(); handleFilterNavigate('Bats', 'style', link); }}
                                className="text-[15px] text-gray-800 cursor-pointer"
                              >
                                {link}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}

                    {/* Protection, Kitbags, Clothings, Balls, Shoes, Accessories or Kit Packages Mega Menu */}
                    {(item.name === 'Protection' || item.name === 'Kitbags' || item.name === 'Clothings' || item.name === 'Balls' || item.name === 'Shoes' || item.name === 'Accessories' || item.name === 'Kit Packages') && item.megaMenu.sections.map((section, idx) => (
                      <div key={idx} className={`flex-1 max-w-[280px] text-center ${idx !== 0 ? 'border-l border-gray-100 pl-6' : ''}`}>
                        <div 
                          className="h-40 mb-3 flex items-center justify-center cursor-pointer"
                          onClick={(e) => { e.stopPropagation(); handleFilterNavigate(item.name, 'style', section.title); }}
                        >
                          <img 
                            src={section.image} 
                            alt={section.title} 
                            className="max-h-full object-contain pointer-events-none" 
                            onError={(e) => { e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' }}
                          />
                        </div>
                        <h3 
                          className="text-[10px] font-bold text-gray-900 tracking-[0.2em] mb-4 uppercase cursor-pointer"
                          onClick={(e) => { e.stopPropagation(); handleFilterNavigate(item.name, 'style', section.title); }}
                        >
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.links.map(link => (
                            <li 
                              key={link} 
                              onClick={(e) => { e.stopPropagation(); handleFilterNavigate(item.name, 'style', link); }}
                              className="text-[14px] text-gray-800 cursor-pointer"
                            >
                              {link}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-[-15px] left-0 w-full h-[15px] bg-transparent" />
                  <div className="h-6 w-full bg-transparent" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
