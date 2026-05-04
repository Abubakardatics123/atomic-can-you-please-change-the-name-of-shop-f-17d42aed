import { ArrowRight } from "lucide-react";

export default function DealsBanner() {
  return (
    <section id="deals" className="py-16 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
              Limited Time
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Up to 40% Off — Weekend Sale
            </h2>
            <p className="text-indigo-200 text-lg max-w-lg">
              Stock up on your favourites before they sell out. Deals refresh every Friday — don&apos;t miss out.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-6 py-3 rounded-xl transition-colors shadow"
            >
              Shop the Sale <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Deal cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Electronics", discount: "30% Off", image: "https://static01.nyt.com/images/2024/02/06/multimedia/FASHION-PREVIEW-gmkt/FASHION-PREVIEW-gmkt-superJumbo.jpg" },
            { label: "Fashion", discount: "40% Off", image: "https://static01.nyt.com/images/2024/02/06/multimedia/FASHION-PREVIEW-gmkt/FASHION-PREVIEW-gmkt-superJumbo.jpg" },
            { label: "Home & Living", discount: "25% Off", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg" },
          ].map((deal) => (
            <a
              key={deal.label}
              href="#"
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-video"
            >
              <img
                src={deal.image}
                alt={deal.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-lg">{deal.label}</p>
                <p className="text-indigo-300 font-semibold text-sm">{deal.discount}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
