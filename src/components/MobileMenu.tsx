
import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
}

const MobileMenu = ({ isOpen, onClose, categories }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Menu panel */}
      <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Categories</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Categories */}
        <div className="p-4">
          <nav className="space-y-1">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={onClose}
              >
                <span className="text-sm font-medium">{category}</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
