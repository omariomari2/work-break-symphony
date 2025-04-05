import React from 'react';

const ProductivityGraph = () => {
  const productivityData = [
    { day: 'Mon', focus: 65, tasks: 8 },
    { day: 'Tue', focus: 80, tasks: 12 },
    { day: 'Wed', focus: 75, tasks: 10 },
    { day: 'Thu', focus: 90, tasks: 15 },
    { day: 'Fri', focus: 85, tasks: 14 },
    { day: 'Sat', focus: 70, tasks: 9 },
    { day: 'Sun', focus: 60, tasks: 7 },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto glass-card rounded-xl p-6 animate-fade-in">
      <h3 className="text-xl font-semibold mb-6">Weekly Productivity Overview</h3>
      <div className="relative h-64 bg-white/80 rounded-lg p-4">
        {/* Grid lines */}
        <div className="absolute inset-x-0 inset-y-4 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-px bg-gray-200" />
          ))}
        </div>
        
        <div className="absolute inset-0 grid grid-cols-7 gap-2">
          {productivityData.map((data, index) => (
            <div key={data.day} className="flex flex-col items-center justify-end h-full">
              <div className="relative w-full group">
                {/* Focus bar */}
                <div 
                  className="w-full bg-pomoblue rounded-t-lg animate-productivity-grow transition-all duration-300 group-hover:bg-pomoblue shadow-sm"
                  style={{ 
                    height: '0',
                    '--graph-height': `${data.focus}%`,
                    animationDelay: `${index * 100}ms`
                  } as React.CSSProperties}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                    {data.focus}% Focus
                  </div>
                </div>
                {/* Tasks bar */}
                <div 
                  className="absolute bottom-0 w-full bg-pomopink rounded-t-lg animate-productivity-grow transition-all duration-300 group-hover:bg-pomopink shadow-sm"
                  style={{ 
                    height: '0',
                    '--graph-height': `${(data.tasks / 15) * 100}%`,
                    animationDelay: `${(index * 100) + 300}ms`
                  } as React.CSSProperties}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                    {data.tasks} Tasks
                  </div>
                </div>
              </div>
              <span className="mt-2 text-sm text-gray-600">{data.day}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded bg-pomoblue mr-2 shadow-sm"></div>
          <span className="text-sm text-gray-600">Focus Time</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded bg-pomopink mr-2 shadow-sm"></div>
          <span className="text-sm text-gray-600">Tasks Completed</span>
        </div>
      </div>
    </div>
  );
};

export default ProductivityGraph; 