export interface Station {
  id: string;
  name: string;
  operator: string;
  lat: number;
  lon: number;
  lines: string[];
  apiId: string; 
  feedName?: string; 
}