import { useState } from "react";
import { getRoute } from "../api/transit";
import type { Station } from "../types/station";
/* 徒歩だらけ除外 */
function filterRoutes(routes: any[]) {
  return routes.filter(r => {
    const hasTransit = r.legs.some((l: any) => l.kind === "transit");
    return hasTransit;
  });
}
/* スコアリング（改善版） */
function rankRoutes(routes: any[]) {
  return routes
    .map(r => ({
      ...r,
      score:
        r.durationSecs +
        r.transferCount * 5000 +
        r.legs.filter((l: any) => l.kind === "walk").length * 1000
    }))
    .sort((a, b) => a.score - b.score);
}
/* 1本だけ返す */
function pickBest(routes: any[]) {
  return routes[0] ?? null;
}

export function useRouteSearch() {
  const [route, setRoute] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (from: Station, to: Station) => {
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
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { route, loading, error, search };
}