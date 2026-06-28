import stations from "../data/stations.json";
const stationList = stations;
export function searchStations(query) {
    if (!query.trim())
        return [];
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
