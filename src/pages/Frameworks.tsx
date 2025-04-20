
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { MathCard } from "@/components/MathCard";
import { TransformationProcess } from "@/components/TransformationProcess";
import { mathFrameworks } from "@/utils/mathOperations";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";

const Frameworks = () => {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(
    new Set(mathFrameworks.map((framework) => framework.category))
  );
  
  // Filter frameworks
  const filteredFrameworks = mathFrameworks.filter((framework) => {
    const matchesSearch = 
      framework.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      framework.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = 
      activeCategory === null || framework.category === activeCategory;
      
    return matchesSearch && matchesCategory;
  });
  
  const handleTransform = (id: string) => {
    setSelectedFramework(id);
    // Scroll to the transformation section
    setTimeout(() => {
      document.getElementById("transformation")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Mathematical Frameworks</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of mathematical frameworks ready to be transformed
            into powerful algorithms
          </p>
        </div>
        
        {/* Search and filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <Input
            placeholder="Search frameworks..."
            className="max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={activeCategory === null ? "default" : "outline"}
              className={activeCategory === null ? "bg-forge-purple hover:bg-forge-indigo" : ""}
              onClick={() => setActiveCategory(null)}
            >
              All
            </Badge>
            
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-forge-purple hover:bg-forge-indigo" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category.replace("-", " ")}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Frameworks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFrameworks.map((framework) => (
            <MathCard
              key={framework.id}
              framework={framework}
              onTransform={handleTransform}
            />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredFrameworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No frameworks found matching your criteria.</p>
          </div>
        )}
        
        {/* Transformation process */}
        {selectedFramework && (
          <div id="transformation" className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-center">Transformation Process</h2>
            <TransformationProcess mathId={selectedFramework} />
          </div>
        )}
      </div>
      
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 Algorithm Forge — Turn mathematical theory into algorithmic practice</p>
        </div>
      </footer>
    </div>
  );
};

export default Frameworks;
