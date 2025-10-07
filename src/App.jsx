import React from 'react';

/**
 * App - Root application component
 * This is a placeholder that will be replaced during Phase 1
 */
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="glass-card max-w-md w-full p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          GymTracker Glass PWA
        </h1>
        <p className="text-white/80 mb-6">
          Phase 0 Complete - Development Environment Ready
        </p>
        <div className="flex flex-col gap-3">
          <div className="glass-badge mx-auto">
            ✅ React 18.3.1
          </div>
          <div className="glass-badge mx-auto">
            ✅ Vite Build System
          </div>
          <div className="glass-badge mx-auto">
            ✅ Tailwind CSS
          </div>
          <div className="glass-badge mx-auto">
            ✅ PWA Ready
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
