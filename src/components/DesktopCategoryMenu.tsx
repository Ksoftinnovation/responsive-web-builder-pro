
import { useState } from "react";

interface DesktopCategoryMenuProps {
  category: string;
  isVisible: boolean;
}

const DesktopCategoryMenu = ({ category, isVisible }: DesktopCategoryMenuProps) => {
  // Define subcategories for different main categories
  const getSubCategories = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "new in":
        return [
          { name: "View All", icon: "👗", isViewAll: true },
          { name: "Dresses", icon: "👗" },
          { name: "Tops", icon: "👚" },
          { name: "T-shirts", icon: "👕" },
          { name: "Tank Tops & Camis", icon: "🎽" },
          { name: "Blouses", icon: "👚" },
          { name: "Bottoms", icon: "👖" },
          { name: "Co-ords", icon: "👗" },
          { name: "Beachwear", icon: "👙" },
          { name: "Denim", icon: "👖" },
          { name: "Pants", icon: "👖" },
          { name: "Skirts", icon: "👗" }
        ];
      case "sale":
        return [
          { name: "View All Sale", icon: "🏷️", isViewAll: true },
          { name: "Dresses Sale", icon: "👗" },
          { name: "Tops Sale", icon: "👚" },
          { name: "Bottoms Sale", icon: "👖" },
          { name: "Outerwear Sale", icon: "🧥" },
          { name: "Shoes Sale", icon: "👠" },
          { name: "Accessories Sale", icon: "👜" },
          { name: "Beauty Sale", icon: "💄" }
        ];
      case "women clothing":
        return [
          { name: "View All", icon: "👗", isViewAll: true },
          { name: "Dresses", icon: "👗" },
          { name: "Tops", icon: "👚" },
          { name: "Bottoms", icon: "👖" },
          { name: "Outerwear", icon: "🧥" },
          { name: "Activewear", icon: "🏃‍♀️" },
          { name: "Lingerie", icon: "👙" },
          { name: "Swimwear", icon: "🏊‍♀️" }
        ];
      case "kids":
        return [
          { name: "View All Kids", icon: "👶", isViewAll: true },
          { name: "Girls Clothing", icon: "👧" },
          { name: "Boys Clothing", icon: "👦" },
          { name: "Baby Clothing", icon: "👶" },
          { name: "Kids Shoes", icon: "👟" },
          { name: "Kids Accessories", icon: "🎒" }
        ];
      case "beachwear":
        return [
          { name: "View All Beachwear", icon: "👙", isViewAll: true },
          { name: "Bikinis", icon: "👙" },
          { name: "One Pieces", icon: "🩱" },
          { name: "Cover Ups", icon: "🏖️" },
          { name: "Beach Accessories", icon: "🕶️" }
        ];
      case "men clothing":
        return [
          { name: "View All Men", icon: "👨", isViewAll: true },
          { name: "T-shirts", icon: "👕" },
          { name: "Shirts", icon: "👔" },
          { name: "Pants", icon: "👖" },
          { name: "Jackets", icon: "🧥" },
          { name: "Activewear", icon: "🏃‍♂️" }
        ];
      default:
        return [
          { name: "View All", icon: "📱", isViewAll: true },
          { name: "Featured Items", icon: "⭐" },
          { name: "New Arrivals", icon: "🆕" },
          { name: "Best Sellers", icon: "🔥" }
        ];
    }
  };

  const subCategories = getSubCategories(category);

  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-6 gap-6">
          {subCategories.map((subCategory, index) => (
            <div
              key={index}
              className="text-center cursor-pointer group"
            >
              <div className="w-full aspect-square bg-gray-100 rounded-full mb-3 flex items-center justify-center text-3xl group-hover:bg-gray-200 transition-colors">
                {subCategory.icon}
              </div>
              <p className={`text-sm font-medium group-hover:text-purple-600 transition-colors ${
                subCategory.isViewAll ? 'text-purple-600 font-semibold' : 'text-gray-700'
              }`}>
                {subCategory.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopCategoryMenu;
