import { motion } from "framer-motion";
import { GraduationCap, Network, Crown } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const About = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF0F7B]">
            About SprintHacks 3.0
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            SprintHacks 3.0 is a 24 hour offline hackathon organized by Google
            Developer Groups on Campus KIET with endless creativity. Students are challenged to
            further what they know by creating projects following their
            passions. Spending time on projects outside the classroom is the
            best way to not only learn what you love, but also find new
            interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 bg-gray-900 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#FF0F7B]">
              The Challenge
            </h2>
            <p className="text-gray-300">
              24 hours of intense coding, problem-solving, and innovation. Teams
              will face increasingly difficult challenges, with eliminations at
              key checkpoints. Only the strongest ideas and implementations will
              survive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 bg-gray-900 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#FF0F7B]">
              The Prize
            </h2>
            <p className="text-gray-300">
              A total prize pool of 75,000 awaits the survivors. But remember,
              in SprintHacks 3.0, it's not just about winning – it's about surviving
              each round with your code and creativity intact.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#FF0F7B]">
            Why Participate?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl">
              <GraduationCap className="w-1/2 h-20" />
              <h3 className="mb-3 text-xl font-bold">Learn</h3>
              <p className="text-gray-300">
                Push your limits and acquire new skills under pressure.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl">
              <Network className="w-1/2 h-16" />
              <h3 className="my-3 text-xl font-bold">Network</h3>
              <p className="text-gray-300">
                Connect with fellow survivors and industry leaders.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl">
              <Crown className="w-1/2 h-16" />
              <h3 className="my-3 text-xl font-bold">Win Big</h3>
              <p className="text-gray-300">
                Compete for substantial prizes and recognition.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
