
import { Check } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-pomoblue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pomopink opacity-10 rounded-full blur-3xl"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Work Habits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pomodoro Play helps you develop structured work habits while balancing productive focus time with essential breaks.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Improve focus with dedicated work sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Reduce burnout with structured break times</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Track your daily productivity patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Stay motivated with progress visualizations</span>
                </li>
              </ul>
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
          
          <div className="relative">
            <div className="relative z-10 glass-card rounded-xl p-4 shadow-xl max-w-md mx-auto">
              <img 
                src="/lovable-uploads/e4e77f72-1ba5-4c2e-b648-ceb5be8b5963.png" 
                alt="Pomodoro Play in action" 
                className="w-full h-auto rounded-lg mb-4" 
              />
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold mb-2">Your Productivity Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Focus Time Today</span>
                    <span className="font-medium">3h 45m</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pomoprimary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-600">Completed Tasks</span>
                    <span className="font-medium">7/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-pomoprimary h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-20 -right-8 w-24 h-24 bg-pomoblue rounded-full opacity-20 blur-xl"></div>
            <div className="absolute bottom-20 -left-8 w-24 h-24 bg-pomopink rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
