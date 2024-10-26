import React from 'react';
import IconBar from './components/IconBar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <IconBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Welcome to Chatty Vid Connect
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
}

export default App;