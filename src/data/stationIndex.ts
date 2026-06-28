import stations from "./stations.json";
import type { Station } from "../types/station";

export const stationList: Station[] = stations;

export function findStationById(id: string) {
  return stationList.find((s) => s.id === id);
}