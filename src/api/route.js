import { toGeo } from "../utils/toGeo";
export async function searchRoute(from, to) {
    const url = `https://api.transit.ls8h.com/api/v1/plan?from=${encodeURIComponent(toGeo(from.lat, from.lon))}&to=${encodeURIComponent(toGeo(to.lat, to.lon))}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Transit API Error: ${res.status}`);
    }
    return res.json();
}
