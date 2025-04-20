
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MathFramework } from "@/utils/mathOperations";
import { Button } from "@/components/ui/button";

interface MathCardProps {
  framework: MathFramework;
  onTransform: (id: string) => void;
}

export function MathCard({ framework, onTransform }: MathCardProps) {
  // Generate a color based on the category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'algebra': return 'bg-blue-100 text-blue-800';
      case 'calculus': return 'bg-purple-100 text-purple-800';
      case 'statistics': return 'bg-green-100 text-green-800';
      case 'linear-algebra': return 'bg-rose-100 text-rose-800';
      case 'geometry': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-forge-purple">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{framework.name}</CardTitle>
          <Badge className={getCategoryColor(framework.category)}>
            {framework.category.replace("-", " ")}
          </Badge>
        </div>
        <CardDescription>{framework.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 p-3 rounded-md font-mono text-sm overflow-x-auto">
          {framework.formula}
        </div>
        <p className="mt-3 text-sm text-gray-600">
          <span className="font-semibold">Complexity:</span> {framework.complexity}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onTransform(framework.id)} 
          className="w-full bg-gradient-to-r from-forge-indigo to-forge-purple hover:from-forge-purple hover:to-forge-indigo"
        >
          Transform to Algorithm
        </Button>
      </CardFooter>
    </Card>
  );
}
