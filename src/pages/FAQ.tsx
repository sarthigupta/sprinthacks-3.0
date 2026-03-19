import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../Constants/Faq";
import { useLocation } from "react-router-dom";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  
  return (
    <div className="min-h-screen pt-24 pb-16 text-white bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF0F7B] font-Poppins tracking-wider">
            Frequently Asked Questions
          </h1>
          <p className="max-w-3xl mx-auto text-xl tracking-wider text-gray-300 font-Poppins">
            Everything you need to know about surviving SprintHacks 3.0.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto tracking-wider font-Poppins">
          {faqs.map((faq: FAQProps, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, backgroundColor: "#111827" }} // Explicitly set bg-gray-900 color in hex
              animate={{ opacity: 1, y: 0, backgroundColor: "#111827" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left bg-gray-900 rounded-xl focus:outline-none hover:bg-gray-800"
                style={{ backgroundColor: "#111827" }} // Force background color with inline style
              >
                <div className="flex items-center justify-between">
                  <h3 className="pl-5 text-xl font-bold">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#FF0F7B]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#FF0F7B]" />
                  )}
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-5 mt-4 text-gray-300"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;