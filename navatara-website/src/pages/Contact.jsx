const Contact = () => {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 py-20 md:px-8 lg:py-30 lg:px-34">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* LEFT SECTION */}
          <div className="px-4">
            <h1 className="text-[36px] lg:text-[76px] font-light tracking-wide mb-22 text-white/90 hover:text-cyan-400 transition hover:cursor-pointer">
              Contact Us
            </h1>

            {/* Address Block */}
            <div className="space-y-10">
              <p className="text-md tracking-[0.3em] text-cyan-300 mb-4">
                Navatara Technologies
              </p>

              <p className="text-lg leading-relaxed text-white/90 font-light">
                3410/B, 1ST FLOOR 2ND MAIN,
                <br />
                9th Cross Rd, RPC Layout, Vijayanagar,
                <br />
                Bengaluru, Karnataka 560040,
                <br />
                India
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-lg mt-6 tracking-tight">
              <p>
                <span className="text-white/60 mr-2">P</span>
                <a
                  href="tel:+919845201432"
                  className="underline underline-offset-4 hover:text-cyan-400 transition"
                >
                  +91 98452 01432
                </a>
              </p>

              <p>
                <span className="text-white/60 mr-2">E</span>
                <a
                  href="mailto:contact@navatara.tech"
                  className="underline underline-offset-4 hover:text-cyan-400 transition"
                >
                  navatara.technologies@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
