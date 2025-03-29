
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-pomo-gradient hover:opacity-80 transition-opacity">
              Pomodoro Play
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-pomoprimary hover:opacity-80 transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-pomoprimary hover:opacity-80 transition-colors">
              Benefits
            </a>
            <a href="#installation" className="text-gray-700 hover:text-pomoprimary hover:opacity-80 transition-colors">
              Installation
            </a>
          </nav>
          <div>
            <a 
              href="https://github.com/omariomari2" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-pomo-gradient hover:bg-pomo-gradient hover:opacity-80 transition-opacity">
                <Github className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
