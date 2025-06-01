
import { useState } from "react";

interface DesktopCategoryMenuProps {
  category: string;
  isVisible: boolean;
}

const DesktopCategoryMenu = ({ category, isVisible }: DesktopCategoryMenuProps) => {
  // Define content for different main categories
  const getCategoryContent = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case "new in":
        return {
          mainSection: {
            title: "NEW IN WOMEN'S CLOTHING",
            items: [
              { name: "View All", image: "/placeholder.svg", isViewAll: true },
              { name: "Dresses", image: "/placeholder.svg" },
              { name: "Tops", image: "/placeholder.svg" },
              { name: "T-shirts", image: "/placeholder.svg" },
              { name: "Blouses", image: "/placeholder.svg" },
              { name: "Tank Tops & Camis", image: "/placeholder.svg" },
              { name: "Bottoms", image: "/placeholder.svg" },
              { name: "Denim", image: "/placeholder.svg" },
              { name: "Pants", image: "/placeholder.svg" },
              { name: "Co-ords", image: "/placeholder.svg" },
              { name: "Outerwear", image: "/placeholder.svg" },
              { name: "Knitwear", image: "/placeholder.svg" }
            ]
          },
          sideSection: {
            title: "NEW IN CURVE CLOTHING",
            items: [
              { name: "View All", image: "/placeholder.svg", isViewAll: true, badge: "79%" },
              { name: "Dresses", image: "/placeholder.svg" },
              { name: "Tops", image: "/placeholder.svg" },
              { name: "Bottoms", image: "/placeholder.svg" },
              { name: "Denim", image: "/placeholder.svg" },
              { name: "Co-ords", image: "/placeholder.svg" },
              { name: "Sweatshirts", image: "/placeholder.svg" },
              { name: "Sweaters", image: "/placeholder.svg" },
              { name: "Jackets & Coats", image: "/placeholder.svg" },
              { name: "Jumpsuits & Bodysuits", image: "/placeholder.svg" },
              { name: "Suits", image: "/placeholder.svg" },
              { name: "Wedding & Partywear", image: "/placeholder.svg" },
              { name: "Beachwear", image: "/placeholder.svg" },
              { name: "Intimates", image: "/placeholder.svg" }
            ]
          },
          bottomSection: {
            title: "OFFICIALLY LICENSED COLLABS",
            items: [
              { name: "View All", image: "/placeholder.svg", isViewAll: true },
              { name: "Disney Collection", image: "/placeholder.svg" },
              { name: "Marvel Collection", image: "/placeholder.svg" },
              { name: "Anime Collection", image: "/placeholder.svg" },
              { name: "Music Collection", image: "/placeholder.svg" },
              { name: "Sports Collection", image: "/placeholder.svg" }
            ]
          }
        };
      case "sale":
        return {
          mainSection: {
            title: "SHOP BY CATEGORY",
            items: [
              { name: "Women", image: "/placeholder.svg" },
              { name: "Curve", image: "/placeholder.svg" },
              { name: "Women Dresses", image: "/placeholder.svg" },
              { name: "Women Tops", image: "/placeholder.svg" },
              { name: "Women Bottoms", image: "/placeholder.svg" },
              { name: "Women Denim", image: "/placeholder.svg" },
              { name: "Women Two Pieces", image: "/placeholder.svg" },
              { name: "Women Jumpsuits", image: "/placeholder.svg" },
              { name: "Sleep & Lounge", image: "/placeholder.svg" },
              { name: "Underwear", image: "/placeholder.svg" },
              { name: "Kids", image: "/placeholder.svg" },
              { name: "Baby", image: "/placeholder.svg" }
            ]
          },
          sideSection: {
            title: "SPECIAL OFFERS",
            items: [
              { name: "Sale", image: "/placeholder.svg" },
              { name: "Bestsellers on Sale", image: "/placeholder.svg" },
              { name: "Special Sale", image: "/placeholder.svg" },
              { name: "SHEINcollabs", image: "/placeholder.svg" }
            ]
          },
          bottomSection: {
            title: "BRANDS",
            items: [
              { name: "MOTF", image: "/placeholder.svg" },
              { name: "EMERY ROSE", image: "/placeholder.svg" },
              { name: "SHEGLAM", image: "/placeholder.svg" },
              { name: "LUVLETTE", image: "/placeholder.svg" },
              { name: "DAZY", image: "/placeholder.svg" },
              { name: "ROMWE", image: "/placeholder.svg" },
              { name: "GLOWMODE", image: "/placeholder.svg" },
              { name: "CUCCOO", image: "/placeholder.svg" },
              { name: "Cozy Pixies", image: "/placeholder.svg" },
              { name: "LongNap™", image: "/placeholder.svg" },
              { name: "Anewsta", image: "/placeholder.svg" },
              { name: "MISSGUIDED", image: "/placeholder.svg" },
              { name: "SUMWON", image: "/placeholder.svg" }
            ]
          }
        };
      case "women clothing":
        return {
          mainSection: {
            title: "WOMEN'S CLOTHING",
            items: [
              { name: "View All", image: "/placeholder.svg", isViewAll: true },
              { name: "Dresses", image: "/placeholder.svg" },
              { name: "Tops", image: "/placeholder.svg" },
              { name: "Bottoms", image: "/placeholder.svg" },
              { name: "Outerwear", image: "/placeholder.svg" },
              { name: "Activewear", image: "/placeholder.svg" },
              { name: "Lingerie", image: "/placeholder.svg" },
              { name: "Swimwear", image: "/placeholder.svg" }
            ]
          },
          sideSection: {
            title: "TRENDING NOW",
            items: [
              { name: "New Arrivals", image: "/placeholder.svg" },
              { name: "Best Sellers", image: "/placeholder.svg" },
              { name: "Sale Items", image: "/placeholder.svg" },
              { name: "Celebrity Style", image: "/placeholder.svg" }
            ]
          }
        };
      default:
        return {
          mainSection: {
            title: "SHOP BY CATEGORY",
            items: [
              { name: "View All", image: "/placeholder.svg", isViewAll: true },
              { name: "Featured Items", image: "/placeholder.svg" },
              { name: "New Arrivals", image: "/placeholder.svg" },
              { name: "Best Sellers", image: "/placeholder.svg" }
            ]
          }
        };
    }
  };

  const content = getCategoryContent(category);

  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-orange-500"></div>
                <div className="w-2 h-2 bg-orange-500"></div>
                <div className="w-2 h-2 bg-orange-500"></div>
                <div className="w-2 h-2 bg-orange-500"></div>
              </div>
              <h3 className="text-lg font-bold text-orange-600 uppercase">
                {content.mainSection.title}
              </h3>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {content.mainSection.items.map((item, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer group"
                >
                  <div className="relative w-full aspect-square bg-gray-100 rounded-full mb-3 overflow-hidden group-hover:shadow-md transition-shadow">
                    {item.isViewAll ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-1">
                          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                          <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {item.badge && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  <p className={`text-sm font-medium group-hover:text-purple-600 transition-colors ${
                    item.isViewAll ? 'text-purple-600 font-semibold' : 'text-gray-700'
                  }`}>
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            {content.bottomSection && (
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <div className="w-2 h-2 bg-orange-500"></div>
                    <div className="w-2 h-2 bg-orange-500"></div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 uppercase">
                    {content.bottomSection.title}
                  </h3>
                </div>
                <div className="grid grid-cols-7 gap-4">
                  {content.bottomSection.items.map((item, index) => (
                    <div
                      key={index}
                      className="text-center cursor-pointer group"
                    >
                      <div className="w-full aspect-square bg-gray-100 rounded-full mb-3 overflow-hidden group-hover:shadow-md transition-shadow">
                        {item.isViewAll ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-1">
                              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <p className="text-xs font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Side Section */}
          {content.sideSection && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 uppercase mb-4">
                  {content.sideSection.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {content.sideSection.items.map((item, index) => (
                    <div
                      key={index}
                      className="text-center cursor-pointer group"
                    >
                      <div className="relative w-full aspect-square bg-gray-100 rounded-full mb-3 overflow-hidden group-hover:shadow-md transition-shadow">
                        {item.isViewAll ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-1">
                              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                              <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                        {item.badge && (
                          <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full font-bold">
                            {item.badge}
                          </div>
                        )}
                      </div>
                      <p className={`text-sm font-medium group-hover:text-purple-600 transition-colors ${
                        item.isViewAll ? 'text-purple-600 font-semibold' : 'text-gray-700'
                      }`}>
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopCategoryMenu;
