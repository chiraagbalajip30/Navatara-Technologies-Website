const Services = () => {
  const services = [
    {
      title: "Custom Website & Mobile App Development",
      description:
        "We design and develop responsive websites and mobile applications tailored to your business, ensuring seamless performance across all devices.",
    },
    {
      title: "E-Commerce Website Development",
      description:
        "We build secure online stores with payment integration, product management, and user-friendly shopping experiences.",
    },
    {
      title: "Professional Branding & Graphic Design",
      description:
        "We create custom logos, business cards, and visual branding assets that strengthen your professional identity.",
    },
    {
      title: "Domain, Hosting & Website Maintenance",
      description:
        "We handle domain registration, reliable hosting setup, professional emails, and ongoing maintenance for a secure, updated online presence.",
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 py-20 md:px-8 lg:py-32 lg:px-20">
        {/* HERO */}
        <div className="mb-32">
          <h1 className="text-white/90 text-[42px] lg:text-[56px] font-light tracking-wide mb-6 hover:text-cyan-400 transition hover:cursor-pointer">
            Services
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div className="max-w-4xl mb-40 space-y-6 text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
          <p>
            Navatara Technologies offers a comprehensive range of digital
            solutions designed to empower your business in the modern landscape.
          </p>

          <p>
            From custom websites and mobile applications to secure e-commerce
            platforms, professional branding, and reliable hosting with ongoing
            maintenance, we deliver tailored, high-quality services that drive
            growth and efficiency.
          </p>

          <p>
            As your trusted partner, we work closely with you to understand your
            goals and provide innovative, reliable solutions that perfectly
            align with your vision.
          </p>
        </div>

        {/* CORE SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-white/30 p-8 hover:border-cyan-400 transition duration-300 rounded-lg"
            >
              <h4 className="text-xl font-medium mb-4">{service.title}</h4>
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
