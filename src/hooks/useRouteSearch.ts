import { useState } from "react";
import { getRoute } from "../api/transit";
import type { Station } from "../types/station";

/* 経路検索フック */
export function useRouteSearch() {
  const [route, setRoute] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (from: Station, to: Station) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getRoute(from.apiId, to.apiId);

      // 重要：APIの結果をそのまま使う
      const journeys = data?.journeys ?? [];

      setRoute(journeys);
    } catch (e: any) {
      setError(e.message ?? "経路取得エラー");
    } finally {
      setLoading(false);
    }
  };

  return { route, loading, error, search };
}