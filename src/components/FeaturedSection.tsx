
const FeaturedSection = () => {
  const quickCategories = [
    { name: "Women", icon: "👩", image: "bg-gradient-to-br from-pink-200 to-rose-300" },
    { name: "Men", icon: "👨", image: "bg-gradient-to-br from-blue-200 to-indigo-300" },
    { name: "Kids & Baby", icon: "👶", image: "bg-gradient-to-br from-yellow-200 to-orange-300" },
    { name: "Dresses", icon: "👗", image: "bg-gradient-to-br from-purple-200 to-violet-300", hot: true },
    { name: "Tops", icon: "👚", image: "bg-gradient-to-br from-emerald-200 to-teal-300" },
    { name: "Co-ords", icon: "👗", image: "bg-gradient-to-br from-cyan-200 to-sky-300", hot: true },
    { name: "Beachwear", icon: "👙", image: "bg-gradient-to-br from-orange-200 to-red-300" },
    { name: "Sports & Outdoor", icon: "⚽", image: "bg-gradient-to-br from-green-200 to-lime-300" },
    { name: "Underwear & Sleepwear", icon: "🩱", image: "bg-gradient-to-br from-rose-200 to-pink-300" },
    { name: "Home & Living", icon: "🏠", image: "bg-gradient-to-br from-amber-200 to-yellow-300" },
    { name: "Shoes & Bags", icon: "👠", image: "bg-gradient-to-br from-violet-200 to-purple-300" },
    { name: "Accessories", icon: "💍", image: "bg-gradient-to-br from-fuchsia-200 to-pink-300" },
    { name: "Jewelry & Watches", icon: "⌚", image: "bg-gradient-to-br from-slate-200 to-gray-300" },
    { name: "Beauty & Health", icon: "💄", image: "bg-gradient-to-br from-rose-200 to-red-300" }
  ];

  const promoBoxes = [
    { title: "Free Shipping", subtitle: "Buy $50.00 more to get", color: "bg-gradient-to-r from-blue-500 to-purple-600" },
    { title: "Sale Zone", subtitle: "Super coupons every day", color: "bg-gradient-to-r from-red-500 to-pink-600" }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Promo boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {promoBoxes.map((promo, index) => (
            <div key={index} className={`${promo.color} text-white p-6 rounded-2xl`}>
              <div className="flex items-center gap-3">
                <div className="text-3xl">
                  {index === 0 ? "🚚" : "🏷️"}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{promo.title}</h3>
                  <p className="text-sm opacity-90">{promo.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {quickCategories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`${category.image} aspect-square rounded-2xl mb-3 flex items-center justify-center text-4xl transition-transform group-hover:scale-105 shadow-sm relative overflow-hidden`}>
                {category.hot && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    HOT
                  </div>
                )}
                <span className="transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
              </div>
              <p className="text-sm font-medium text-center text-gray-700 group-hover:text-purple-600 transition-colors">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* Super Deals section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Super Deals</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              View more →
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-square rounded-2xl mb-3 flex items-center justify-center text-6xl transition-transform group-hover:scale-105 shadow-sm relative overflow-hidden">
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold">
                    -{20 + item * 5}%
                  </div>
                  🛍️
                </div>
                <p className="text-sm font-medium text-gray-700 mb-1">Fashion Item {item}</p>
                <p className="text-lg font-bold text-purple-600">${(Math.random() * 50 + 10).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
