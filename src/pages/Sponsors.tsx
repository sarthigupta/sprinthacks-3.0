import { motion } from 'framer-motion';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Sponsors = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const tiers = [
    {
      name: "Title",
      sponsors: [
        {
          name: "JellyFaaS",
          logo: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1745262318/jellyfaas_logo_full_wnb90k.png",
          website: "#"
        }
      ]
    },
    {
      name: "Gold",
      sponsors: [
        {
          name: "GoFr",
          logo: "data:image/png;base64,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",
          website: "#"
        }
      ]
    },
    {
      name: "Silver",
      sponsors: [
        {
          name: "Soonami",
          logo: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1745262318/soonami_1_bocacz.png",
          website: "#"
        },
        {
          name: "DEVFOLIO",
          logo: "/_Dark.png",
          website: "#"
        },
        {
          name: "ETHINDIA",
          logo: "/eth.png",
          website: "#"
        },
        {
          name: "The Carzilla.in",
          logo: "https://www.thecarzilla.in/static/media/logo.3d95b147c7183af0774c.png",
          website: "#"
        },
        {
          name: "RAGAAI",
          logo: "data:image/png;base64,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",
          website: "#"
        }
      ]
    },
    {
      name: "Digital",
      sponsors: [
        {
          name: "CodeCrafters",
          logo: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1745262320/CodeCrafters.io_full_logo_full_text_White_text_cv67hu.png",
          website: "#"
        },
        {
          name: "Balsamiq",
          logo: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1745262318/balsamiq_oyw2wb.svg",
          website: "#"
        },
        {
          name: ".xyz",
          logo: "data:image/png;base64,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",
          website: "#"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 text-white bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-Poppins mb-6 text-[#FF0F7B]">Our Sponsors</h1>
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
            className="mb-16 font-Poppins"
          >
            <h2 className="mb-8 text-3xl font-bold text-center">
              <span className="gradient-text">{tier.name}</span> Sponsors
            </h2>
            {/* Centered container for sponsors */}
            <div className="flex justify-center w-full">
              <div className={`grid gap-8 w-full ${
                tier.sponsors.length === 1 ? 'grid-cols-1 max-w-xs' : 
                tier.sponsors.length === 2 ? 'md:grid-cols-2 max-w-2xl' :
                'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl'
              } justify-items-center mx-auto`}>
                {tier.sponsors.map((sponsor, index) => (
                  <motion.a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden transition-transform duration-300 transform bg-gray-700 rounded-xl hover:scale-105 p-4 w-full max-w-xs"
                  >
                    <div className="relative aspect-video rounded-lg">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="object-contain w-full h-full rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-end justify-center pb-4 transition-opacity duration-300 opacity-0 hover:opacity-100">
                        <span className="font-bold text-white">{sponsor.name}</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 mt-16 text-center bg-gray-900 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#FF0F7B] font-Poppins">Become a Sponsor</h2>
          <p className="mb-6 tracking-wider text-gray-300 font-Poppins">
            Join us in supporting the next generation of innovators. Contact us to learn more about
            sponsorship opportunities.
          </p>
          <button className="px-8 py-3 bg-[#FF0F7B] text-white rounded-lg text-lg font-bold font-Poppins hover:bg-[#FF0F7B]/90 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;