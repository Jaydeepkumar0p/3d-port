import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex items-center justify-between px-8 py-4 bg-white/30 backdrop-blur-md shadow-lg">
      
      {/* JAY Logo */}
      <NavLink 
        to="/" 
        className="flex items-center justify-center w-14 h-14 rounded-lg shadow-md border border-gray-400 bg-white 
        transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-purple-500"
      >
        <p className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold text-xl">
          JAY
        </p>
      </NavLink>

      {/* Navigation Links */}
      <nav className="flex text-lg gap-6 font-medium">
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `px-5 py-2 rounded-lg border transition-all duration-500 shadow-md relative overflow-hidden 
            ${isActive 
              ? "border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg scale-105"
              : "border-blue-400 text-gray-900 hover:border-purple-500 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
            }`
          }
        >
          About
        </NavLink>

        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `px-5 py-2 rounded-lg border transition-all duration-500 shadow-md relative overflow-hidden 
            ${isActive 
              ? "border-transparent bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg scale-105"
              : "border-blue-400 text-gray-900 hover:border-purple-500 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
            }`
          }
        >
          Projects
        </NavLink>

      </nav>
    </header>
  );
};

export default Navbar;
