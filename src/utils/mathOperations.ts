
// Math operations that could be converted to algorithms
export interface MathFramework {
  id: string;
  name: string;
  description: string;
  formula: string;
  complexity: string;
  category: "algebra" | "calculus" | "statistics" | "linear-algebra" | "geometry";
}

export const mathFrameworks: MathFramework[] = [
  {
    id: "matrix-multiplication",
    name: "Matrix Multiplication",
    description: "Multiplies two matrices together to produce a new matrix.",
    formula: "C[i,j] = Σ(A[i,k] * B[k,j])",
    complexity: "O(n³)",
    category: "linear-algebra"
  },
  {
    id: "gradient-descent",
    name: "Gradient Descent",
    description: "Optimization algorithm for finding the minimum of a function.",
    formula: "θ = θ - α∇J(θ)",
    complexity: "O(iterations * n)",
    category: "calculus"
  },
  {
    id: "fourier-transform",
    name: "Fourier Transform",
    description: "Decomposes a function into its constituent frequencies.",
    formula: "F(ω) = ∫f(t)e^(-iωt)dt",
    complexity: "O(n log n)",
    category: "calculus"
  },
  {
    id: "linear-regression",
    name: "Linear Regression",
    description: "Models relationship between dependent and independent variables.",
    formula: "y = mx + b",
    complexity: "O(n)",
    category: "statistics"
  },
  {
    id: "eigenvector-decomposition",
    name: "Eigenvector Decomposition",
    description: "Factorizes a matrix into eigenvectors and eigenvalues.",
    formula: "Ax = λx",
    complexity: "O(n³)",
    category: "linear-algebra"
  }
];

export interface Algorithm {
  id: string;
  name: string;
  sourceMath: string;
  description: string;
  pseudocode: string[];
  complexity: string;
  applications: string[];
}

export const algorithms: Algorithm[] = [
  {
    id: "matrix-mult-algo",
    name: "Matrix Multiplication Algorithm",
    sourceMath: "matrix-multiplication",
    description: "Efficient algorithm for multiplying two matrices using nested loops.",
    pseudocode: [
      "function MatrixMultiply(A, B):",
      "  if A.cols ≠ B.rows:",
      "    return ERROR",
      "  C = new Matrix(A.rows, B.cols)",
      "  for i = 1 to A.rows:",
      "    for j = 1 to B.cols:",
      "      C[i,j] = 0",
      "      for k = 1 to A.cols:",
      "        C[i,j] += A[i,k] * B[k,j]",
      "  return C"
    ],
    complexity: "Time: O(n³), Space: O(n²)",
    applications: [
      "Computer Graphics",
      "Physics Simulations",
      "Machine Learning",
      "Network Analysis"
    ]
  },
  {
    id: "gradient-descent-algo",
    name: "Gradient Descent Implementation",
    sourceMath: "gradient-descent",
    description: "Iterative algorithm to find the minimum of a function by taking steps in the negative gradient direction.",
    pseudocode: [
      "function GradientDescent(f, ∇f, θ_init, α, maxIter):",
      "  θ = θ_init",
      "  for i = 1 to maxIter:",
      "    g = ∇f(θ)",
      "    if ||g|| < ε:",
      "      break",
      "    θ = θ - α*g",
      "  return θ"
    ],
    complexity: "Time: O(iterations * n), Space: O(n)",
    applications: [
      "Neural Network Training",
      "Parameter Estimation",
      "Optimization Problems",
      "Regression Analysis"
    ]
  },
  {
    id: "fft-algo",
    name: "Fast Fourier Transform",
    sourceMath: "fourier-transform",
    description: "Efficient algorithm for calculating the discrete Fourier transform and its inverse.",
    pseudocode: [
      "function FFT(x):",
      "  n = length(x)",
      "  if n == 1:",
      "    return x",
      "  even = FFT(x[0, 2, 4, ...]) ",
      "  odd = FFT(x[1, 3, 5, ...])",
      "  for k = 0 to n/2-1:",
      "    t = exp(-2πi*k/n) * odd[k]",
      "    y[k] = even[k] + t",
      "    y[k+n/2] = even[k] - t",
      "  return y"
    ],
    complexity: "Time: O(n log n), Space: O(n)",
    applications: [
      "Signal Processing",
      "Audio Analysis",
      "Image Compression",
      "Polynomial Multiplication"
    ]
  }
];

// Function to transform a math framework to an algorithm (simulated process)
export function transformToAlgorithm(mathId: string): Algorithm | undefined {
  return algorithms.find(algo => algo.sourceMath === mathId);
}

// Get a math framework by id
export function getMathFramework(id: string): MathFramework | undefined {
  return mathFrameworks.find(math => math.id === id);
}
