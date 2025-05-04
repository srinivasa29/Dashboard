import React, { useState } from 'react';
import { IncidentFormData } from '../types';
import { AlertCircle, X } from 'lucide-react';

interface IncidentFormProps {
  onSubmit: (data: IncidentFormData) => void;
  onCancel: () => void;
  isVisible: boolean;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit, onCancel, isVisible }) => {
  const [formData, setFormData] = useState<IncidentFormData>({
    title: '',
    description: '',
    severity: 'Medium'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit(formData);
      setFormData({
        title: '',
        description: '',
        severity: 'Medium'
      });
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 z-10 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`bg-white rounded-lg shadow-xl w-full max-w-md m-4 transition-all duration-300 ${
          isVisible ? 'transform scale-100' : 'transform scale-95'
        }`}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold text-gray-800">Report New Incident</h2>
          <button 
            onClick={onCancel}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md transition-colors ${
                errors.title ? 'border-red-400 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Brief title describing the incident"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.title}
              </p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="severity" className="block text-sm font-medium text-gray-700 mb-1">
              Severity
            </label>
            <select
              id="severity"
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className={`w-full px-3 py-2 border rounded-md transition-colors ${
                errors.description ? 'border-red-400 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Detailed description of what happened"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={14} className="mr-1" /> {errors.description}
              </p>
            )}
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncidentForm;