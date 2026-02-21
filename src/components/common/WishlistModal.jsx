import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WishlistModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white shadow-2xl rounded-sm overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-[#002B49] fill-[#002B49]" />
              <h2 className="text-xl md:text-2xl font-bold text-[#333] tracking-tight">MY WISHLIST</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="px-8 py-12 flex flex-col items-center justify-center text-center">
            <p className="text-gray-600 text-lg mb-8 font-medium">
              Please login to save your wishlist across devices.
            </p>
            <button
              onClick={() => {
                onClose();
                navigate('/login');
              }}
              className="bg-[#002B49] text-white px-12 py-3 font-bold text-sm tracking-widest hover:bg-black transition-colors"
            >
              LOGIN
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default WishlistModal;
