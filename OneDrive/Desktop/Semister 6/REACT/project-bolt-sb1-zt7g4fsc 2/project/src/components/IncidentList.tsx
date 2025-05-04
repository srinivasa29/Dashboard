import React from 'react';
import { Incident, FilterType, SortOrder } from '../types';
import IncidentItem from './IncidentItem';
import { AlertOctagon } from 'lucide-react';

interface IncidentListProps {
  incidents: Incident[];
  filterType: FilterType;
  sortOrder: SortOrder;
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents, filterType, sortOrder }) => {
  // Apply filtering
  let filteredIncidents = incidents;
  if (filterType !== 'All') {
    filteredIncidents = incidents.filter(incident => incident.severity === filterType);
  }
  
  // Apply sorting
  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  if (sortedIncidents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border border-gray-200 mt-4">
        <AlertOctagon className="text-gray-400 mb-3" size={40} />
        <p className="text-gray-500 text-lg">No incidents found</p>
        {filterType !== 'All' && (
          <p className="text-gray-400 mt-1">Try changing your filter settings</p>
        )}
      </div>
    );
  }

  return (
    <div className="mt-4 animate-fadeIn">
      {sortedIncidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;