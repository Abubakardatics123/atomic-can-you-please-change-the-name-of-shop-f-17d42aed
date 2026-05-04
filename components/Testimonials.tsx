import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "London, UK",
    rating: 5,
    text: "Toby's Shop is my go-to for everything. The quality is consistently great and delivery is always faster than expected. Highly recommend!",
    avatar: "https://mormonartist.net/images/interviews/sarah-m-eden/sarah-m-eden-01.jpg",
  },
  {
    name: "James T.",
    location: "Manchester, UK",
    rating: 5,
    text: "I ordered the wireless headphones and they arrived the next day. Sound quality is incredible for the price. Will definitely be ordering again.",
    avatar: "https://s3.amazonaws.com/arc-authors/cmg/8adde958-cd42-477c-9467-0ee150778a71.png",
  },
  {
    name: "Priya K.",
    location: "Birmingham, UK",
    rating: 5,
    text: "Love the variety of products available. The home décor section is especially good — found some beautiful pieces I couldn't find anywhere else.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFjb0oGgSOYPA/profile-displayphoto-shrink_200_200/B4DZZCoiL8G8AY-/0/1744874647031?e=2147483647&v=beta&t=iz-x6HzQIMtn31vtR_7FQLb0f3k09LJMyTJzm42hHDI",
  },
  {
    name: "Oliver R.",
    location: "Edinburgh, UK",
    rating: 4,
    text: "Great customer service when I had a question about my order. The team was super responsive and sorted everything out quickly. Solid shop.",
    avatar: "https://f4.bcbits.com/img/0040740370_10.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Thousands of happy shoppers trust Toby&apos;s Shop every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < t.rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300 fill-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover bg-indigo-100"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
