import { Clock, Music, Gamepad2, ListTodo, Clock3, Bell } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-8 w-8 text-pomoprimary" />,
    title: "Customizable Work & Break Timers",
    description: "Set your ideal work and break cycles with fully customizable timers to match your personal productivity rhythm."
  },
  {
    icon: <Music className="h-8 w-8 text-pomoprimary" />,
    title: "Ambient Music Selection",
    description: "Choose from a variety of ambient sounds and music to create the perfect background for focused work sessions."
  },
  {
    icon: <Gamepad2 className="h-8 w-8 text-pomoprimary" />,
    title: "Interactive Mini-Games",
    description: "Enjoy relaxing mini-games during break times to refresh your mind before diving back into work."
  },
  {
    icon: <ListTodo className="h-8 w-8 text-pomoprimary" />,
    title: "Built-in To-Do List",
    description: "Organize your tasks with the integrated to-do list, making it easy to track progress and maintain focus."
  },
  {
    icon: <Clock3 className="h-8 w-8 text-pomoprimary" />,
    title: "Tab Tracking & Bookmarking",
    description: "Monitor your time spent on different websites and bookmark important videos for future reference."
  },
  {
    icon: <Bell className="h-8 w-8 text-pomoprimary" />,
    title: "Smart Reminders & Notifications",
    description: "Stay on track with helpful notifications that reinforce your structured work sessions."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Enhanced Productivity
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pomodoro Play combines classic time management with modern productivity tools to create your ideal work environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-start animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-pomoblue/20 p-3 rounded-lg mb-4 animate-float">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
