import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Team = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const teamMembers = [
    {
      name: "Shashwat Rai",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611671/Shashwat_Rai_hwekpg.jpg",
      social: {
        linkedin: "https://in.linkedin.com/in/shashwatrai05",
        email: "shashwatrai575@gmail.com",
      },
    },
    {
      name: "Nakshatra Manglik",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1745262805/WhatsApp_Image_2025-04-22_at_00.19.07_566ba2cf_y47lsp.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/nakshatra-manglik",
        email: "nakshatramanglik14@gmail.com",
      },
    },
    {
      name: "Abhimanyu Jaiswal",
      role: "The Frontmen",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHkfMVLdSgcHw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725056824950?e=1750291200&v=beta&t=kPhcCscxUrK4sDVfNYeGat0TdLJf6OjPf5L0GJPsl4o",
      social: {
        linkedin: "https://www.linkedin.com/in/jaiswalabhimanyu",
      },
    },

    {
      name: "Vaishnavi Verma",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611674/Vaishnavi_Verma_mcasik.png",
      social: {
        linkedin: "https://www.linkedin.com/in/vaishnavi-verma-899475238/",
        email: "vaishnavi.2226cseai1@kiet.edu",
      },
    },
    {
      name: "Aryan Rajpoot",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/ddhr4kzbh/image/upload/AryanRajpoot_i7x27x.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/aryanrajpoot27/",
        email: "27aryanrajpoot@gmail.com",
      },
    },
    {
      name: "Ankit Jaiswal",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611673/Ankit_Jaiswal_y65rk8.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/ankit-jaiswal-936898257/",
        email: "ankit.2226cse1153@kiet.edu",
      },
    },
    {
      name: "Mohit Kumar Singh",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611665/Mohit_t2gku2.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/metechmohit/",
        email: "mohitsingheng@gmail.com",
      },
    },
    {
      name: "Vishesh",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611674/Vishesh_wwedvw.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/vishesh-%E2%80%8E-48b1b8257/",
        email: "Vishesh.2226cse1119@gmail.com",
      },
    },
    
    {
      name: "Shreya Gupta",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611667/Shreya_gupta_k6o0pp.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/shreya-gupta-04sh",
      },
    },
    {
      name: "Gaurav Gupta",
      role: "The Frontmen",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611657/IMG-20250311-WA0023_zsj8jh.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/i-gauravgupta",
        email: "gaurav33dev@gmail.com",
      },
    },
    {
      name: "Saksham Jain",
      role: "The Managers",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGA9svksQxWyw/profile-displayphoto-shrink_400_400/B56ZYzLLjtGUAg-/0/1744615291789?e=1750291200&v=beta&t=KGYhwrUIcDl-yar34i2m_SffjmnjXC891NP6ci06OqE",
      social: {
        linkedin: "http://www.linkedin.com/in/sakshamjain007",
        email: "saksham.2327cseml100@kiet.edu",
      },
    },
    {
      name: "Divyanshu Kumar",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611665/Divyanshu_qmf0vd.png",
      social: {
        linkedin: "https://www.linkedin.com/in/iamdivyanshukumar",
        email: "divyanshu.2327cse123@kiet.edu",
      },
    },
    {
      name: "Krishna Kumar Agrahari",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611666/Krishna_Kumar_Agrahari_puhvwy.jpg",
      social: {
        linkedin: "https://www.linkedin.com/me?trk=p_mwlite_profile_view-secondary_nav",
        email: "krishna.2327csit1147@gmail.com",
      },
    },
    {
      name: "Harsh Chandra Srivastava",
      role: "The Managers",
      image: "https://res.cloudinary.com/dgufdt51q/image/upload/v1745080204/beljlm2l0hoebppckify.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/harshcsrivastava",
        email: "harshcsrivastava@gmail.com",
      },
    },
    {
      name: "Prince Kumar Yadav",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611672/Prince_Kumar_Yadav_jaii0u.jpg",
      social: {
        linkedin: "http://www.linkedin.com/in/prince-kumar-yadav-a271b6282",
        email: "princeyadav21272@gmail.com",
      },
    },
    {
      name: "Kushwaha Rajat Kamalakant",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611664/Kushwaha_Rajat_Kamalakant_u0trhi.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/kushwaha-rajat-kamalakant",
        email: "kushwaha.2327cse1150@kiet.edu",
      },
    },
    {
      name: "Harsh Chaudhary",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611662/HARSH_CHAUDHARY_ifw6cp.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/harsh-chaudhary-5bb7882a4/",
        email: "choudharyharsh9706@gmail.com",
      },
    },
    {
      name: "Divyam Asthana",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611658/Divyam_Asthana.jpg_m7k7x2.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/divyam-asthana",
        email: "divyamasthanaprofessional.001@gmail.com",
      },
    },
    {
      name: "Vansh Maheshwari",
      role: "The Managers",
      image: "https://res.cloudinary.com/ddhr4kzbh/image/upload/new_iujg1u.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/vansh-maheshwari931/",
        email: "maheshwarivansh931@gmail.com",
      },
    },
    {
      name: "Kartikey Singh",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611662/Kartikey_la1blk.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/kartikey-singh-54a560288",
        email: "kartikey.2327cse@kiet.edu",
      },
    },
    {
      name: "Jayesh Mishra",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611657/JayeshMishra_vxibi1.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/jayesh-mishra-2a4650296",
        email: "jayesh.2327it1063@kiet.edu",
      },
    },
    {
      name: "Deepanshu Singh",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611657/deepanshu_singh_dcgikv.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/deepanshu-singh-468b59284",
        email: "dsmeghwal008@gmail.com",
      },
    },
    {
      name: "Mahatva Chandna",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611667/Mahatva_Chandna_h2hnhr.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mahatvachandna",
        email: "mahatva.2327csit1215@kiet.edu",
      },
    },
    {
      name: "Dev Kumar",
      role: "The Managers",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611658/Dev.02_lymf7b.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/dev-kumar-44aa66289/",
        email: "dev.2327cse1207@kiet.edu",
      },
    },
    {
      name: "Vaishnavi Mishra",
      role: "The Masked Guards",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611673/Vaishnavi_Mishra__jx3ftz.png",
      social: {
        linkedin: "http://www.linkedin.com/in/vaishnavimishra1123",
        email: "vaishnavi.2428cseai8@kiet.edu",
      },
    },
    {
      name: "Mansi Verma",
      role: "The Masked Guards",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611665/Mansi_verma_kqwhct.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mansi-verma-4794a4328",
        email: "mansi.2428cs2540@kiet.edu",
      },
    },
    {
      name: "Sumit Pandey",
      role: "The Masked Guards",
      image: "https://res.cloudinary.com/dgufdt51q/image/upload/v1745080291/tmfejbgxznnwfyxz20lj.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/sumit-pandey-94940b327",
        email: "sumit.2428cse1842@kiet.edu",
      },
    },
    {
      name: "Somesh Tiwari",
      role: "The Masked Guards",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611676/Somesh_Tiwari_t8tdwf.png",
      social: {
        linkedin: "https://www.linkedin.com/in/somesh-tiwari-236555322/",
        email: "somesh.2428it520@kiet.edu",
      },
    },
    {
      name: "Krrish Singhal",
      role: "The Masked Guards",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611660/Krrish_Singhal_autegz.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/krrish-singhal-4765b1302/",
        email:"krrish.2428cse244@kiet.edu",
      },
    },
    {
      name: "Saumya Sharma",
      role: "The Masked Guards",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611670/Saumya_Sharma__nrl7g8.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/saumya-m06",
        email: "saumya.2428cseaiml12@kiet.edu",
      },
    },
    {
      name: "Shubh Awasthi",
      role: "The Masked Guards",
      image: "https://res.cloudinary.com/djc8hwlgb/image/upload/v1744611669/Shubh_Awasthi_aqd7an.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/shubh-awasthi-2b357a328",
        email: "abhimanyu.2226ec1028@kiet.edu",
      },
    },
  ];

  // Group members by role
  const frontmen = teamMembers.filter(member => member.role === "The Frontmen");
  const managers = teamMembers.filter(member => member.role === "The Managers");
  const maskedGuards = teamMembers.filter(member => member.role === "The Masked Guards");

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
            Our Team
          </h1>
          <p className="max-w-3xl mx-auto text-xl tracking-wider text-gray-300">
            Meet the masterminds behind SprintHacks 3.0
          </p>
        </motion.div>

        {/* The Frontmen Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#FF0F7B] text-center">
            The Frontmen
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {frontmen.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden bg-gray-900 rounded-xl"
              >
                <div className="relative aspect-square group">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src={"/icon.png"}
                      alt={member.name}
                      className="object-contain w-full h-full p-8 bg-gray-800"
                    />
                  )}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-100" />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="mb-1 text-xl font-bold text-center truncate">{member.name}</h3>
                  <div className="flex justify-center mt-auto space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FF0F7B] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-[#FF0F7B] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22 6 12 13 2 6"></polyline>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Managers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#FF0F7B] text-center">
            The Managers
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {managers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden bg-gray-900 rounded-xl"
              >
                <div className="relative aspect-square group">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src={"/icon.png"}
                      alt={member.name}
                      className="object-contain w-full h-full p-8 bg-gray-800"
                    />
                  )}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-100" />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="mb-1 text-xl font-bold text-center truncate">{member.name}</h3>
                  <div className="flex justify-center mt-auto space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FF0F7B] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-[#FF0F7B] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22 6 12 13 2 6"></polyline>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Masked Guards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-[#FF0F7B] text-center">
            The Masked Guards
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {maskedGuards.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden bg-gray-900 rounded-xl"
              >
                <div className="relative aspect-square group">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src={"/icon.png"}
                      alt={member.name}
                      className="object-contain w-full h-full p-8 bg-gray-800"
                    />
                  )}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-100" />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="mb-1 text-xl font-bold text-center truncate">{member.name}</h3>
                  <div className="flex justify-center mt-auto space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FF0F7B] transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-[#FF0F7B] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22 6 12 13 2 6"></polyline>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;