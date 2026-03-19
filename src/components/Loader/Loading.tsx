import "./Loader.css"
import { useEffect, useState } from "react";
const Loading = () => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 5; // Increment by 5% every tick
          });
        }, 50); // Updates every 50ms
    
        return () => clearInterval(interval);
      }, []);
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black">
        <div>
            
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <circle r="32" cy="40" cx="40" id="test"></circle>
        </svg>
      </div>

      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect height="64" width="64" y="8" x="8"></rect>
        </svg>
      </div>
      </div>
      <div className="w-64 h-2 mt-2 bg-gray-700 rounded">
        <div
          className="h-2 bg-[#FF0F7B] rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </section>
  );
};

export default Loading;
