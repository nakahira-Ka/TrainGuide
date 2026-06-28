import { useState } from "react";
import { getRoute } from "../api/transit";
/* 徒歩だらけ除外 */
function filterRoutes(routes) {
    return routes.filter(r => {
        const hasTransit = r.legs.some((l) => l.kind === "transit");
        return hasTransit;
    });
}
/* スコアリング（改善版） */
function rankRoutes(routes) {
    return routes
        .map(r => ({
        ...r,
        score: r.durationSecs +
            r.transferCount * 5000 +
            r.legs.filter((l) => l.kind === "walk").length * 1000
    }))
        .sort((a, b) => a.score - b.score);
}
/* 1本だけ返す */
function pickBest(routes) {
    return routes[0] ?? null;
}
export function useRouteSearch() {
    const [route, setRoute] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const search = async (from, to) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getRoute(from.apiId, to.apiId);
            const journeys = data.journeys ?? [];
            const filtered = filterRoutes(journeys);
            const ranked = rankRoutes(filtered);
            setRoute(ranked[0]);
            const best = pickBest(ranked);
            setRoute(best);
            console.log("filtered:", filtered);
            console.log("journeys:", journeys);
            console.log("best:", best);
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoading(false);
        }
    };
    return { route, loading, error, search };
}
