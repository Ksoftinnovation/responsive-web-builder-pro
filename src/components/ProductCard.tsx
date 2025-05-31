
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  image: string;
  brand: string;
  title: string;
  originalPrice: string;
  salePrice?: string | null;
  discount?: string | null;
  rating: number;
  reviews?: string | null;
  badges: string[];
  tags: string[];
  isCurve: boolean;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      black: "bg-black",
      white: "bg-white border border-gray-200",
      blue: "bg-blue-500",
      pink: "bg-pink-500",
      beige: "bg-amber-100",
      gray: "bg-gray-400"
    };
    return colorMap[color] || "bg-gray-300";
  };

  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}
          </div>
        )}

        {/* Tags */}
        {product.tags.map((tag, index) => (
          <div 
            key={index}
            className={`absolute top-2 right-2 text-xs px-2 py-1 rounded ${
              tag === "trends" ? "bg-purple-500 text-white" : "bg-gray-800 text-white"
            }`}
          >
            {tag}
          </div>
        ))}

        {/* Curve Badge */}
        {product.isCurve && (
          <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <span className="text-lg">👤</span>
            <span>CURVE</span>
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            <Button size="icon" variant="secondary" className="rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Color Options */}
        <div className="absolute bottom-2 left-2 flex gap-1">
          {product.colors.map((color, index) => (
            <div 
              key={index}
              className={`w-4 h-4 rounded-full ${getColorClass(color)} border border-white shadow-sm`}
            />
          ))}
          {product.colors.length > 2 && (
            <div className="w-4 h-4 rounded-full bg-gray-300 border border-white shadow-sm flex items-center justify-center text-xs text-gray-600">
              +
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Badges */}
        {product.badges.map((badge, index) => (
          <div key={index} className="text-xs">
            <span className="text-orange-500 font-medium">{badge}</span>
            {index === 0 && product.badges[1] && (
              <span className="text-gray-500 ml-1">{product.badges[1]}</span>
            )}
          </div>
        ))}

        {/* Brand */}
        <p className="text-xs text-gray-600">{product.brand}</p>

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-black">{product.originalPrice}</span>
          {product.salePrice && (
            <span className="text-sm text-gray-500 line-through">{product.salePrice}</span>
          )}
        </div>

        {/* Reviews */}
        {product.reviews && (
          <p className="text-xs text-gray-500">{product.reviews}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
