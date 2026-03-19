// components/ComingSoon.tsx
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./ComingSoon.module.css";

interface CountdownProps {
  targetDate: Date;
}

const ComingSoon: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Replace with your actual SheetDB API endpoint
  // const SHEET_DB_API = "https://sheetdb.io/api/v1/opf1sn6wq4hal";

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Current date and time for timestamp
      const currentDate = new Date().toISOString();
      
      const response = await fetch("https://sheetdb.io/api/v1/opf1sn6wq4hal", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              email: email,
              timestamp: currentDate
            }
          ]
        })
      });
      
      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! We\'ll notify you when we launch.'
        });
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
          {/* <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center w-full h-full md:w-full lg:w-1/2 mb-8"
            src="/logo.png"
            alt="SprintHacks Logo"
            loading="lazy"
          /> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-Poppins"
          >
            Coming Soon
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-lg mx-auto text-xl tracking-wider text-gray-300 font-Poppins mb-10"
          >
            Get ready for the next phase. The countdown has begun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-4 gap-4 md:gap-8 mb-12"
          >
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl md:text-5xl font-bold gradient-text font-Poppins mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-Poppins">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col w-full max-w-md mx-auto gap-4"
            onSubmit={handleSubscribe}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1 px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#FF0F7B]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
              />
              <button
                type="submit"
                className={`bg-[#FF0F7B] text-white px-6 py-3 rounded-lg font-Poppins font-bold hover:bg-[#FF0F7B]/90 transition-all ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Notify Me'}
              </button>
            </div>
            
            {submitStatus.type && (
              <div 
                className={`mt-2 text-sm font-Poppins ${
                  submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </motion.form>

          <div className="flex justify-center mt-16">
            <ChevronDown className="w-8 h-8 neon-shape animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;