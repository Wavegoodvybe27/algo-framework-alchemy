
import { CirclePlus, Equal } from "lucide-react";
import { getMathFramework, transformToAlgorithm } from "@/utils/mathOperations";
import { MathCard } from "./MathCard";
import { AlgorithmCard } from "./AlgorithmCard";

interface TransformationProcessProps {
  mathId: string;
}

export function TransformationProcess({ mathId }: TransformationProcessProps) {
  const mathFramework = getMathFramework(mathId);
  const algorithm = transformToAlgorithm(mathId);

  if (!mathFramework || !algorithm) {
    return <div>Invalid transformation</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="w-full md:w-1/3">
          <MathCard framework={mathFramework} onTransform={() => {}} />
        </div>
        
        <div className="flex flex-col items-center justify-center py-4">
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-forge-indigo to-forge-teal flex items-center justify-center animate-pulse-slow">
            <CirclePlus className="w-10 h-10 text-white" />
          </div>
          <div className="mt-2 text-center text-gray-600">Transform</div>
        </div>
        
        <div className="w-full md:w-1/3">
          <AlgorithmCard algorithm={algorithm} />
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Transformation Process</h3>
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="space-y-6 relative before:absolute before:inset-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-forge-blue before:to-forge-teal before:left-16">
            <li className="ml-24 relative">
              <div className="absolute left-[-3rem] w-6 h-6 rounded-full bg-forge-blue flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-bold">Mathematical Analysis</h4>
              <p className="text-gray-600">Analyze the mathematical framework's properties and constraints</p>
            </li>
            <li className="ml-24 relative">
              <div className="absolute left-[-3rem] w-6 h-6 rounded-full bg-forge-indigo flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-bold">Computational Abstraction</h4>
              <p className="text-gray-600">Convert mathematical operations to computational steps</p>
            </li>
            <li className="ml-24 relative">
              <div className="absolute left-[-3rem] w-6 h-6 rounded-full bg-forge-purple flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-bold">Optimization</h4>
              <p className="text-gray-600">Improve algorithm efficiency and complexity</p>
            </li>
            <li className="ml-24 relative">
              <div className="absolute left-[-3rem] w-6 h-6 rounded-full bg-forge-teal flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="font-bold">Implementation</h4>
              <p className="text-gray-600">Finalize pseudocode and prepare for programming language implementation</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
