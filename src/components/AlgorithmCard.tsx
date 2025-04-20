
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Algorithm } from "@/utils/mathOperations";

interface AlgorithmCardProps {
  algorithm: Algorithm;
}

export function AlgorithmCard({ algorithm }: AlgorithmCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-forge-teal">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{algorithm.name}</CardTitle>
          <Badge className="bg-teal-100 text-teal-800">Algorithm</Badge>
        </div>
        <CardDescription>{algorithm.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gray-50 p-3 rounded-md font-mono text-sm overflow-auto max-h-64">
          {algorithm.pseudocode.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Complexity:</span> {algorithm.complexity}
        </p>
        <div>
          <h4 className="text-sm font-semibold mb-1">Applications:</h4>
          <div className="flex flex-wrap gap-1">
            {algorithm.applications.map((app, index) => (
              <Badge key={index} variant="outline" className="bg-white">{app}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
