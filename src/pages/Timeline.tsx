import { useState, useEffect } from "react";

const Timeline = () => {
  const [activeDay, setActiveDay] = useState(1);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const day1Events = [
    {
      time: "8:30 AM - 10:00 AM",
      title: "Registration",
      description: "Registration at CRPC Registration Desk",
      highlight: true
    },
    {
      time: "9:00 AM - 10:00 AM",
      title: "Breakfast",
      description: "Breakfast at Cafet 1st Floor",
      highlight: false
    },
    {
      time: "9:15 AM - 10:45 AM",
      title: "Inauguration",
      description: "Inauguration at Auditorium",
      highlight: true
    },
    {
      time: "12:00 PM",
      title: "Hacking Period Start",
      description: "CRPC Conference Hall + SSB Hall",
      highlight: true
    },
    {
      time: "2:00 PM",
      title: "Lunch",
      description: "Lunch at Cafet 1st Floor",
      highlight: false
    },
    {
      time: "5:00 PM - 6:00 PM",
      title: "Session on AR",
      description: "MCA Conference Hall",
      highlight: false
    },
    {
      time: "7:30 PM - 8:30 PM",
      title: "Session on JellyFaaS",
      description: "MCA Conference Hall",
      highlight: false
    },
    {
      time: "8:30 PM - 9:30 PM",
      title: "Dinner",
      description: "Dinner at Cafet 1st Floor",
      highlight: false
    },
    {
      time: "10:00 PM - 11:30 PM",
      title: "Mentoring Round",
      description: "Get advice from industry experts",
      highlight: true
    },
    {
      time: "12:00 AM - 1:00 AM",
      title: "Fun Activity",
      description: "Take a break and have some fun!",
      highlight: false
    }
  ];

  const day2Events = [
    {
      time: "2:00 AM - 3:00 AM",
      title: "Entertainment Night",
      description: "Take a break from coding",
      highlight: false
    },
    {
      time: "10:00 AM - 11:00 AM",
      title: "Breakfast",
      description: "Breakfast at Cafet 1st Floor",
      highlight: false
    },
    {
      time: "11:00 AM - 12:00 PM",
      title: "Project Submission",
      description: "Submit your project on Devfolio",
      highlight: true
    },
    {
      time: "12:00 PM",
      title: "Hackathon Ends",
      description: "Coding period officially ends",
      highlight: true
    },
    {
      time: "12:00 PM - 2:00 PM",
      title: "Judging Round",
      description: "Present your project to the judges",
      highlight: true
    },
    {
      time: "2:30 PM - 3:00 PM",
      title: "Felicitation",
      description: "Winners announcement at MCA Conference Hall",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 text-white ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          className="mb-16 text-center"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeIn 0.8s ease-out forwards'
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            SprintHacks 3.0 Schedule
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            48 hours of intense coding, learning and innovation. Check the schedule and get ready for an amazing hackathon experience!
          </p>
          
          {/* Day Selection Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-6 py-2 text-lg font-medium rounded-full transition-all duration-300 ${
                activeDay === 1
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              Day 1  (May 2nd)
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-6 py-2 text-lg font-medium rounded-full transition-all duration-300 ${
                activeDay === 2
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              Day 2 (May 3rd)
            </button>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-600 transform -translate-x-1/2 z-10" />
          
          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-600" />
          
          {/* Timeline items */}
          <div className="relative">
            {(activeDay === 1 ? day1Events : day2Events).map((event, index) => (
              <div
                key={index}
                className="mb-12 md:mb-16 relative"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`
                }}
              >
                {/* Timeline dot - mobile and desktop */}
                <div className={`absolute ${
                  // For mobile: left aligned
                  "left-4 md:left-1/2 top-6"
                } z-20 transform md:-translate-x-1/2`}>
                  <div className="w-6 h-6 rounded-full border-4 border-black bg-gradient-to-r from-pink-500 to-purple-600 shadow-md transition-transform duration-300 hover:scale-125" />
                </div>
                
                {/* Content positioning wrapper */}
                <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className={`
                    pl-16 md:pl-0
                    ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}
                    md:w-1/2
                  `}>
                    {/* Content card */}
                    <div 
                      className={`p-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:scale-105 ${
                        event.highlight 
                          ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-pink-500/30" 
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      <div className="mb-4">
                        <div className={`inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium`}>
                          {event.time}
                        </div>
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(236, 72, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(236, 72, 153, 0); }
        }
      `}</style>
    </div>
  );
};

export default Timeline;