import React from 'react';

interface SeverityBadgeProps {
  severity: 'Low' | 'Medium' | 'High';
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const baseClasses = "px-3 py-1 rounded-full text-xs font-medium transition-all duration-300";
  
  let classes = '';
  
  switch (severity) {
    case 'Low':
      classes = `${baseClasses} bg-blue-100 text-blue-800`;
      break;
    case 'Medium':
      classes = `${baseClasses} bg-amber-100 text-amber-800`;
      break;
    case 'High':
      classes = `${baseClasses} bg-red-100 text-red-800`;
      break;
    default:
      classes = `${baseClasses} bg-gray-100 text-gray-800`;
  }
  
  return (
    <span className={classes}>
      {severity}
    </span>
  );
};

export default SeverityBadge;