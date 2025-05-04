import React, { useState } from 'react';
import { Incident } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SeverityBadge from './SeverityBadge';
import { formatDate } from '../utils/dateUtils';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md mb-4 overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{ 
        transform: expanded ? 'scale(1.01)' : 'scale(1)',
        borderLeft: `4px solid ${
          incident.severity === 'High' ? '#EF4444' : 
          incident.severity === 'Medium' ? '#F59E0B' : 
          '#3B82F6'
        }`
      }}
    >
      <div className="p-4 cursor-pointer" onClick={toggleExpand}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{incident.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{formatDate(incident.reported_at)}</span>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-0 gap-3">
            <SeverityBadge severity={incident.severity} />
            <button 
              className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label={expanded ? "Collapse details" : "Expand details"}
            >
              {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className="overflow-hidden transition-all duration-300"
        style={{ 
          maxHeight: expanded ? '500px' : '0px',
          opacity: expanded ? 1 : 0
        }}
      >
        <div className="p-4 pt-0 bg-gray-50">
          <p className="text-gray-700 whitespace-pre-line">{incident.description}</p>
        </div>
      </div>
    </div>
  );
};

export default IncidentItem;