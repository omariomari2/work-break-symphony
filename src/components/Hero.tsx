
import { Button } from "@/components/ui/button";
import { Github, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-pomo-gradient opacity-10"></div>
      <div className="section-container pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-500 hover:scale-105">
              Balance Your Work & Breaks with 
              <span className="bg-clip-text text-transparent bg-pomo-gradient hover:opacity-80 transition-all duration-500"> Pomodoro Play</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Boost your productivity with customizable timers, ambient music, and interactive mini-games.
              Focus better, work smarter, and maintain a balanced workflow.
            </p>
            <div className="space-x-4">
              <a 
                href="https://github.com/omariomari2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-pomo-gradient hover:bg-pomo-gradient hover:opacity-80 transition-opacity">
                  <Github className="mr-2 h-4 w-4" />
                  Get Extension
                </Button>
              </a>
              <Button variant="outline" onClick={scrollToFeatures} className="hover:opacity-80 transition-opacity">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="grid grid-cols-1 gap-4">
              {/* Timer UI Image */}
              <div className="w-full max-w-md glass-card rounded-xl p-2 shadow-lg -rotate-3 animate-fade-in hover:scale-105 transition-all duration-500 transform-gpu">
                <img 
                  src="/lovable-uploads/38f504ab-c0d2-4a26-89d4-8e2e8fefe099.png" 
                  alt="Pomodoro Timer Interface" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Task Manager UI Image */}
              <div className="w-full max-w-md glass-card rounded-xl p-2 shadow-lg rotate-3 animate-fade-in hover:scale-105 transition-all duration-500 transform-gpu delay-150">
                <img 
                  src="/lovable-uploads/dd49e9cc-8762-4616-9fca-365705d8b152.png" 
                  alt="Pomodoro Task Management" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pomoblue rounded-full opacity-50 blur-xl animate-pulse-subtle"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pomopink rounded-full opacity-40 blur-xl animate-pulse-subtle"></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-subtle">
          <button onClick={scrollToFeatures} className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
