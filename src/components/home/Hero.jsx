import { motion } from 'framer-motion';

const Hero = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop')`,
          filter: 'brightness(0.7)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-lg tracking-[0.3em] font-light mb-4 uppercase"
        >
          Step into the future
        </motion.span>
        
        <motion.h1 
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-8xl font-black mb-2 tracking-tight"
        >
          {"Adidas Footwear 2026".split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-black tracking-tight"
        >
          New Range!
        </motion.h2>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-3 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <img 
          src="https://img.icons8.com/color/48/whatsapp.png" 
          alt="WhatsApp" 
          className="w-10 h-10"
        />
      </a>
    </section>
  );
};

export default Hero;
