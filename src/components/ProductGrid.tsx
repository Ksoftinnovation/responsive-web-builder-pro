
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: "/placeholder.svg",
      brand: "SHEIN",
      title: "SHEIN Frenchy Women Plus Size Black High Waist Wide Leg Jeans",
      originalPrice: "R126",
      salePrice: null,
      discount: "-15%",
      rating: 4.5,
      reviews: "50+ sold",
      badges: ["#2 Bestseller", "in Apricot Plus Size T-shirts"],
      tags: ["#Stretchy"],
      isCurve: true,
      colors: ["beige", "blue"]
    },
    {
      id: 2,
      image: "/placeholder.svg",
      brand: "SHEIN Lady",
      title: "SHEIN Lady Plus Size Blue Straight-Leg Denim Jumpsuit",
      originalPrice: "R415",
      salePrice: null,
      discount: null,
      rating: 4.3,
      reviews: null,
      badges: ["#5 Bestseller", "in Button Front Plus Size Jumpsuits"],
      tags: ["trends"],
      isCurve: true,
      colors: ["blue"]
    },
    {
      id: 3,
      image: "/placeholder.svg",
      brand: "SHEIN ICON",
      title: "SHEIN ICON Plus Black Asymmetrical Hem Ribbed Knit Sweater",
      originalPrice: "R162",
      salePrice: null,
      discount: "-5%",
      rating: 4.7,
      reviews: "50+ sold",
      badges: ["#6 Bestseller", "in Lettuce Trim Plus Size T-shirts"],
      tags: ["trends"],
      isCurve: true,
      colors: ["black"]
    },
    {
      id: 4,
      image: "/placeholder.svg",
      brand: "Flirla",
      title: "Flirla Plus Size Women Cool Pink Color Block Varsity Jacket",
      originalPrice: "R246",
      salePrice: null,
      discount: null,
      rating: 4.8,
      reviews: "100+ sold",
      badges: ["#7 Bestseller", "in Multicolor Plus Size Jackets"],
      tags: [],
      isCurve: true,
      colors: ["pink", "black"]
    },
    {
      id: 5,
      image: "/placeholder.svg",
      brand: "ROMWE",
      title: "ROMWE Plus Size Women Casual Graphic Print T-Shirt",
      originalPrice: "R89",
      salePrice: null,
      discount: null,
      rating: 4.2,
      reviews: "30+ sold",
      badges: [],
      tags: [],
      isCurve: true,
      colors: ["white", "black"]
    },
    {
      id: 6,
      image: "/placeholder.svg",
      brand: "SHEIN EZwear",
      title: "SHEIN EZwear Plus Size Casual Loose Fit Hoodie",
      originalPrice: "R145",
      salePrice: null,
      discount: null,
      rating: 4.4,
      reviews: "75+ sold",
      badges: [],
      tags: [],
      isCurve: true,
      colors: ["gray", "pink"]
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
