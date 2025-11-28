import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-[50px] w-full bg-black flex items-center justify-center">
      <ul className="text-white flex justify-center gap-9 ">
        
        <li>
          <Link to="/" className="hover:text-gray-500">Home</Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-gray-500">About</Link>
        </li>

        <li>
          <Link to="/projects" className="hover:text-gray-500">Projects</Link>
        </li>

        <li>
          <Link to="/contactus" className="hover:text-gray-500">Contact</Link>
        </li>

      </ul>
    </div>
  );
}

export default Header;
