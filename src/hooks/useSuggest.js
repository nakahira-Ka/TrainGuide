import { useEffect, useState } from "react";
import { stationList } from "../data/stationIndex";
export function useSuggest(query) {
    const [suggestions, setSuggestions] = useState([]);
    const [loading] = useState(false);
    const [error] = useState(null);
    useEffect(() => {
        if (query.trim().length < 1) {
            setSuggestions([]);
            return;
        }
        const q = query.toLowerCase();
        const result = stationList
            .filter((s) => s.name.toLowerCase().includes(q))
            .map((s) => ({
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
