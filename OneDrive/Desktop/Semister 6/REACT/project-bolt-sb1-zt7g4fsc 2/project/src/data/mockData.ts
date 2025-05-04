import { Incident } from '../types';

export const initialIncidents: Incident[] = [
  { 
    id: 1, 
    title: "Biased Recommendation Algorithm", 
    description: "Algorithm consistently favored certain demographics in content recommendations, leading to reinforcement of stereotypes and limited exposure to diverse perspectives for affected user groups.", 
    severity: "Medium", 
    reported_at: "2025-03-15T10:00:00Z" 
  },
  { 
    id: 2, 
    title: "LLM Hallucination in Critical Info", 
    description: "Large Language Model provided incorrect safety procedure information when asked about emergency protocols, potentially endangering users who might follow the fabricated instructions in crisis situations.", 
    severity: "High", 
    reported_at: "2025-04-01T14:30:00Z" 
  },
  { 
    id: 3, 
    title: "Minor Data Leak via Chatbot", 
    description: "Chatbot inadvertently exposed non-sensitive user metadata to other users during group conversations, revealing information like last login time and device type.", 
    severity: "Low", 
    reported_at: "2025-03-20T09:15:00Z" 
  },
  { 
    id: 4, 
    title: "Facial Recognition False Positive", 
    description: "System incorrectly identified and flagged an individual as a person of interest, resulting in unnecessary security review and temporary account restriction.", 
    severity: "Medium", 
    reported_at: "2025-03-25T16:45:00Z" 
  },
  { 
    id: 5, 
    title: "Autonomous Vehicle Navigation Failure", 
    description: "AI navigation system misinterpreted road markings during heavy rain, causing vehicle to briefly drift out of lane before safety override engaged. No collision occurred but represents a significant safety concern.", 
    severity: "High", 
    reported_at: "2025-04-05T08:20:00Z" 
  }
];