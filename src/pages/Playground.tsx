
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CirclePlus, Sigma } from "lucide-react";

const Playground = () => {
  const [mathInput, setMathInput] = useState<string>("");
  const [algorithmOutput, setAlgorithmOutput] = useState<string>("");
  const [isTransforming, setIsTransforming] = useState<boolean>(false);
  
  const handleTransform = () => {
    if (!mathInput.trim()) return;
    
    setIsTransforming(true);
    
    // Simulate a transformation process
    setTimeout(() => {
      // This is just a demo transformation - in a real app, this would use actual logic
      const lines = [
        "function transform(input):",
        "  // Parse and analyze the mathematical expression",
        "  const tokens = tokenize(input)",
        "  const ast = parseToAST(tokens)",
        "",
        "  // Convert to algorithm steps",
        "  const steps = []",
        "  for each node in ast:",
        "    steps.push(convertToAlgorithmicStep(node))",
        "",
        "  // Optimize the algorithm",
        "  const optimizedSteps = optimize(steps)",
        "",
        "  // Return the pseudocode",
        "  return generatePseudocode(optimizedSteps)",
      ];
      
      setAlgorithmOutput(lines.join("\n"));
      setIsTransforming(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Algorithm Playground</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiment with your own mathematical frameworks and see how they transform
            into algorithms
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="transform" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="transform">Transform Math to Algorithm</TabsTrigger>
              <TabsTrigger value="examples">Example Transformations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="transform" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-t-4 border-t-forge-purple">
                  <CardContent className="pt-6">
                    <Label htmlFor="mathTitle">Title</Label>
                    <Input 
                      id="mathTitle" 
                      placeholder="e.g., Dijkstra's Algorithm" 
                      className="mb-4"
                    />
                    
                    <Label htmlFor="mathInput">Mathematical Framework</Label>
                    <Textarea
                      id="mathInput"
                      value={mathInput}
                      onChange={(e) => setMathInput(e.target.value)}
                      placeholder="Enter your mathematical framework here... (e.g., formulas, theorems, or mathematical concepts)"
                      className="h-64 font-mono"
                    />
                  </CardContent>
                </Card>
                
                <div className="flex flex-col">
                  <div className="flex justify-center mb-4">
                    <Button 
                      onClick={handleTransform}
                      disabled={isTransforming || !mathInput.trim()}
                      className="bg-gradient-to-r from-forge-indigo to-forge-purple hover:from-forge-purple hover:to-forge-indigo"
                    >
                      {isTransforming ? (
                        <span className="flex items-center">
                          <Sigma className="mr-2 h-4 w-4 animate-spin" />
                          Transforming...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <CirclePlus className="mr-2 h-4 w-4" />
                          Transform to Algorithm
                        </span>
                      )}
                    </Button>
                  </div>
                  
                  <Card className="flex-1 border-t-4 border-t-forge-teal">
                    <CardContent className="pt-6">
                      <Label htmlFor="algorithmOutput">Algorithm Output</Label>
                      <div
                        id="algorithmOutput"
                        className="h-64 font-mono bg-gray-50 p-4 rounded-md overflow-auto whitespace-pre-wrap"
                      >
                        {algorithmOutput || (
                          <span className="text-gray-400">
                            Algorithm output will appear here after transformation...
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="examples" className="pt-6">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Matrix Multiplication</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold mb-2">Mathematical Framework:</p>
                        <div className="bg-gray-50 p-3 rounded-md font-mono text-sm">
                          C[i,j] = Σ(A[i,k] * B[k,j])<br />
                          where A is an m×n matrix<br />
                          and B is an n×p matrix
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Transformed Algorithm:</p>
                        <div className="bg-gray-50 p-3 rounded-md font-mono text-sm">
                          function MatrixMultiply(A, B):<br />
                          &nbsp;&nbsp;if A.cols ≠ B.rows:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;return ERROR<br />
                          &nbsp;&nbsp;C = new Matrix(A.rows, B.cols)<br />
                          &nbsp;&nbsp;for i = 1 to A.rows:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;for j = 1 to B.cols:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C[i,j] = 0<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for k = 1 to A.cols:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C[i,j] += A[i,k] * B[k,j]<br />
                          &nbsp;&nbsp;return C
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold mb-2">Gradient Descent</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold mb-2">Mathematical Framework:</p>
                        <div className="bg-gray-50 p-3 rounded-md font-mono text-sm">
                          θ = θ - α∇J(θ)<br />
                          where θ is the parameter vector<br />
                          α is the learning rate<br />
                          ∇J(θ) is the gradient of cost function J
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Transformed Algorithm:</p>
                        <div className="bg-gray-50 p-3 rounded-md font-mono text-sm">
                          function GradientDescent(f, ∇f, θ_init, α, maxIter):<br />
                          &nbsp;&nbsp;θ = θ_init<br />
                          &nbsp;&nbsp;for i = 1 to maxIter:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;g = ∇f(θ)<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;if ||g|| &lt; ε:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;θ = θ - α*g<br />
                          &nbsp;&nbsp;return θ
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
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

export default Playground;
