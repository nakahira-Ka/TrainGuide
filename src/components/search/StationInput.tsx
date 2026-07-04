import { useState } from "react";
import type { Station } from "../../types/station";
import { useSuggest } from "../../hooks/useSuggest";
import { SuggestList } from "./SuggestList";

/* 駅入力 */
type Props = {
  label: string;
  value: Station | null;
  onSelect: (station: Station) => void;
};

export function StationInput({ label, value, onSelect }: Props) {
  const [query, setQuery] = useState("");

  const { suggestions, loading, error } = useSuggest(query);

  const [showSuggest, setShowSuggest] = useState(false);

  /* 表示制御 */
  const shouldShowSuggest =
    showSuggest && query.length > 0;

  return (
    <div style={{ position: "relative" }}>
      {/* 入力 */}
      <input
        value={query}
        placeholder={label}
        onChange={(e) => {
          const v = e.target.value;
          setQuery(v);

          // 入力中は表示
          setShowSuggest(true);
        }}
        onFocus={() => {
          if (query.length > 0) {
            setShowSuggest(true);
          }
        }}
        onBlur={() => {
          // 少し遅延しないとクリック拾えないので注意
          setTimeout(() => {
            setShowSuggest(false);
          }, 150);
        }}
      />

      {/* サジェスト */}
      {shouldShowSuggest && (
        <SuggestList
          items={suggestions}
          loading={loading}
          error={error}
          onSelect={(item) => {
            const station: Station = {
              id: item.id,
              apiId: item.id,
              name: item.name,
              operator: item.operator ?? "",
              lat: item.lat ?? 0,
              lon: item.lon ?? 0,
              lines: [],
            };

            // 親に渡す
            onSelect(station);

            // 入力反映
            setQuery(station.name);

            // 即閉じる
            setShowSuggest(false);
          }}
        />
      )}
    </div>
  );
}