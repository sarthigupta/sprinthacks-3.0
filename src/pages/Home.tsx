import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import Sponsors from "./Sponsors";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const tiers = [
    {
      name: "Silver",
      sponsors: [
        {
          name: "DEVFOLIO LOGO",
          logo: "/_Dark.png",
          website: "#",
        },
        {
          name: "ETHINDIA LOGO",
          logo: "/eth.png",
          website: "#",
        },
      ],
    },
  ];

  const galleryImages = [
    "/1.jpeg",
    "/6.jpeg",
    "/4.JPG",
    "/5.jpeg",
    "/3.jpeg",
    "/2.jpeg",
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] md:min-h-[70vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')",
              filter: "brightness(0.4)",
            }}
          />
          <img
            src="/Bg.png"
            alt="Background"
            className="absolute inset-0 bg-center bg-cover"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 flex flex-row items-center justify-center w-full text-center">
          {/* 3D Model positioned on the left */}

          {/* Content positioned on the right side */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center mt-14 md:mt-12">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center w-full h-full md:w-full lg:w-1/2"
              src="/logo.png"
              alt="Landing Image"
              loading="lazy"
            />

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-[#FF0F7B] border-2 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-Poppins font-bold hover:scale-110 transition-all my-2 mb-4"
            >
              2nd - 3rd May
            </motion.button>
            <div
              className="apply-button"
              data-hackathon-slug="sprinthacks-3"
              data-button-theme="dark"
              style={{ height: "44px", width: "312px", borderRadius: "0px" }}
            ></div>
            <div className="flex justify-center mt-16">
              <ChevronDown className="w-8 h-8 neon-shape animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 text-center md:grid-cols-3">
            {[
              { number: "120+", label: "Developers" },
              { number: "50+", label: "Projects Deployed" },
              { number: "100%", label: "Fun" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
                <div className="mb-2 text-4xl font-bold gradient-text font-Poppins md:text-5xl">
                  {stat.number}
                </div>
                <div className="gradient-text font-Poppins">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Previous Events Gallery */}
      <div className="relative z-10">
        {/* Gallery code remains unchanged */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 pt-10 mb-8 text-3xl tracking-wider text-center text-white textfont-bold font md:text-4xl md:mb-12 gradient-text font-Poppins"
        >
          Previous Events Gallery
        </motion.h2>

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden cursor-pointer aspect-video rounded-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </div>

      {/* <div className="min-h-screen pt-24 pb-16 text-white bg-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF0F7B] font-Poppins">
              Our Sponsors
            </h1>
            <p className="max-w-3xl mx-auto text-xl tracking-wider text-gray-300 font-Poppins">
              Meet the companies powering innovation at SprintHacks 3.0
            </p>
          </motion.div>

          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: tierIndex * 0.2 }}
              className="mb-16"
            >
              <h2 className="mb-8 text-3xl font-bold text-center font-Poppins">
                <span className="gradient-text font-Poppins">{tier.name}</span>{" "}
                Sponsors
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-6 overflow-hidden transition-transform duration-300 transform bg-gray-900 rounded-xl hover:scale-105"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="object-contain w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-end justify-center pb-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 to-transparent hover:opacity-100">
                        <span className="font-bold text-white">
                          {sponsor.name}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-8 mt-16 text-center bg-gray-900 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 font-Poppins text-[#FF0F7B]">
              Become a Sponsor
            </h2>
            <p className="mb-6 tracking-wider text-gray-300 font-Poppins">
              Join us in supporting the next generation of innovators. Contact
              us to learn more about sponsorship opportunities.
            </p>
            <a
              href="mailto:sprinthacks@gmail.com"
              className="px-8 py-3 bg-[#FF0F7B] text-white rounded-lg text-lg font-bold font-Poppins hover:bg-[#FF0F7B]/90 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div> */}

      <Sponsors/>

      {/* Featured Image Section */}
      <div className="relative py-12 md:py-16">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80')",
              filter: "brightness(0.2)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl gradient-text md:mb-6 font-Poppins">
                Ready to Take the Challenge?
              </h2>
              <p className="mb-6 text-sm tracking-wider text-gray-300 md:mb-8 sm:text-base font-Poppins">
                Join hundreds of developers in this unique competitive coding
                experience. Only the most innovative survive.
              </p>
              <a href="/about">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-2 text-[#FF0F7B] font-semibold mx-auto md:mx-0"
                >
                  <span className="tracking-wider font-Poppins">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 mt-8 bg-white md:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF0F7B]/20 to-[#F89B29]/20 rounded-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
