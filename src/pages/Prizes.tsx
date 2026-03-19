import { motion } from 'framer-motion';
import { Trophy, Award, Medal, ExternalLink, Sparkles } from 'lucide-react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Prizes = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen pt-24 pb-16 tracking-wider text-white bg-black font-Poppins">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF0F7B]">Prize Pool</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Survive all rounds and claim your share of the 100,000+ prize pool.
            Only the strongest will prevail.
          </p>
        </motion.div>

        {/* Main Prizes Section - Enhanced First Place */}
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Main Prizes</h2>

        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3 ">
          {/* Third Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-16 text-center bg-gray-900 rounded-xl"
          >
            <Medal className="w-16 h-16 text-[#CD7F32] mx-auto mb-4" />
            <h3 className="mb-2 text-2xl font-bold">Third Place</h3>
            <p className="text-4xl font-bold text-[#CD7F32] mb-4">15,000</p>
          </motion.div>

          {/* First Place - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 text-center transform bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl md:-translate-y-12 shadow-lg shadow-[#FFD700]/20 border border-[#FFD700]/30"
          >
            <div className="relative">
              <Trophy className="w-24 h-24 text-[#FFD700] mx-auto mb-4" />
              <Sparkles className="absolute top-0 right-8 w-6 h-6 text-[#FFD700]" />
              <Sparkles className="absolute bottom-4 left-8 w-6 h-6 text-[#FFD700]" />
            </div>
            <h3 className="mb-2 text-3xl font-bold">First Place</h3>
            <p className="text-6xl font-bold text-[#FFD700] mb-4">35,000</p>
            <p className="text-gray-300 font-bold">Grand Champion</p>
          </motion.div>

          {/* Second Place */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-16 text-center bg-gray-900 rounded-xl"
          >
            <Award className="w-16 h-16 text-[#C0C0C0] mx-auto mb-4" />
            <h3 className="mb-2 text-2xl font-bold">Second Place</h3>
            <p className="text-4xl font-bold text-[#C0C0C0] mb-4">25,000</p>
          </motion.div>
        </div>

        {/* Track Prizes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Track </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Ethereum Track */}
            <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-[#FF0F7B]/30 transition-all"
>
  <div className="flex justify-between items-start mb-4">
    <div className="flex items-center">
      <img 
        src="/eth.png" 
        alt="Ethereum Logo" 
        className="w-20 h-10 mr-3"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/13c43/eth-diamond-black.png";
        }}
      />
      <h3 className="text-xl font-bold">Ethereum Track</h3>
    </div>
    <span className="text-2xl font-bold text-[#FF0F7B]">$100</span>
  </div>
  <p className="text-gray-300 mb-4">
    ETHIndia is empowering the Ethereum Community through its various initiatives including hackathons, fellowships, grants, and more!
  </p>
  <ul className="text-gray-300 space-y-2">
    <li className="flex items-start">
      <span className="mr-2">💰</span>
      <span>Build innovative dApps on the Ethereum blockchain to win prizes</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">🔗</span>
      <span>Use smart contracts, ERC tokens, or web3 libraries to qualify</span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">🚀</span>
      <span>Projects evaluated on creativity, technical complexity and real-world utility</span>
    </li>
  </ul>
</motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-[#FF0F7B]/30 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img
                    src="data:image/png;base64,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"
                    alt="GoFr Logo"
                    className="w-20 h-10 mr-3"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placeholder.com/logo";
                    }}
                  />
                  <h3 className="text-xl font-bold">GoFr Track</h3>
                </div>
                <span className="text-2xl font-bold text-[#FF0F7B]">$100</span>
              </div>
              <p className="text-gray-300 mb-4">
                Build robust, scalable web applications using GoFr, an opinionated web framework built in Go. Whether it's APIs, microservices, or full-stack apps — GoFr helps you ship faster with clean, modular code.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">🏆</span>
                  <span>Best project wins the GoFr Track Prize</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔧</span>
                  <span>Use GoFr as your backend framework to qualify.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎯</span>
                  <span>Judged on innovation, code quality, and impact.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default Prizes;