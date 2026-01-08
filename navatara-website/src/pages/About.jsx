import { Link } from "react-router-dom";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const About = () => {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 py-20 md:px-8 lg:py-30 lg:px-34">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* LEFT SECTION */}
          <div className="px-4">
            <h1 className="text-[36px] lg:text-[76px] font-light tracking mb-18 text-white/90 hover:text-cyan-400 transition">
              About Us
            </h1>

            {/* About Us Explanation */}
            <div className="space-y-10">
              <p className="font-light sm:text-lg lg:text-xl tracking-wide leading-relaxed text-white/80 mb-4">
                At Navatara Technologies, we help businesses reimagine their
                digital future with innovative, human-centric solutions. Our
                deep expertise in software engineering, combined with strategic
                consulting, creative design thinking, and seamless digital
                capabilities, delivers real value to our clients.
                <br className="hidden lg:block" />
                <br className="hidden lg:block" />
                We focus on understanding your unique needs to craft tailored
                websites, mobile applications, e-commerce platforms, and
                branding that drive growth and efficiency. Committed to quality,
                transparency, and timely delivery, we build lasting partnerships
                that empower your success in a digital world.
              </p>
            </div>

            {/* Contact Info */}
            {/* Contact Info */}
            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 text-lg tracking-tight"
              >
                <span className="text-white/90 group-hover:text-cyan-400 transition-colors duration-300">
                  Contact Us
                </span>
                <span className="text-white/90 group-hover:text-cyan-400 transition-colors duration-300">
                  <HiOutlineArrowSmallRight className="w-6 h-6" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
