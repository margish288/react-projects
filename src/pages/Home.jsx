import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    path: "/floating-dropdown",
    name: "Floating dropdown",
  },
  {
    path: "/drag-and-drop",
    name: "Drag and Drop",
  },
  {
    path: "/canvas",
    name: "Canvas",
  },
  {
    path: "/practice/products",
    name: "Products",
  },
  {
    path: "/practice/modal",
    name: "Modal",
  },
];

const Home = () => {
  return (
    <div className="flex justify-between px-4 py-2">
      {links.map((link) => (
        <Link
          className="px-2 py-1 text-black bg-slate-100 border hover:bg-slate-200 hover:border-slate-200 rounded-md transition-colors duration-300"
          to={link.path}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Home;
