const categories = [
  { name: "Fashion", emoji: "👗", description: "Clothing, shoes & accessories", href: "#", image: "https://static01.nyt.com/images/2024/02/06/multimedia/FASHION-PREVIEW-gmkt/FASHION-PREVIEW-gmkt-superJumbo.jpg" },
  { name: "Electronics", emoji: "💻", description: "Gadgets, phones & computers", href: "#", image: "https://static01.nyt.com/images/2024/02/06/multimedia/FASHION-PREVIEW-gmkt/FASHION-PREVIEW-gmkt-superJumbo.jpg" },
  { name: "Home & Living", emoji: "🏠", description: "Furniture, décor & kitchen", href: "#", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Arduino_ftdi_chip-1.jpg" },
  { name: "Sports", emoji: "⚽", description: "Gear, apparel & equipment", href: "#", image: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100070607960431" },
  { name: "Beauty", emoji: "✨", description: "Skincare, makeup & wellness", href: "#", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/500px-Youth-soccer-indiana.jpg" },
  { name: "Toys & Kids", emoji: "🧸", description: "Games, learning & fun", href: "#", image: "https://static.independent.co.uk/2022/04/21/21/health%20and%20beauty.jpg?width=1200&height=800&crop=1200:800" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Shop by Category</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Browse our wide selection of categories and find exactly what you&apos;re looking for.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-2xl p-5 transition-all text-center shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden mb-3 bg-indigo-100 flex items-center justify-center">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-gray-800 group-hover:text-indigo-700 text-sm">{cat.name}</span>
              <span className="text-xs text-gray-400 mt-1 leading-snug">{cat.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
