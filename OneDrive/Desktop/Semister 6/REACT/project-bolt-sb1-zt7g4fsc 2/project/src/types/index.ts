export interface Incident {
  id: number;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
  reported_at: string;
}

export type SortOrder = 'newest' | 'oldest';
export type FilterType = 'All' | 'Low' | 'Medium' | 'High';

export interface IncidentFormData {
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
}