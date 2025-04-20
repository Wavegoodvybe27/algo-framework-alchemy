
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forge-purple to-forge-blue flex items-center justify-center">
          <span className="text-white font-bold text-xl">AF</span>
        </div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-forge-blue via-forge-purple to-forge-teal">
          Algorithm Forge
        </h1>
      </div>
      <div className="flex gap-6">
        <Link to="/" className="text-gray-700 hover:text-forge-purple transition-colors">
          Home
        </Link>
        <Link to="/frameworks" className="text-gray-700 hover:text-forge-purple transition-colors">
          Frameworks
        </Link>
        <Link to="/playground" className="text-gray-700 hover:text-forge-purple transition-colors">
          Playground
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-forge-purple transition-colors">
          About
        </Link>
      </div>
    </nav>
  );
}
