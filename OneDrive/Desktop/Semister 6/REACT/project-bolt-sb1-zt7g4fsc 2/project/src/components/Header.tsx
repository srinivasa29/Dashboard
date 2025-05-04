import React from 'react';
import { AlertTriangle, Github } from 'lucide-react';

interface HeaderProps {
  onNewIncident: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNewIncident }) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Safety Incident Dashboard</h1>
              <p className="text-gray-600">Track and manage AI safety incidents</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/srinivasa29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <button
              onClick={onNewIncident}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
            >
              Report New Incident
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;