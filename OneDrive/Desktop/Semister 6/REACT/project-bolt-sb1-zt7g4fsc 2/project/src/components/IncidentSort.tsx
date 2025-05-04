import React from 'react';
import { SortOrder } from '../types';
import { ArrowUpNarrowWide, ArrowDownNarrowWide } from 'lucide-react';

interface IncidentSortProps {
  currentSort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

const IncidentSort: React.FC<IncidentSortProps> = ({ currentSort, onSortChange }) => {
  return (
    <div className="flex border rounded-md overflow-hidden">
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors duration-200 ${
          currentSort === 'newest'
            ? 'bg-gray-100 text-gray-900'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
        onClick={() => onSortChange('newest')}
      >
        <ArrowDownNarrowWide size={16} />
        <span>Newest</span>
      </button>
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm transition-colors duration-200 ${
          currentSort === 'oldest'
            ? 'bg-gray-100 text-gray-900'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
        onClick={() => onSortChange('oldest')}
      >
        <ArrowUpNarrowWide size={16} />
        <span>Oldest</span>
      </button>
    </div>
  );
};

export default IncidentSort;