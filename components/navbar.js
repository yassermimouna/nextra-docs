// CustomNavbar.js
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Search }  from 'nextra-theme-docs'


const CustomNavbar = ({ extraContent }) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Link href="/">LOGO</Link>
      </div>
      <div className="flex items-center space-x-4">
      <Search className="mr-4" />
        {extraContent}

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default CustomNavbar;
