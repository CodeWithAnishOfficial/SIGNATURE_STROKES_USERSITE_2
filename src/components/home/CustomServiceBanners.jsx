import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CustomServiceBanners = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full pb-16 bg-[#F8F8F8] overflow-hidden">
      <div className="flex justify-center py-10 bg-white">
        <button className="border border-black px-10 py-2 rounded-full font-bold text-[12px] tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
          VIEW ALL
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Custom Bats Banner */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[450px] overflow-hidden group rounded-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2000&auto=format&fit=crop" 
            alt="Custom Bats" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#E8D8C3]/80 flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-2xl md:text-4xl font-black text-[#1A1A1A] mb-2 uppercase leading-tight">
              Custom Cricket Bats<br />Made In-House
            </h3>
            <div className="bg-[#D4A633] px-4 py-2 mb-8 inline-block">
               <p className="text-[12px] md:text-[14px] font-bold text-[#1A1A1A] tracking-wider uppercase">
                 Direct from our bat factory - <br className="hidden md:block" /> tailored to your game
               </p>
            </div>
            <button 
              onClick={() => navigate('/customised-bats')}
              className="bg-white text-black px-10 py-2.5 rounded-full font-bold text-xs tracking-[0.2em] shadow-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              SHOP THIS
            </button>
          </div>
        </motion.div>

        {/* Custom Jerseys Banner */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[350px] md:h-[450px] overflow-hidden group rounded-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
            alt="Custom Jerseys" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end pb-12 text-white p-6">
            <div className="text-center mb-8">
               <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-2">
                 <span className="text-green-500">CUSTOMISED</span>
               </h3>
               <h4 className="text-2xl md:text-4xl font-black tracking-[0.2em] text-blue-400">JERSEYS</h4>
            </div>
            
            <div className="text-right self-end mb-6 text-[10px] md:text-[12px] font-bold tracking-widest leading-relaxed">
               <p>BEST FABRIC</p>
               <p>UNIQUE DESIGNS</p>
               <p>LATEST PRINTING TECHNOLOGY</p>
            </div>

            <button 
              onClick={() => navigate('/customized-jerseys')}
              className="bg-white text-black px-10 py-2.5 rounded-full font-bold text-xs tracking-[0.2em] shadow-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              SHOP THIS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomServiceBanners;
