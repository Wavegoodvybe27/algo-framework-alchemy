
import { NavBar } from "@/components/NavBar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Algorithm Forge</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between mathematical theory and algorithmic implementation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Algorithm Forge was created with a simple yet powerful mission: to make 
                the transformation from mathematical frameworks to practical algorithms 
                accessible, transparent, and educational.
              </p>
              <p className="text-gray-700">
                We believe that the beauty of mathematics lies not only in its abstract 
                elegance but also in its practical applications. By forging mathematical 
                concepts into algorithms, we unlock their potential to solve real-world 
                problems across science, engineering, finance, and technology.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">For Academics</h2>
                <p className="text-gray-700">
                  Algorithm Forge provides a bridge between theoretical research and 
                  computational implementation. Visualize how your mathematical frameworks 
                  translate to algorithms that can be implemented in code.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">For Engineers</h2>
                <p className="text-gray-700">
                  Gain deeper insights into the mathematical foundations of algorithms 
                  you use every day. Understand the "why" behind the code and optimize 
                  your implementations with mathematical precision.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">For Students</h2>
                <p className="text-gray-700">
                  Learn how abstract mathematical concepts transform into concrete 
                  algorithms. Visualize the connection between what you learn in math 
                  class and how it applies to computer science.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">For Researchers</h2>
                <p className="text-gray-700">
                  Accelerate your research by quickly transforming new mathematical 
                  frameworks into algorithmic implementations ready for testing and 
                  validation in your domain.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">The Transformation Process</h2>
              <p className="text-gray-700 mb-4">
                Our approach to transforming mathematics into algorithms follows a 
                systematic process:
              </p>
              
              <ol className="list-decimal list-inside space-y-3 mb-4">
                <li className="text-gray-700">
                  <span className="font-semibold">Mathematical Analysis</span>: We analyze 
                  the mathematical framework to understand its structure, properties, and constraints.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Computational Abstraction</span>: We translate 
                  mathematical operations into computational steps that a computer can execute.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Optimization</span>: We apply algorithmic 
                  principles to optimize the implementation for efficiency and scalability.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">Implementation</span>: We generate clear, 
                  readable pseudocode that can be easily translated to any programming language.
                </li>
              </ol>
              
              <p className="text-gray-700">
                This process transforms the abstract elegance of mathematics into the 
                practical power of algorithms, ready to solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="bg-gray-50 py-8 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 Algorithm Forge — Turn mathematical theory into algorithmic practice</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
