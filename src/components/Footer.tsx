import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#1a1a1a] text-white py-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 text-center md:mb-0 md:text-left">
            <div className="flex items-center space-x-2">
              <img src="/logo1.svg" alt="logo" className="w-16 h-16" />
              <span className="text-lg font-bold gradient-text sm:text-xl font-PoppinsBold">
                SPRINTHACKS 3.0
              </span>
            </div>

            <p className="mt-2 text-sm tracking-wider text-gray-400 sm:text-base font-Poppins">
              Join the game. Code to survive.
            </p>
          </div>

          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="https://www.linkedin.com/company/sprinthacks/"
              className="text-gray-400 hover:text-[#FF0F7B] transition-colors p-2"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20} />
            </a>
            {/* <a
              href="#"
              className="text-gray-400 hover:text-[#FF0F7B] transition-colors p-2"
            >
              <Twitter size={20} />
            </a> */}
            <a
              href="https://www.instagram.com/sprinthacks?igsh=N2t5Ynp4OGI4bXlh"
              className="text-gray-400 hover:text-[#FF0F7B] transition-colors p-2"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="pt-6 mt-6 text-sm tracking-wider text-center text-gray-400 border-t border-gray-800 font-Poppins md:mt-8 md:pt-8 sm:text-base">
          <p>&copy; 2025 SprintHacks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
