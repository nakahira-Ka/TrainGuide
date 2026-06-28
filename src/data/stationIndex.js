import stations from "./stations.json";
export const stationList = stations;
export function findStationById(id) {
    return stationList.find((s) => s.id === id);
}
