const ContactUs = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#4A1D1D] text-center mb-16">
          Contact us
        </h1>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 block">
                NAME
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors rounded-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 block">
                EMAIL
              </label>
              <input 
                type="email" 
                className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors rounded-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 block">
              PHONE NUMBER
            </label>
            <input 
              type="tel" 
              className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors rounded-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-900 block">
              MESSAGE
            </label>
            <textarea 
              rows="8"
              className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors rounded-sm resize-none"
            ></textarea>
          </div>

          <div className="flex flex-col items-center gap-6 pt-4">
            <button 
              type="submit"
              className="border border-black text-black px-12 py-3 text-sm font-bold tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 uppercase"
            >
              SEND
            </button>
            <p className="text-[11px] text-gray-500 text-center max-w-md leading-relaxed">
              This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
