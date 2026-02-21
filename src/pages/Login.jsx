import { motion } from 'framer-motion';

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-4 overflow-hidden fixed inset-0">
      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[440px] bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12 z-10"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#002B49] p-2 rounded-lg">
            <img src="https://img.icons8.com/color/48/shield.png" alt="Logo" className="w-10 h-10" />
          </div>
        </div>

        {/* Headers */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign in</h1>
        <p className="text-sm text-gray-500 mb-8 font-medium">Sign in or create an account</p>

        {/* Shop Button */}
        <button className="w-full bg-[#5C3CF5] text-white py-3.5 rounded-lg font-bold text-[15px] mb-4 hover:bg-[#4A2ED1] transition-colors shadow-sm">
          Continue with shop
        </button>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <button className="flex items-center justify-center py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-6 h-6" />
          </button>
          <button className="flex items-center justify-center py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" className="w-6 h-6" />
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-400">or</span>
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-[#0061D5] text-white py-3.5 rounded-lg font-bold text-[15px] hover:bg-[#0056BD] transition-colors shadow-md">
          Continue
        </button>
      </motion.div>

      {/* Footer Links - Adjusted for visibility */}
      <div className="absolute bottom-6 flex gap-6 text-[13px] text-[#0061D5] font-medium z-20">
        <a href="#" className="hover:underline transition-all">Privacy policy</a>
        <a href="#" className="hover:underline transition-all">Terms of service</a>
      </div>
    </div>
  );
};

export default Login;
