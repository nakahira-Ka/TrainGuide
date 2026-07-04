import { useState } from "react";
import type { Station } from "../../types/station";
import { useSuggest } from "../../hooks/useSuggest";
import { SuggestList } from "./SuggestList";

type Props = {
  label: string;
  value: Station | null;
  onSelect: (station: Station) => void;
};

export function StationInput({
  label,
  value,
  onSelect,
}: Props) {
  const [query, setQuery] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);

  const { suggestions, loading, error } = useSuggest(query);

  return (
    <div style={{ position: "relative" }}>
      <input
        value={query}
        placeholder={label}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggest(true);
        }}
        onFocus={() => {
          if (query.length > 0) setShowSuggest(true);
        }}
        onBlur={() => {
          setTimeout(() => setShowSuggest(false), 100);
        }}
      />

      {showSuggest && (
        <SuggestList
          items={suggestions}
          loading={loading}
          error={error}
          onSelect={(item) => {
            const station: Station = {
              id: item.id,
              apiId: item.id,
              name: item.name,
              operator: item.feedName ?? "",
              lat: item.lat ?? 0,
              lon: item.lon ?? 0,
              lines: [],
            };

            onSelect(station);
            setQuery(station.name);

            // ★ここが重要
            setShowSuggest(false);
          }}
        />
      )}
    </div>
  );
}