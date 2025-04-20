
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-forge-blue opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/3 w-96 h-96 rounded-full bg-forge-purple opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-2/3 w-80 h-80 rounded-full bg-forge-teal opacity-20 animate-pulse-slow"></div>
        
        {/* Math symbols */}
        <div className="absolute top-1/6 right-1/4 text-6xl font-bold text-forge-indigo opacity-10">Σ</div>
        <div className="absolute bottom-1/3 left-1/4 text-7xl font-bold text-forge-purple opacity-10">∫</div>
        <div className="absolute top-2/3 right-1/6 text-5xl font-bold text-forge-teal opacity-10">∇</div>
        <div className="absolute top-1/2 left-1/2 text-8xl font-bold text-forge-blue opacity-10">π</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-forge-blue via-forge-purple to-forge-teal">
            Algorithm Forge
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Transform mathematical frameworks into powerful algorithms for real-world applications
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-forge-indigo to-forge-purple hover:from-forge-purple hover:to-forge-indigo">
              <Link to="/frameworks">Explore Frameworks</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-forge-indigo text-forge-indigo hover:bg-forge-indigo/10">
              <Link to="/playground">Try the Playground</Link>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-forge-blue text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Select Framework</h3>
              <p className="text-gray-600">Choose from our collection of mathematical frameworks and theories</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-forge-purple text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transform</h3>
              <p className="text-gray-600">Watch as the forge converts abstract math into concrete algorithmic steps</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-forge-teal text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implement</h3>
              <p className="text-gray-600">Get ready-to-use algorithm implementations and practical applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
