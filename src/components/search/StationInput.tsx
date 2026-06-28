import { useState } from "react";
import type { Station } from "../../types/station";
import { useSuggest } from "../../hooks/useSuggest";
import { SuggestList } from "./SuggestList";
import { stationList } from "../../data/stationIndex";

type Props = {
  label: string;
  value: Station | null;
  onSelect: (station: Station) => void;
};

export function StationInput({ label, value, onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);

  const { suggestions, loading, error } = useSuggest(query);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type="text"
        placeholder={label}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggest(true);
        }}
        onFocus={() => setShowSuggest(query.length > 0)}
      />

      {showSuggest && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 100,
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        >
          <SuggestList
            items={suggestions}
            loading={loading}
            error={error}
            onSelect={(item: any) => {
              const station =
                stationList.find((s) => s.id === item.id);

              if (!station) return;

              onSelect(station);
              setQuery(station.name);
              setShowSuggest(false);
            }}
          />
        </div>
      )}
    </div>
  );
}