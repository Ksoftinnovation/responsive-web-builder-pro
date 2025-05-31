
import { useState } from "react";
import { Search, Menu, X, ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoryGrid from "@/components/CategoryGrid";
import MobileMenu from "@/components/MobileMenu";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import DesktopCategoryMenu from "@/components/DesktopCategoryMenu";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const mainCategories = [
    "New In", "Sale", "Women Clothing", "Beachwear", "Kids", "Curve", 
    "Men Clothing", "Underwear & Sleepwear", "Shoes", "Home & Kitchen", 
    "Jewelry & Accessories", "Beauty & Health", "Baby & Maternity"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        {/* Top banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm">
          Free Shipping on orders $50+ | Sale Zone - Super coupons every day
        </div>
        
        {/* Main header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <div className="text-2xl font-bold tracking-wider">
              SHEIN
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8 relative">
              {mainCategories.slice(0, 6).map((category) => (
                <div
                  key={category}
                  className="relative"
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <a
                    href="#"
                    className="text-sm hover:text-purple-600 transition-colors py-2 block"
                  >
                    {category}
                  </a>
                </div>
              ))}
            </nav>

            {/* Search bar - desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search for products..."
                  className="pl-4 pr-10 rounded-full border-gray-300"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-4 pr-10 rounded-full"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Desktop Category Menu */}
        <DesktopCategoryMenu 
          category={hoveredCategory || ""} 
          isVisible={hoveredCategory !== null} 
        />
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        categories={mainCategories}
      />

      {/* Main Content */}
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About SHEIN</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Shipping Info</a></li>
                <li><a href="#" className="hover:text-gray-900">Returns</a></li>
                <li><a href="#" className="hover:text-gray-900">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Payment</a></li>
                <li><a href="#" className="hover:text-gray-900">Bonus Point</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-900">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-900">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 SHEIN. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
