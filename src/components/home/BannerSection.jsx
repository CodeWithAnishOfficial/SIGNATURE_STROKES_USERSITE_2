import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BannerSection = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full pb-16 overflow-hidden bg-white">
      {/* Top Two Banners */}
      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Women Range */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[450px] overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop" 
            alt="Women Range" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white">
            <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Women Range
            </h3>
            <button 
              onClick={() => navigate('/women-range')}
              className="bg-white text-black px-8 py-2 rounded-full font-bold text-sm tracking-widest hover:bg-[#002B49] hover:text-white transition-all duration-300"
            >
              SHOP NOW
            </button>
          </div>
        </motion.div>

        {/* Junior Range */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[450px] overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Junior Range" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white">
            <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">
              Junior Range
            </h3>
            <button 
              onClick={() => navigate('/junior-cricket')}
              className="bg-white text-black px-8 py-2 rounded-full font-bold text-sm tracking-widest hover:bg-[#002B49] hover:text-white transition-all duration-300"
            >
              SHOP NOW
            </button>
          </div>
        </motion.div>
      </div>

      {/* Large Bottom Banner */}
      <div className="max-w-[1400px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-[300px] md:h-[500px] overflow-hidden group"
        >
          <img 
            src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000&auto=format&fit=crop" 
            alt="Ground Equipments" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
            <span className="text-lg md:text-2xl font-medium tracking-[0.4em] mb-4 text-center">
              STRIKE WITH CONFIDENCE
            </span>
            <h2 className="text-4xl md:text-8xl font-black tracking-tight text-center uppercase">
              Ground Equipments
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
