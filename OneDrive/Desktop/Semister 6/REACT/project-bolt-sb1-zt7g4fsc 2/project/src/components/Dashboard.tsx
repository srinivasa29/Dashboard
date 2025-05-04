import React, { useState } from 'react';
import { Incident, FilterType, SortOrder, IncidentFormData } from '../types';
import Header from './Header';
import IncidentFilter from './IncidentFilter';
import IncidentSort from './IncidentSort';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import { initialIncidents } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [filterType, setFilterType] = useState<FilterType>('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [showForm, setShowForm] = useState(false);
  
  const handleFilterChange = (filter: FilterType) => {
    setFilterType(filter);
  };
  
  const handleSortChange = (sort: SortOrder) => {
    setSortOrder(sort);
  };
  
  const handleNewIncident = () => {
    setShowForm(true);
  };
  
  const handleFormSubmit = (data: IncidentFormData) => {
    const newIncident: Incident = {
      id: Date.now(),
      ...data,
      reported_at: new Date().toISOString()
    };
    
    // Add new incident with animation
    setIncidents(prev => [newIncident, ...prev]);
    setShowForm(false);
    
    // Auto-switch to "All" filter if the new incident wouldn't be visible
    if (filterType !== 'All' && filterType !== data.severity) {
      setFilterType('All');
    }
    
    // Ensure newest first sorting to see the new incident
    if (sortOrder !== 'newest') {
      setSortOrder('newest');
    }
  };
  
  const handleFormCancel = () => {
    setShowForm(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNewIncident={handleNewIncident} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
            <h2 className="text-xl font-semibold text-gray-800">Incident Reports</h2>
            <div className="flex items-center space-x-4">
              <IncidentSort currentSort={sortOrder} onSortChange={handleSortChange} />
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Filter by Severity</h3>
            <IncidentFilter currentFilter={filterType} onFilterChange={handleFilterChange} />
          </div>
          
          <IncidentList 
            incidents={incidents} 
            filterType={filterType} 
            sortOrder={sortOrder} 
          />
        </div>
      </main>
      
      <IncidentForm 
        onSubmit={handleFormSubmit} 
        onCancel={handleFormCancel} 
        isVisible={showForm} 
      />
    </div>
  );
};

export default Dashboard;