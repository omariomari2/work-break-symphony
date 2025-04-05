import { Check } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-pomoblue opacity-10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pomopink opacity-10 rounded-full blur-3xl animate-pulse-subtle"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Work Habits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pomodoro Play helps you develop structured work habits while balancing productive focus time with essential breaks.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3 animate-slide-in-left [animation-delay:200ms]">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-pomoprimary" />
                  </div>
                  <p className="text-gray-600">Customizable work and break durations to match your natural rhythm</p>
                </div>
                
                <div className="flex items-start space-x-3 animate-slide-in-left [animation-delay:400ms]">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-pomoprimary" />
                  </div>
                  <p className="text-gray-600">Integrated task management to keep you organized and focused</p>
                </div>
                
                <div className="flex items-start space-x-3 animate-slide-in-left [animation-delay:600ms]">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-pomoprimary" />
                  </div>
                  <p className="text-gray-600">Ambient sounds and music to enhance your concentration</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">What Users Are Saying</h3>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <p className="text-gray-700 italic mb-4">
                  "Pomodoro Play completely changed how I work. The combination of timers and ambient music keeps me focused, while the mini-games make my breaks actually refreshing!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                    <img 
                      src="/lovable-uploads/e4e77f72-1ba5-4c2e-b648-ceb5be8b5963.png" 
                      alt="Johnson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Johnson</p>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative z-10 glass-card rounded-xl p-4 shadow-xl max-w-md mx-auto">
              <img 
                src="/lovable-uploads/e4e77f72-1ba5-4c2e-b648-ceb5be8b5963.png" 
                alt="Pomodoro Play in action" 
                className="w-full h-auto rounded-lg mb-4 animate-scale-in" 
              />
              <div className="bg-white rounded-lg p-4 shadow-sm animate-fade-in [animation-delay:200ms]">
                <h4 className="font-semibold mb-2">Your Productivity Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Focus Time Today</span>
                    <span className="font-medium">3h 45m</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pomoprimary h-2 rounded-full animate-slide-in-left" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-600">Completed Tasks</span>
                    <span className="font-medium">7/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pomoprimary h-2 rounded-full animate-slide-in-left [animation-delay:200ms]" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-20 -right-8 w-24 h-24 bg-pomoblue rounded-full opacity-20 blur-xl animate-pulse-subtle"></div>
            <div className="absolute bottom-20 -left-8 w-24 h-24 bg-pomopink rounded-full opacity-20 blur-xl animate-pulse-subtle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
