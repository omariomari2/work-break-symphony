import { Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-pomo-gradient mb-4">
              Pomodoro Play
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              A Chrome extension based on the Pomodoro Technique, enabling users to manage work and 
              break cycles effectively with customizable features.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/omariomari2/Pomodoro-Play.git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pomoprimary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://x.com/omariii_vs" className="text-gray-500 hover:text-pomoprimary transition-colors">
                <Twitter size={20} />
              </a> 
              <a href="mailto:owusuomaribright.com" className="text-gray-500 hover:text-pomoprimary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 hover:text-pomoprimary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-600 hover:text-pomoprimary transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#installation" className="text-gray-600 hover:text-pomoprimary transition-colors">
                  Installation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/omariomari2/Pomodoro-Play.git" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pomoprimary transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pomoprimary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pomoprimary transition-colors">
                  Report a Bug
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Pomodoro Play. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0 flex items-center">
            Made by Omari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
