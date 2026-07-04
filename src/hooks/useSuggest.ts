import { useEffect, useState } from "react";
import { searchStation } from "../api/search";
import type { Station } from "../types/station";

/* 駅サジェスト */
export function useSuggest(keyword: string) {
  const [suggestions, setSuggestions] = useState<Station[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      if (!keyword) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await searchStation(keyword);

        
        console.log("API data:", data);
        
        const stations = (data as any)?.stations ?? [];

        console.log("stations:", stations);
        console.log("feedNames:", stations.map((s: any) => s.feedName));

        const mapped: Station[] = stations.slice(0, 5).map((s: any) => ({
          id: s.id,
          apiId: s.id,
          name: s.name,
          operator: s.feedName ?? "",
          feedName: s.feedName ?? "", 
          lat: s.lat ?? 0,
          lon: s.lon ?? 0,
          lines: [],
        }));

        console.log("mapped:", mapped);
        console.log("RAW stations:", stations);
        setSuggestions(mapped);
      } catch (e: any) {
        console.error(e);
        setError(e.message ?? "error");
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [keyword]);

  return { suggestions, loading, error };
}