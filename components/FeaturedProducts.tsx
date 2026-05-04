import { Star, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    price: 89.99,
    originalPrice: 129.99,
    badge: "Best Seller",
    rating: 4.8,
    reviews: 342,
    image: "https://m.media-amazon.com/images/I/51f7KKP25PL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 149.0,
    originalPrice: null,
    badge: "New",
    rating: 4.9,
    reviews: 218,
    image: "https://www.peugeotwatches.com/cdn/shop/products/2059G-FV.jpg?v=1633106380&width=1500",
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 54.99,
    originalPrice: 74.99,
    badge: "Sale",
    rating: 4.7,
    reviews: 509,
    image: "https://m.media-amazon.com/images/I/71hvGkBMFNL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Organic Cotton Tote Bag",
    price: 24.99,
    originalPrice: null,
    badge: null,
    rating: 4.6,
    reviews: 134,
    image: "https://www.publicgoods.com/cdn/shop/products/cotton_tote_bag_packshot_800x.jpg?v=1752261701",
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    originalPrice: 44.99,
    badge: "Popular",
    rating: 4.8,
    reviews: 671,
    image: "https://m.media-amazon.com/images/I/517NxAIGK9L.jpg",
  },
  {
    id: 6,
    name: "Cozy Knit Throw Blanket",
    price: 59.99,
    originalPrice: null,
    badge: "New",
    rating: 4.9,
    reviews: 287,
    image: "https://m.media-amazon.com/images/I/81B6TKMCg5S.jpg",
  },
  {
    id: 7,
    name: "Bamboo Desk Organiser",
    price: 39.99,
    originalPrice: 49.99,
    badge: "Sale",
    rating: 4.7,
    reviews: 193,
    image: "http://meedenart.com/cdn/shop/files/1-01_fd7ed8b9-6347-4d90-8f86-2aaa6de0f1b3.png?v=1732685117",
  },
  {
    id: 8,
    name: "Scented Soy Candle Set",
    price: 29.99,
    originalPrice: null,
    badge: null,
    rating: 4.8,
    reviews: 412,
    image: "https://m.media-amazon.com/images/I/71fT-Nd871L.jpg",
  },
];

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-amber-100 text-amber-700",
  New: "bg-green-100 text-green-700",
  Sale: "bg-red-100 text-red-700",
  Popular: "bg-indigo-100 text-indigo-700",
};

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-500 text-lg">
              Handpicked favourites loved by our customers.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex text-indigo-600 font-semibold hover:underline text-sm"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span
                    className={
                      "absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full " +
                      (badgeColors[product.badge] ?? "")
                    }
                  >
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow text-gray-400 hover:text-red-500 transition-colors">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs font-medium text-gray-700">
                    {product.rating}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-bold text-indigo-700">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-indigo-600 font-semibold hover:underline text-sm"
          >
            View all products →
          </a>
        </div>
      </div>
    </section>
  );
}
