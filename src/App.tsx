import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./components/Loader/Loading";
import { Analytics } from "@vercel/analytics/react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Timeline = lazy(() => import("./pages/Timeline"));
const Prizes = lazy(() => import("./pages/Prizes"));
const Tracks = lazy(() => import("./pages/Tracks"));

const FAQ = lazy(() => import("./pages/FAQ"));
const Speaker = lazy(() => import("./pages/Speaker"));
const Team = lazy(() => import("./pages/Team"));
const Sponsors = lazy(() => import("./pages/Sponsors"));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Show loader for at least 1.2s
    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      <Analytics />
      <div className="min-h-screen bg-[#121212]">
        <Navbar />
        {loading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/prizes" element={<Prizes />} />
              <Route path="/tracks" element={<Tracks />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/team" element={<Team />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/judges" element={<Speaker />} />
            </Routes>
          </Suspense>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
