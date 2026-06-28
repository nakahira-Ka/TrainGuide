const BASE_URL = "https://api.transit.ls8h.com";
async function request(url) {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
        throw new Error(`Transit API Error (${response.status})`);
    }
    return response.json();
}
export async function getRoute(from, to) {
    const params = new URLSearchParams({
        from,
        to,
    });
    return request(`/api/v1/plan?${params.toString()}`);
}
