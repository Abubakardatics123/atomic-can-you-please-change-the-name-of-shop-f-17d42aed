import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            New Season Arrivals
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Welcome to <br />
            <span className="text-indigo-600">Toby&apos;s Shop</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mb-8">
            Discover handpicked products across fashion, tech, home, and lifestyle — all curated with care and delivered fast to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
            >
              Shop Now <ArrowRight size={18} />
            </a>
            <a
              href="#deals"
              className="inline-flex items-center justify-center gap-2 border border-indigo-300 text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View Deals
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 justify-center md:justify-start text-sm text-gray-500">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold text-gray-900">12k+</span>
              <span>Happy Customers</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold text-gray-900">500+</span>
              <span>Products</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold text-gray-900">4.9★</span>
              <span>Avg. Rating</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-indigo-200 rounded-3xl rotate-3 opacity-40" />
            <img
              src="https://static.wikia.nocookie.net/thomas-and-friends-all-engines-go/images/2/24/MainToby.png/revision/latest?cb=20230902154345"
              alt="Toby's Shop featured products"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
