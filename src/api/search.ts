import stations from "../data/stations.json";
import type { Station } from "../types/station";

const stationList = stations as Station[];

export type SuggestItem = {
  id: string;
  name: string;
  operator: string;
  lat: number;
  lon: number;
};

export function searchStations(query: string): SuggestItem[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase();

  return stationList
    .filter((s) => s.name.includes(q))
    .map((s) => ({
      id: s.id,
      name: s.name,
      operator: s.operator,
      lat: s.lat,
      lon: s.lon,
    }));
}