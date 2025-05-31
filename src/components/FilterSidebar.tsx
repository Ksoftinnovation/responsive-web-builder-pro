
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState<string[]>([
    "category", "collection", "size", "color", "type"
  ]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const categories = [
    "Plus Size Dresses",
    "Plus Size Co-Ords", 
    "Plus Size Sweatshirts",
    "Plus Size Tops",
    "Plus Size Bottoms",
    "Plus Size Knitwear"
  ];

  const collections = [
    "SHEIN EZwear",
    "SHEIN VCAY",
    "Emery Rose",
    "SHEIN privé"
  ];

  const sizes = ["XL", "XXL", "3XL", "4XL", "5XL"];
  const colors = ["Black", "White", "Blue", "Pink", "Red", "Green", "Gray", "Brown"];

  const FilterSection = ({ 
    title, 
    isOpen, 
    onToggle, 
    children, 
    showViewMore = false 
  }: {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
    showViewMore?: boolean;
  }) => (
    <div className="border-b border-gray-200 py-4">
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3">
          {children}
          {showViewMore && (
            <button className="flex items-center gap-1 text-sm text-purple-600 hover:underline mt-2">
              <Plus className="h-3 w-3" />
              View More
            </button>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>

      <FilterSection
        title="Category"
        isOpen={openSections.includes("category")}
        onToggle={() => toggleSection("category")}
        showViewMore
      >
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <Label htmlFor={category} className="text-sm text-gray-700 cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="SHEIN Collection"
        isOpen={openSections.includes("collection")}
        onToggle={() => toggleSection("collection")}
      >
        <div className="space-y-3">
          {collections.map((collection) => (
            <div key={collection} className="flex items-center space-x-2">
              <Checkbox id={collection} />
              <Label htmlFor={collection} className="text-sm text-gray-700 cursor-pointer">
                {collection}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="Size"
        isOpen={openSections.includes("size")}
        onToggle={() => toggleSection("size")}
      >
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={size} />
              <Label htmlFor={size} className="text-sm text-gray-700 cursor-pointer">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="Color"
        isOpen={openSections.includes("color")}
        onToggle={() => toggleSection("color")}
      >
        <div className="space-y-3">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox id={color} />
              <Label htmlFor={color} className="text-sm text-gray-700 cursor-pointer">
                {color}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      <FilterSection
        title="Type"
        isOpen={openSections.includes("type")}
        onToggle={() => toggleSection("type")}
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="bodycon" />
            <Label htmlFor="bodycon" className="text-sm text-gray-700 cursor-pointer">
              Bodycon
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="midi" />
            <Label htmlFor="midi" className="text-sm text-gray-700 cursor-pointer">
              Midi
            </Label>
          </div>
        </div>
      </FilterSection>

      <FilterSection
        title="Sleeve Length"
        isOpen={openSections.includes("sleeve")}
        onToggle={() => toggleSection("sleeve")}
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="long-sleeve" />
            <Label htmlFor="long-sleeve" className="text-sm text-gray-700 cursor-pointer">
              Long Sleeve
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="short-sleeve" />
            <Label htmlFor="short-sleeve" className="text-sm text-gray-700 cursor-pointer">
              Short Sleeve
            </Label>
          </div>
        </div>
      </FilterSection>

      <FilterSection
        title="Body Type"
        isOpen={openSections.includes("body-type")}
        onToggle={() => toggleSection("body-type")}
      >
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="plus-size" />
            <Label htmlFor="plus-size" className="text-sm text-gray-700 cursor-pointer">
              Plus Size
            </Label>
          </div>
        </div>
      </FilterSection>
    </div>
  );
};

export default FilterSidebar;
