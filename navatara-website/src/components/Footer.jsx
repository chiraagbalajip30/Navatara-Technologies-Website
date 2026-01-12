import { Link } from "react-router-dom";
import Logo from "../assets/copy_image.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/30">
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="bg-white/90 backdrop-blur-sm rounded px-3 py-1 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300">
              <img
                src={Logo}
                alt="Navatara Technologies"
                className="h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </Link>

          {/* Copyright */}
          <p className="text-sm tracking-wide text-white/80 hover:text-cyan-400 transition-colors duration-300">
            © 2025 Navatara Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;