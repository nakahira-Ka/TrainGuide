import { useEffect, useState } from "react";
import { stationList } from "../data/stationIndex";

import type { Station } from "../types/station";

export type SuggestItem = {
  id: string;
  name: string;
  operator: string;
};

export function useSuggest(query: string) {
  const [suggestions, setSuggestions] = useState<SuggestItem[]>([]);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim().length < 1) {
      setSuggestions([]);
      return;
    }

    const q = query.toLowerCase();

    const result = stationList
      .filter((s: Station) => s.name.toLowerCase().includes(q))
      .map((s: Station) => ({
        id: s.id,
        name: s.name,
        operator: s.operator,
      }));

    setSuggestions(result);
  }, [query]);

  return {
    suggestions,
    loading,
    error,
  };
}