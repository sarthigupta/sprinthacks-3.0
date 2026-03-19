import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Speakers = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const speakers = [
    {
      name: "Pranav Malik",
      role: "Ex -Microsoft, Oracle, PayPal, DRDO",
      bio: "Technology evangelist | Ex-Microsoft, Oracle, PayPal, DRDO | Mentored 5k+ Students | Full Stack | Backend | Big Data | Distributed Systems | 29K+ peeps | Instructor | Mentor | Speaker | Judge",
      image: "https://res.cloudinary.com/dgufdt51q/image/upload/v1745903854/k2zx8pvx3groheiipfl5.png",
      social: {
        linkedin: "https://www.linkedin.com/in/candidatepstx-95adfsdk23/",
      },
    },
    {
      name: "Rohtash Sethi",
      role: "Senior Principal Software Engineer",
      company: "Secureworks",
      bio: "10+ years of experience in the Frontend Engineering | Angular Expert | Mentor",
      image: "https://res.cloudinary.com/dgufdt51q/image/upload/v1745903854/kuleyrqxvlvtyhizfgsr.png",
      social: {
        linkedin: "https://www.linkedin.com/in/rohtashsethi/",
      },
    },
    {
      name: "Mohini Vaish",
      role: "Senior Analyst- Data Governance & Risk Management",
      company: "American Express Private India Limited",
      bio: "Over 3 years of experience in healthcare data analytics at ZS associates India and currently working as a senior analyst in risk management profile at American Express. Specializes in cloud-based data warehousing, Python scripting, data transformation and has driven impactful automation initiatives and strategic data solutions.",
      image: "https://res.cloudinary.com/dgufdt51q/image/upload/v1745903854/azmmzfahwgyzwzrb9sof.png",
      social: {
        linkedin: "https://in.linkedin.com/in/276mohini",
      },
    },
    {
      name: "Gaurav Gupta",
      role: "Sr. Software Engineer",
      company: "Apollo247.org",
      bio: "Seasoned software product expert with a strong background in building scalable tech solutions across healthcare, finance, geospatial, and e-commerce domains. Currently at Apollo Healthcare Group, driving innovation to make healthcare accessible to all.",
      image: "https://res.cloudinary.com/dgufdt51q/image/upload/v1745903853/felsnxjkzxor5jxh30st.png",
      social: {
        linkedin: "https://www.linkedin.com/in/ggauravgpt/",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 tracking-wider text-white bg-black font-Poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF0F7B]">
            Our Judges
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FF0F7B]">
            THE VIPS
          </h2>
          <p className="max-w-3xl mx-auto text-xl tracking-wider text-gray-300">
            Meet the industry experts and thought leaders at SprintHacks 3.0
          </p>
        </motion.div>

        {/* Speakers Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row overflow-hidden bg-gray-900 rounded-xl"
              >
                <div className="relative w-full sm:w-3/5 aspect-square group">
                  {speaker.image ? (
                    <img
                      src={speaker.image.replace("open?id=", "uc?export=view&id=")}
                      alt={speaker.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src={"/icon.png"}
                      alt={speaker.name}
                      className="object-contain w-full h-full p-8 bg-gray-800"
                    />
                  )}
                  <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100" />
                </div>
                <div className="flex flex-col flex-grow p-6 sm:w-3/5">
                  <h3 className="mb-1 text-2xl font-bold text-white">{speaker.name}</h3>
                  <p className="text-lg font-medium text-[#FF0F7B] mb-2">{speaker.role}</p>
                  {speaker.company && (
                    <p className="text-md text-gray-400 mb-3">{speaker.company}</p>
                  )}
                  <p className="text-sm text-gray-300 mb-4 line-clamp-4">{speaker.bio}</p>
                  <div className="flex mt-auto space-x-4">
                    {speaker.social.linkedin && (
                      <a
                        href={speaker.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-gray-800 text-gray-300 hover:bg-[#FF0F7B] hover:text-white"
                      >
                        <Linkedin size={16} />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 text-center bg-gray-900 rounded-xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">Want to speak at our next event?</h2>
          <p className="mb-6 text-gray-300">
            We're always looking for industry experts and thought leaders to share their knowledge and experience with our community.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 font-medium transition-colors rounded-md bg-[#FF0F7B] text-white hover:bg-[#D10D68]"
          >
            Get in Touch
          </a>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Speakers;