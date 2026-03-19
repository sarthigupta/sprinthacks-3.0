import { motion } from "framer-motion";
import {
  BrainCircuit,
  Lightbulb,
  BookOpen,
  Globe,
  Stethoscope,
  Banknote,
  ScanEye,
  Wifi,
} from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Tracks = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  const tracks = [
    {
      icon: <BrainCircuit className="w-12 h-12 text-[#FF0F7B]" />,
      title: "AI",
      description:
        "Build innovative solutions using artificial intelligence and machine learning.",
      challenges: [
        "Implement a survival prediction model",
        "Create an AI game master",
        "Develop pattern recognition systems",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-[#FF0F7B]" />,
      title: "Open Innovation",
      description:
        "Drive innovation through technology, collaboration, and problem-solving.",
      challenges: [
        "Collaborative Problem-Solving Platform",
        "Sustainable Tech Solutions",
        "Inclusive Digital Accessibility",
      ],
    },
    {
      icon: <Wifi className="w-12 h-12 text-[#FF0F7B]" />,
      title: "INTERNET OF THINGS",
      description:
        "Connect the physical and digital worlds through smart, sensor-driven solutions.",
      challenges: [
        "Smart Home Automation",
        "IoT-Based Environmental Monitoring",
        "Industrial IoT for Predictive Maintenance",
      ],
    },    
    {
      icon: <BookOpen className="w-12 h-12 text-[#FF0F7B]" />,
      title: "EDTECH",
      description:
        "Transform education with technology and innovative solutions.",
      challenges: [
        "AI-Powered Personalized Learning",
        "Gamified Education",
        "Real-Time Collaboration Tools",
      ],
    },
    {
      icon: <Globe className="w-12 h-12 text-[#FF0F7B]" />,
      title: "Web3",
      description: "Create blockchain-based solutions for transparent gaming.",
      challenges: [
        "Smart contract implementation",
        "Decentralized voting system",
        "Token-based rewards",
      ],
    },
    {
      icon: <ScanEye className="w-12 h-12 text-[#FF0F7B]" />,
      title: "AR/VR",
      description: "Build secure systems for fair and safe gameplay.",
      challenges: [
        "Anti-cheat systems",
        "Secure player verification",
        "Privacy-preserving analytics",
      ],
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-[#FF0F7B]" />,
      title: "Healthcare",
      description:
        "Enhance healthcare with technology for better access, diagnostics, and care.",
      challenges: [
        "Wearable Health Monitoring",
        "Telemedicine & Remote Care",
        "Mental Health Support",
      ],
    },
    {
      icon: <Banknote className="w-12 h-12 text-[#FF0F7B]" />,
      title: "Fintech",
      description:
        "Innovate financial services for security, efficiency, and inclusivity.",
      challenges: [
        "Fraud Prevention System",
        "Decentralized Finance (DeFi) Solutions",
        "Inclusive Banking for the Unbanked",
      ],
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
            Competition Tracks
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Choose your battlefield wisely. Each track presents unique
            challenges and opportunities for survival.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 bg-gray-900 rounded-xl"
            >
              <div className="flex items-center mb-6">
                {track.icon}
                <h3 className="ml-4 text-2xl font-bold">{track.title}</h3>
              </div>
              <p className="mb-6 text-gray-300">{track.description}</p>
              <div className="space-y-4">
                <h4 className="font-bold text-[#FF0F7B]">Key Challenges:</h4>
                <ul className="space-y-2">
                  {track.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-[#FF0F7B] rounded-full mr-3"></span>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-8 mt-16 text-center bg-gray-900 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#FF0F7B]">
            Special Rules
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <p className="mb-2 font-bold">Team Size</p>
              <p className="text-gray-300">2-4 members per team</p>
            </div>
            <div>
              <p className="mb-2 font-bold">Submission</p>
              <p className="text-gray-300">Working prototype required</p>
            </div>
            <div>
              <p className="mb-2 font-bold">Judging</p>
              <p className="text-gray-300">Live demo presentation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tracks;
