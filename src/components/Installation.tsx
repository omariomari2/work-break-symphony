import { Button } from "@/components/ui/button";
import { Github, Chrome, Download, ExternalLink } from "lucide-react";

const Installation = () => {
  return (
    <section id="installation" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Install Pomodoro Play
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get started with Pomodoro Play in just a few simple steps
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center p-6 border border-dashed border-gray-200 rounded-lg hover:border-pomoprimary transition-colors duration-300">
                <Chrome className="h-12 w-12 text-pomoprimary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Chrome Web Store</h3>
                <p className="text-gray-600 mb-4">Coming Soon to the Chrome Web Store</p>
                <Button className="bg-pomo-gradient hover:bg-pomo-gradient hover:opacity-80 transition-opacity" disabled>
                  <Chrome className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
              
              <div className="text-center p-6 border border-dashed border-gray-200 rounded-lg hover:border-pomoprimary transition-colors duration-300">
                <Github className="h-12 w-12 text-pomoprimary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">From GitHub</h3>
                <p className="text-gray-600 mb-4">Download and install from the source</p>
                <a 
                  href="https://github.com/omariomari2/Pomodoro-Play.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-pomo-gradient hover:bg-pomo-gradient hover:opacity-80 transition-opacity">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Manual Installation</h3>
              <ol className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-pomoblue/30 text-pomoprimary w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-semibold">1</span>
                  <div>
                    <p>Download the extension from GitHub.</p>
                    <a 
                      href="https://github.com/omariomari2/Pomodoro-Play.git" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-pomoprimary hover:underline hover:opacity-80 transition-opacity mt-1"
                    >
                      Visit Repository <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-pomoblue/30 text-pomoprimary w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-semibold">2</span>
                  <p>Unzip the downloaded file (if applicable).</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-pomoblue/30 text-pomoprimary w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-semibold">3</span>
                  <p>Open Chrome and navigate to <span className="font-medium">chrome://extensions</span>.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-pomoblue/30 text-pomoprimary w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-semibold">4</span>
                  <p>Enable "Developer mode" in the top-right corner.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-pomoblue/30 text-pomoprimary w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 font-semibold">5</span>
                  <p>Click "Load unpacked" and select the extension folder.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
