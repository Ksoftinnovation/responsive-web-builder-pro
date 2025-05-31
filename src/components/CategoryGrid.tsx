
const CategoryGrid = () => {
  const womenCategories = [
    { name: "View All", icon: "👗", color: "bg-gradient-to-br from-pink-100 to-purple-100" },
    { name: "Dresses", icon: "👗", color: "bg-gradient-to-br from-rose-100 to-pink-100" },
    { name: "Tops", icon: "👚", color: "bg-gradient-to-br from-blue-100 to-indigo-100" },
    { name: "T-shirts", icon: "👕", color: "bg-gradient-to-br from-green-100 to-emerald-100" },
    { name: "Tank Tops & Camis", icon: "🎽", color: "bg-gradient-to-br from-yellow-100 to-orange-100" },
    { name: "Blouses", icon: "👚", color: "bg-gradient-to-br from-purple-100 to-violet-100" },
    { name: "Bottoms", icon: "👖", color: "bg-gradient-to-br from-cyan-100 to-blue-100" },
    { name: "Co-ords", icon: "👗", color: "bg-gradient-to-br from-emerald-100 to-teal-100" },
    { name: "Beachwear", icon: "👙", color: "bg-gradient-to-br from-orange-100 to-red-100" }
  ];

  const curveCategories = [
    { name: "View All", icon: "👗", color: "bg-gradient-to-br from-pink-100 to-purple-100" },
    { name: "Dresses", icon: "👗", color: "bg-gradient-to-br from-rose-100 to-pink-100" },
    { name: "Tops", icon: "👚", color: "bg-gradient-to-br from-blue-100 to-indigo-100" },
    { name: "Bottoms", icon: "👖", color: "bg-gradient-to-br from-green-100 to-emerald-100" },
    { name: "Denim", icon: "👖", color: "bg-gradient-to-br from-indigo-100 to-blue-100" },
    { name: "Co-ords", icon: "👗", color: "bg-gradient-to-br from-purple-100 to-violet-100" },
    { name: "Sweatshirts", icon: "🧥", color: "bg-gradient-to-br from-gray-100 to-slate-100" },
    { name: "Sweaters", icon: "🧶", color: "bg-gradient-to-br from-orange-100 to-yellow-100" },
    { name: "Jackets & Coats", icon: "🧥", color: "bg-gradient-to-br from-teal-100 to-cyan-100" }
  ];

  const CategorySection = ({ title, categories, emoji }: { title: string; categories: any[]; emoji: string }) => (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        NEW IN {title}
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer text-center"
          >
            <div className={`${category.color} w-full aspect-square rounded-2xl mb-3 flex items-center justify-center text-4xl transition-transform group-hover:scale-105 shadow-sm`}>
              {category.icon}
            </div>
            <p className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <CategorySection title="WOMEN'S CLOTHING" categories={womenCategories} emoji="🛍️" />
      <CategorySection title="CURVE CLOTHING" categories={curveCategories} emoji="💎" />
    </section>
  );
};

export default CategoryGrid;
