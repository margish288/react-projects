import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex justify-center px-4 py-2">
        <Link
          className="p-2 bg-slate-100 border hover:bg-slate-200 hover:border-slate-200 rounded-md transition-colors duration-300"
          to="/"
        >
          Home
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
