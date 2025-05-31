
import { ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubCategoryMenuProps {
  category: string;
  onBack: () => void;
  onClose: () => void;
}

const SubCategoryMenu = ({ category, onBack, onClose }: SubCategoryMenuProps) => {
  // Define subcategories for different main categories
  const getSubCategories = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "new in":
        return [
          { name: "View All", icon: "👗" },
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
          { name: "Skirts", icon: "👗" },
          { name: "Jumpsuits", icon: "👗" },
          { name: "Bodysuits", icon: "👙" },
          { name: "Lightweight Coats", icon: "🧥" },
          { name: "Suits", icon: "👔" },
          { name: "Knitwear", icon: "🧶" },
          { name: "Sweatshirts", icon: "👕" }
        ];
      case "sale":
        return [
          { name: "View All Sale", icon: "🏷️" },
          { name: "Dresses Sale", icon: "👗" },
          { name: "Tops Sale", icon: "👚" },
          { name: "Bottoms Sale", icon: "👖" },
          { name: "Outerwear Sale", icon: "🧥" },
          { name: "Shoes Sale", icon: "👠" },
          { name: "Accessories Sale", icon: "👜" }
        ];
      case "women clothing":
        return [
          { name: "View All", icon: "👗" },
          { name: "Dresses", icon: "👗" },
          { name: "Tops", icon: "👚" },
          { name: "Bottoms", icon: "👖" },
          { name: "Outerwear", icon: "🧥" },
          { name: "Activewear", icon: "🏃‍♀️" },
          { name: "Lingerie", icon: "👙" }
        ];
      case "kids":
        return [
          { name: "View All Kids", icon: "👶" },
          { name: "Girls Clothing", icon: "👧" },
          { name: "Boys Clothing", icon: "👦" },
          { name: "Baby Clothing", icon: "👶" },
          { name: "Kids Shoes", icon: "👟" },
          { name: "Kids Accessories", icon: "🎒" }
        ];
      case "men clothing":
        return [
          { name: "View All Men", icon: "👨" },
          { name: "T-shirts", icon: "👕" },
          { name: "Shirts", icon: "👔" },
          { name: "Pants", icon: "👖" },
          { name: "Jackets", icon: "🧥" },
          { name: "Activewear", icon: "🏃‍♂️" }
        ];
      default:
        return [
          { name: "View All", icon: "📱" },
          { name: "Featured Items", icon: "⭐" },
          { name: "New Arrivals", icon: "🆕" },
          { name: "Best Sellers", icon: "🔥" }
        ];
    }
  };

  const subCategories = getSubCategories(category);

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-lg font-semibold">{category}</h2>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Subcategories */}
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-4">New in {category}</p>
        <div className="grid grid-cols-3 gap-4">
          {subCategories.map((subCategory, index) => (
            <div
              key={index}
              className="text-center cursor-pointer group"
              onClick={onClose}
            >
              <div className="w-full aspect-square bg-gray-100 rounded-xl mb-2 flex items-center justify-center text-2xl group-hover:bg-gray-200 transition-colors">
                {subCategory.icon}
              </div>
              <p className="text-xs font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                {subCategory.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubCategoryMenu;
