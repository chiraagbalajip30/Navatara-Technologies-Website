import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide mb-6 max-w-5xl"
        >
          Building Modern Digital Solutions
          <br className="hidden sm:block" />
          for Growing Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-lg max-w-2xl mb-10"
        >
          Navatara Technologies partners with startups and businesses to design,
          develop, and maintain scalable websites, applications, and digital
          platforms using modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/contact">
            <button className="px-8 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Start a Project
            </button>
          </Link>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="max-w-[1440px] mx-auto px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-light mb-20"
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {["Custom Websites & Apps", "E-Commerce Solutions", "Branding & Design", "Hosting & Maintenance"].map(
            (service) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-white/20 p-8 hover:border-cyan-400 transition"
              >
                <h3 className="text-xl mb-4">{service}</h3>
                <p className="text-white/70">
                  Designed with performance, scalability, and long-term growth
                  in mind.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-black px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-light mb-16"
          >
            How We Work
          </motion.h2>

          <div className="space-y-10">
            {[
              "Understanding your business goals",
              "Designing clean and scalable architecture",
              "Developing with modern technologies",
              "Testing, optimizing, and refining",
              "Deployment and ongoing support",
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <span className="text-cyan-400 text-lg">0{index + 1}</span>
                <p className="text-white/80 text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-light mb-10"
        >
          Have an idea? Let’s build it together.
        </motion.h2>

        <Link to="/contact">
          <button className="px-10 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
