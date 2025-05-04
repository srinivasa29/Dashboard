import React from 'react';
import { FilterType } from '../types';

interface IncidentFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const IncidentFilter: React.FC<IncidentFilterProps> = ({ currentFilter, onFilterChange }) => {
  const filters: FilterType[] = ['All', 'Low', 'Medium', 'High'];
  
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(filter => {
        let buttonClass = "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200";
        
        if (filter === currentFilter) {
          switch (filter) {
            case 'All':
              buttonClass += " bg-gray-800 text-white";
              break;
            case 'Low':
              buttonClass += " bg-blue-600 text-white";
              break;
            case 'Medium':
              buttonClass += " bg-amber-600 text-white";
              break;
            case 'High':
              buttonClass += " bg-red-600 text-white";
              break;
          }
        } else {
          switch (filter) {
            case 'All':
              buttonClass += " bg-gray-100 text-gray-600 hover:bg-gray-200";
              break;
            case 'Low':
              buttonClass += " bg-blue-100 text-blue-600 hover:bg-blue-200";
              break;
            case 'Medium':
              buttonClass += " bg-amber-100 text-amber-600 hover:bg-amber-200";
              break;
            case 'High':
              buttonClass += " bg-red-100 text-red-600 hover:bg-red-200";
              break;
          }
        }
        
        return (
          <button
            key={filter}
            className={buttonClass}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default IncidentFilter;