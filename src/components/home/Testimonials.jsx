import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[#F4F4F4] p-6 rounded-md min-w-[300px] flex-1">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.avatarColor}`}>
            {review.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-gray-800 uppercase leading-tight">
              {review.name}
            </h4>
            <p className="text-[11px] text-gray-500">{review.date}</p>
          </div>
        </div>
        <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className="w-5 h-5" />
      </div>
      
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 border-none" />
        ))}
      </div>
      
      <p className="text-[13px] text-gray-700 leading-relaxed line-clamp-3">
        {review.comment}
      </p>
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'aBHISHEK cHAUHAN',
      date: 'Jan 12, 2026',
      comment: 'Great experience and nice dealing',
      avatarColor: 'bg-red-700',
    },
    {
      id: 2,
      name: 'ABHISHEK CHAUHAN',
      date: 'Jan 12, 2026',
      comment: 'A brilliant collection of Cricket goods.!.',
      avatarColor: 'bg-blue-800',
    },
    {
      id: 3,
      name: 'Sampreet Sidhu',
      date: 'Jan 11, 2026',
      comment: 'Very nice shop for all cricket enthusiasts.',
      avatarColor: 'bg-stone-700',
    },
    {
      id: 4,
      name: 'Saainaa Chauhan',
      date: 'Jan 11, 2026',
      comment: 'Very nice bats and nice owner',
      avatarColor: 'bg-orange-600',
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Summary */}
        <div className="flex flex-col items-center text-center mb-12">
          <h3 className="text-lg font-bold text-[#333] mb-1">Excellent</h3>
          <div className="flex gap-1 mb-1">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <div className="relative">
               <Star className="w-5 h-5 text-yellow-400" />
               <div className="absolute inset-0 overflow-hidden w-[50%]">
                 <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
               </div>
            </div>
          </div>
          <p className="text-[12px] text-gray-500 mb-2">Based on 687 Reviews</p>
          <div className="flex items-center gap-1">
            <span className="text-gray-400 font-medium text-lg">Google</span>
          </div>
        </div>

        {/* Reviews Slider Area */}
        <div className="relative group">
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-1 text-gray-400 hover:text-gray-800 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-4 overflow-hidden py-2">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1 text-gray-400 hover:text-gray-800 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
