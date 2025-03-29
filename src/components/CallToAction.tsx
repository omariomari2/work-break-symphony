
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-pomo-gradient opacity-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pomoblue opacity-20 blur-3xl transform rotate-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-pomopink opacity-20 blur-3xl transform -rotate-12 -translate-x-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Clock className="h-16 w-16 text-pomoprimary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have improved their work habits and achieved better focus with Pomodoro Play. Start your productivity journey today!
          </p>
          <a 
            href="https://github.com/omariomari2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-pomo-gradient hover:bg-pomo-gradient-hover text-white px-8 py-6 text-lg">
              Get Pomodoro Play
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
