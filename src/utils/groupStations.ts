import type { Station } from "../types/station";

/* 駅名でまとめる */
export function groupStations(stations: Station[]) {
  const map = new Map<string, Station[]>();

  for (const s of stations) {
    const list = map.get(s.name) ?? [];
    list.push(s);
    map.set(s.name, list);
  }

  return map;
}