import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">IUL Demo</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/agents" className="hover:text-gray-300">Agents</Link>
        <Link to="/clients" className="hover:text-gray-300">Clients</Link>
        <Link to="/financial-literacy" className="hover:text-gray-300">Financial Literacy</Link>
      </div>
    </nav>
  );
}
export default Navbar;
