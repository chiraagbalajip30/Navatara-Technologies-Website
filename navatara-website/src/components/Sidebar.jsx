import { Link } from "react-router-dom";
import Logo2 from "../assets/copy_image.png";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 text-white
        transition-all duration-500 ease-in-out
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`
          absolute inset-0 bg-black
          transition-opacity duration-500
          ${isOpen ? "opacity-80" : "opacity-0"}
        `}
      />

      {/* SIDEBAR PANEL */}
      <aside
        className={`
          absolute top-0 left-0 h-[60%] bg-black  border-white/30
          w-full md:w-[75%] lg:w-[30%]
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Top bar */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-white/30">
          <button
            onClick={onClose}
            className="text-3xl hover:text-cyan-400 transition"
          >
            ×
          </button>

          <div className="h-10 flex items-center relative group">
            <img
              src={Logo2}
              alt="Navatara Technologies"
              className="h-full w-auto object-contain transition-all duration-500"
            />
            <div className="absolute inset-0 bg-cyan-400 mix-blend-screen opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none rounded-full" />
          </div>
        </div>

        {/* Menu */}
        <div className="divide-y divide-white/30">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "About", path: "/about" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className="flex items-center justify-between px-6 py-6 text-xl
                         hover:text-cyan-400 transition-colors"
            >
              {item.name}
              <span className="rotate-[-90deg] text-sm">⌄</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="p-6">
          <Link to="/contact">
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400
                             hover:bg-cyan-400 hover:text-black transition"
            >
              CONTACT US
            </button>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
