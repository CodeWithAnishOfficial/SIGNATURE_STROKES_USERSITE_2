import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ChevronRight, Minus, Plus, ShieldCheck, CreditCard, ChevronDown, FileText, RefreshCw, Truck, Award, MessageSquare, Info, Star } from 'lucide-react';
import { allProducts } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState('description');

  const product = allProducts.find(p => p.id === parseInt(id)) || allProducts[0];

  const accordionItems = [
    { id: 'description', title: 'DESCRIPTION', icon: FileText, content: product.description || 'No description available for this product.' },
    { id: 'returns', title: 'EASY RETURNS', icon: RefreshCw, content: 'We offer a 7-day easy return policy for all unused items in their original packaging.' },
    { id: 'shipping', title: 'SHIPPING & DELIVERY', icon: Truck, content: 'Standard shipping takes 3-5 business days. Express shipping options available at checkout.' },
    { id: 'payments', title: 'SECURE PAYMENTS', icon: CreditCard, content: 'We support all major credit cards, UPI, and net banking with secure encryption.' },
    { id: 'authentic', title: 'AUTHENTIC PRODUCT', icon: Award, content: '100% genuine products sourced directly from brands and authorized distributors.' },
    { id: 'additional', title: 'ADDITIONAL INFORMATION', icon: MessageSquare, content: 'For bulk orders or specific customization, please contact our support team.' }
  ];

  const upsellProducts = [
    {
      name: 'Champ Shoe Cricket Nails Metal 1 Pc',
      price: 0.99,
      oldPrice: 0.99,
      discount: '16%',
      image: 'https://www.cricketershop.com/cdn/shop/products/Champ-Shoe-Cricket-Nails-Metal-1-Pc_small.jpg'
    },
    {
      name: 'Shrey Original Match Cricket Socks Size',
      price: 3.99,
      image: 'https://www.cricketershop.com/cdn/shop/products/Shrey-Original-Match-Cricket-Socks-Size_small.jpg'
    },
    {
      name: 'DSC Cricket Rubber Studs 24 pcs',
      price: 5.99,
      rating: 5,
      reviews: 1,
      image: 'https://www.cricketershop.com/cdn/shop/products/DSC-Cricket-Rubber-Studs-24-pcs_small.jpg'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-500 mb-8">
          <span className="hover:text-black cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-black cursor-pointer">2025 New Collection</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Image Gallery - 7 columns */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 w-20">
              {(product.images || [product.image]).map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`border-[1.5px] rounded-sm overflow-hidden aspect-square ${selectedImage === idx ? 'border-gray-800' : 'border-gray-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-1" />
                </button>
              ))}
              <button className="flex items-center justify-center p-2 text-gray-400 hover:text-black">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-[#F5F6F7] rounded-sm overflow-hidden aspect-square relative flex items-center justify-center">
              <img 
                src={(product.images || [product.image])[selectedImage]} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain p-12 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Details - 5 columns */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
              {product.name}
            </h1>
            <p className="text-[13px] text-gray-500 mb-6 uppercase tracking-wider">
              SKU - {product.sku}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-black">₹{product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <>
                  <span className="text-gray-400 line-through text-lg">₹{product.oldPrice.toLocaleString()}</span>
                  <span className="text-red-600 font-semibold italic">Save {product.save || product.discount}</span>
                </>
              )}
            </div>

            <p className="text-[13px] text-gray-600 mb-6 border-b border-gray-100 pb-6">
              Tax included. <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
            </p>

            {/* Color Selection */}
            {product.colors && (
              <div className="mb-8 border-b border-gray-100 pb-6">
                <label className="text-[12px] text-gray-700 font-bold uppercase tracking-widest mb-4 block">Color</label>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, idx) => (
                    <button 
                      key={idx}
                      className="w-8 h-8 rounded-full border border-gray-200 hover:border-black transition-colors p-0.5"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-gray-200 w-fit rounded-sm">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input 
                    type="text" 
                    value={quantity} 
                    readOnly 
                    className="w-12 text-center text-sm font-medium focus:outline-none"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex-1 border-2 border-black py-3 font-bold text-sm tracking-[0.2em] hover:bg-black hover:text-white transition-all uppercase rounded-sm">
                  ADD TO CART
                </button>
                <button className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:border-black transition-colors rounded-sm group">
                  <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                </button>
              </div>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-px border-b border-gray-100 mb-8">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-t border-gray-100">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                    className="w-full py-4 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="w-6 h-6 text-gray-800" strokeWidth={1.5} />
                      <span className="font-bold text-[13px] tracking-[0.15em] uppercase text-gray-800">{item.title}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${activeAccordion === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === item.id && (
                    <div className="pb-6 text-[14px] text-gray-600 leading-relaxed px-10">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Delivery Checker */}
            <div className="mb-10">
              <label className="text-[12px] text-gray-700 font-medium mb-3 block">Estimated Delivery Date & COD Checker</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Enter postal code text"
                  className="flex-1 border border-gray-300 rounded-sm px-4 py-2 text-[14px] focus:outline-none focus:border-gray-400"
                />
                <button className="px-8 py-2 border border-gray-800 text-[12px] font-bold tracking-widest hover:bg-gray-800 hover:text-white transition-all uppercase rounded-sm">
                  CHECK
                </button>
              </div>
            </div>

            {/* Buy It With */}
            <div className="mb-10">
              <h3 className="text-[14px] font-bold tracking-[0.15em] uppercase text-gray-900 mb-6">BUY IT WITH</h3>
              <div className="space-y-6">
                {upsellProducts.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-white border border-gray-100 rounded-sm p-1">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[13px] text-gray-800 font-medium hover:text-blue-600 cursor-pointer mb-1">{item.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-[13px] font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                        {item.oldPrice && (
                          <span className="text-[12px] text-gray-400 line-through">₹{item.oldPrice.toLocaleString()}</span>
                        )}
                        {item.discount && (
                          <span className="text-[11px] text-red-600 font-bold italic">Save {item.discount}</span>
                        )}
                      </div>
                      {item.rating && (
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < item.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-200'}`} />
                          ))}
                          <span className="text-[11px] text-gray-500 ml-1">{item.reviews} review</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-20 border-t border-gray-100 pt-16 text-center">
          <h2 className="text-[28px] font-serif text-[#4A1D1D] mb-8">Customer Reviews</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 border-b border-gray-100 pb-16">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400" strokeWidth={1} />
                ))}
              </div>
              <p className="text-[14px] text-gray-500">Be the first to write a review</p>
            </div>
            <div className="h-12 w-[1px] bg-gray-200 hidden md:block" />
            <button className="px-10 py-3 border border-gray-800 text-[13px] font-bold tracking-widest hover:bg-gray-800 hover:text-white transition-all uppercase rounded-sm">
              Write a review
            </button>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-[28px] font-serif text-[#4A1D1D] text-center mb-12">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: 'Adidas 22 Yard White Royal Blue Spikes Cricket Shoes',
                price: 152.99,
                oldPrice: 179.99,
                discount: 'Save 15%',
                image: 'https://www.cricketershop.com/cdn/shop/products/adidas-22-yard-white-royal-blue-spikes-cricket-shoes_360x.jpg'
              },
              {
                name: 'Adidas Adi Power Incurza Spikes Cricket Shoes',
                price: 216.99,
                oldPrice: 255.99,
                discount: 'Save 15%',
                image: 'https://www.cricketershop.com/cdn/shop/products/adidas-adi-power-incurza-spikes-cricket-shoes_360x.jpg'
              },
              {
                name: 'Adidas 22 Yard White Red Gold Spikes Cricket Shoes',
                price: 123.99,
                oldPrice: 164.99,
                discount: 'Save 25%',
                rating: 5,
                reviews: 1,
                image: 'https://www.cricketershop.com/cdn/shop/products/adidas-22-yard-white-red-gold-spikes-cricket-shoes_360x.jpg'
              },
              {
                name: 'Adidas Adi Power Incurza Spikes White Blue Cricket Shoes',
                price: 216.99,
                oldPrice: 255.99,
                discount: 'Save 15%',
                image: 'https://www.cricketershop.com/cdn/shop/products/adidas-adi-power-incurza-spikes-white-blue-cricket-shoes_360x.jpg'
              },
              {
                name: 'Adidas Adi Power Vector 20 Spikes Cricket Shoes Red and Gold',
                price: 204.99,
                oldPrice: 240.99,
                discount: 'Save 15%',
                rating: 5,
                reviews: 1,
                image: 'https://www.cricketershop.com/cdn/shop/products/adidas-adi-power-vector-20-spikes-cricket-shoes-red-and-gold_360x.jpg'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-full aspect-square bg-[#F5F6F7] rounded-sm p-4 mb-4 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-[13px] text-gray-800 font-medium mb-2 line-clamp-2 h-10 px-2 leading-relaxed">
                  {item.name}
                </h3>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                    <span className="text-[12px] text-gray-400 line-through">₹{item.oldPrice.toLocaleString()}</span>
                  </div>
                  <span className="text-[11px] text-red-600 font-bold italic mb-1">{item.discount}</span>
                  {item.rating && (
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < item.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <span className="text-[11px] text-gray-500">{item.reviews} review</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Our Stores Banner */}
        <div className="mt-20 relative h-[400px] w-full overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067" 
            alt="Cricket Store" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Visit Our Stores</h2>
            <p className="text-white/90 text-[16px] max-w-2xl mb-8 leading-relaxed">
              Find the best cricket gear at our physical locations across the country.
            </p>
            <button className="bg-white text-black px-10 py-3 rounded-full text-[13px] font-bold tracking-widest hover:bg-[#002B49] hover:text-white transition-all uppercase">
              Find Stores
            </button>
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="mt-20">
          <h2 className="text-[28px] font-serif text-[#4A1D1D] text-center mb-12">Recently viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                name: 'Adidas 22 Yard Cloud White Aurora Onix Core Black Spikes Cricket Shoes',
                price: 152.99,
                oldPrice: 179.99,
                discount: 'Save 15%',
                image: 'https://www.cricketershop.com/cdn/shop/products/adidas-22-yard-cloud-white-aurora-onix-core-black-spikes-cricket-shoes_360x.jpg'
              },
              {
                name: 'Gray Nicolls GN 5 Tempesta English Willow Cricket Bat Size',
                price: 216.99,
                oldPrice: 240.99,
                discount: 'Save 10%',
                image: 'https://www.cricketershop.com/cdn/shop/products/gray-nicolls-gn-5-tempesta-english-willow-cricket-bat-size-sh_360x.jpg'
              },
              {
                name: 'Gray-Nicolls Legend English Willow Cricket Bat Size SH',
                price: 2789.99,
                image: 'https://www.cricketershop.com/cdn/shop/products/gray-nicolls-legend-english-willow-cricket-bat-size-sh_360x.jpg'
              },
              {
                name: 'SG X ISPL Swing Cricket Ball',
                price: 1.99,
                oldPrice: 1.99,
                discount: 'Save 15%',
                image: 'https://www.cricketershop.com/cdn/shop/products/sg-x-ispl-swing-cricket-ball_360x.jpg'
              },
              {
                name: 'SG KLR Class English Willow Cricket Bat Size SH',
                price: 841.99,
                oldPrice: 1052.99,
                discount: 'Save 20%',
                image: 'https://www.cricketershop.com/cdn/shop/files/SG-KLR-Class-English-Willow-Cricket-Bat-Size-SH_360x.jpg'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-full aspect-square bg-[#F5F6F7] rounded-sm p-4 mb-4 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-[13px] text-gray-800 font-medium mb-2 line-clamp-2 h-10 px-2 leading-relaxed">
                  {item.name}
                </h3>
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-bold text-gray-900">${item.price} CAD</span>
                    {item.oldPrice && <span className="text-[12px] text-gray-400 line-through">${item.oldPrice} CAD</span>}
                  </div>
                  {item.discount && <span className="text-[11px] text-red-600 font-bold italic mb-1">{item.discount}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
    </div>
  );
};

export default ProductDetail;
