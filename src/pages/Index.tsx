
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TransformationProcess } from "@/components/TransformationProcess";
import { mathFrameworks } from "@/utils/mathOperations";

const Index = () => {
  // Show the transformation process for the first framework as a demo
  const demoMathId = mathFrameworks[0].id;

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">See the Forge in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness how the Algorithm Forge transforms complex mathematical frameworks into
            efficient, practical algorithms ready for implementation
          </p>
        </div>
        
        <TransformationProcess mathId={demoMathId} />
      </div>
      
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 Algorithm Forge — Turn mathematical theory into algorithmic practice</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
